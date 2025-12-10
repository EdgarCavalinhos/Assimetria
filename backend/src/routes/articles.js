
import express from "express";
import ArticlesController from "../controllers/articles.controller.js";

const articlesRoutes = express.Router();

articlesRoutes.get("/get-articles", ArticlesController.getAllArticles);

articlesRoutes.post("/create-article", ArticlesController.createArticle);

export default articlesRoutes;