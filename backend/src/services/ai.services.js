import fetch from "node-fetch";
import db from "../database/db.js"; // Para ler o último tópico
import articlesServices from "./articles.services.js"; // Para guardar

const HF_API_URL = "https://router.huggingface.co/v1/chat/completions";
const HF_MODEL = "google/gemma-2-2b-it";

const TOPICS = [
    "Artificial Intelligence",
    "Web Development",
    "Cloud Computing",
    "Cybersecurity",
    "Future Tech",
    "Robotics"
];

function getNextTopic() {
    return new Promise((resolve) => {
        db.get("SELECT topic FROM articles ORDER BY id DESC LIMIT 1", [], (err, row) => {
            let lastTopic = "";
            if (row) {
                lastTopic = row.topic;
                console.log("Último tópico na BD foi:", lastTopic);
            }

            const availableTopics = TOPICS.filter(t => t !== lastTopic);

            const randomTopic = availableTopics[Math.floor(Math.random() * availableTopics.length)];

            console.log("Próximo tópico escolhido:", randomTopic);
            resolve(randomTopic);
        });
    });
}

async function generateDailyArticle() {
    console.log("A iniciar Robô Escritor...");

    try {
        const topic = await getNextTopic();

        const systemPrompt = `
        You are a news article generator.
        
        Your task:
        - Write a SHORT, exciting breaking news article in English.
        - Topic: a technology-related subject provided by the user.
        - Style: engaging, journalistic, but concise.
        
        You MUST respond ONLY with a valid JSON object in this exact structure:
        {
          "title": "string",
          "author": "string",
          "topic": "string",
          "content": "string"
        }
        
        Rules:
        - "title": a catchy news-style title.
        - "author": always "AI News Bot".
        - "topic": MUST exactly match the topic given by the user.
        - "content": 3 to 6 short paragraphs, no markdown, no bullet points.
        
        Important:
        - Do NOT include markdown headings, backticks, explanations or extra text.
        - Do NOT wrap the JSON in any other text.
        - The response must be valid JSON.
        `.trim();

        const userPrompt = `Generate a breaking news article about the topic: "${topic}".`;

        const response = await fetch(HF_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.HF_TOKEN}`
            },
            body: JSON.stringify({
                model: HF_MODEL,
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userPrompt },
                ],
                max_tokens: 400,
                temperature: 0.8,
            }),
        });

        if (!response.ok) throw new Error(`Erro API: ${response.statusText}`);
        const result = await response.json();

        const assistantMessage = result?.choices?.[0]?.message?.content || "";
        const cleanJson = assistantMessage.replace(/```json/g, "").replace(/```/g, "").trim();

        let structured;
        try {
            structured = JSON.parse(cleanJson);
        } catch (error) {
            structured = {}; 
        }

        const finalObject = {
            inputPrompt: userPrompt,
            model: result?.model,
            usage: result?.usage,
            title: structured.title || `${topic}: New Discoveries`,
            author: structured.author || "AI News Bot",
            topic: structured.topic || topic,
            article: structured.content || "No content generated.",
        };

        const articleForDB = {
            title: finalObject.title,
            content: finalObject.article,
            topic: finalObject.topic,
            author: finalObject.author,
        };

        const saved = await articlesServices.createArticle(articleForDB);
        console.log(` Sucesso! Artigo ID ${saved.id} sobre '${topic}' criado.`);

        return saved;

    } catch (error) {
        console.error("Erro no Robô:", error);
    }
}

export default { generateDailyArticle };