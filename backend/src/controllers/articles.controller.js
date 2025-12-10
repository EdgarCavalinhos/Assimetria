import articlesServices from "../services/articles.services.js"; 
import aiService from "../services/ai.services.js";


const getAllArticles = async (req, res) => {
    try {
        const articles = await articlesServices.getAllArticles();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createArticle = async (req, res) => {
    try {
        const newArticle = await articlesServices.createArticle(req.body);
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOne = async (req, res) => {
    try {
        const id = req.params.id; 
        const article = await articlesServices.getArticleById(id);
        
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }
        
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const generateWithAI = async (req, res) => {
    try {
      const saved = await aiService.generateDailyArticle();
      res.status(201).json(saved);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export default { getAllArticles, createArticle, getOne, generateWithAI  };