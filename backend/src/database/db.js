import sqlite3 from "sqlite3";

const db = new sqlite3.Database('../../database.db', (err) => {
    if (err) {
        console.error("Error connecting to the SQLite database:", err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});


db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS articles (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, topic TEXT, author TEXT, date TEXT)");
});

export default db;