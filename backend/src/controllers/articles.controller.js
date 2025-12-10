import articlesServices from "../services/articles.services.js"; 

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

export default { getAllArticles, createArticle };