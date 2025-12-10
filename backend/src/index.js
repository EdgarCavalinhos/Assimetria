import express from "express";
import dotenv from "dotenv";
import db from "./database/db.js";
import articlesRoutes from "./routes/articles.js";
import cors from "cors";
import cron from "node-cron";
import aiService from "./services/ai.services.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

cron.schedule("30 7 * * *", async () => {
    console.log("CRON DISPARADO: A gerar artigo automático...");
    aiService.generateDailyArticle();
});

app.use("/", articlesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });