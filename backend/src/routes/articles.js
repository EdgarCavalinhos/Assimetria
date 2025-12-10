
import express from "express";
import ArticlesController from "../controllers/articles.controller.js";

const articlesRoutes = express.Router();

articlesRoutes.get("/get-articles", ArticlesController.getAllArticles);

articlesRoutes.post("/create-article", ArticlesController.createArticle);

articlesRoutes.get("/article/:id", ArticlesController.getOne);

articlesRoutes.post("/articles/ai-generate", ArticlesController.generateWithAI);


export default articlesRoutes;