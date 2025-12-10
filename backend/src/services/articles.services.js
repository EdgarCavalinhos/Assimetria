import db from "../database/db.js";

function getAllArticles() {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM articles", [], (err, rows) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function createArticle(article) {
    return new Promise((resolve, reject) => {
        const date = new Date().toISOString(); 
        
        const query = "INSERT INTO articles (title, content, topic, author, date) VALUES (?, ?, ?, ?, ?)";

        db.run(query, [article.title, article.content, article.topic, article.author, date], function(err) {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve({ 
                    id: this.lastID, 
                    ...article, 
                    date 
                });
            }
        });
    });
}

export default { getAllArticles, createArticle };