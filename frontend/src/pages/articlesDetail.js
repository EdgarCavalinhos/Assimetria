import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(`http://54.170.63.117:3000/article/${id}`);
        const data = await res.json();
        setArticle(data);
      } catch (error) {
        console.log("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  if (loading) return <p className="page-container">Loading...</p>;
  if (!article) return <p className="page-container">Article not found.</p>;

  return (
    <div className="page-container">
      {/* botão simples para voltar */}
      <button
        onClick={() => navigate(-1)}
        style={{
          border: "none",
          background: "none",
          color: "#555",
          fontSize: "0.9rem",
          cursor: "pointer",
          marginBottom: "20px",
          padding: 0,
        }}
      >
        ← Back to articles
      </button>

      <section className="featured-article">
        <div className="article-card featured-card">
          <p style={{ color: "#D32F2F", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>
            {article.topic}
          </p>

          <h3>{article.title}</h3>

          <p style={{ fontSize: "0.9rem", color: "#777", marginBottom: "20px" }}>
            Author: <strong>{article.author}</strong> ·{" "}
            {new Date(article.date).toLocaleString()}
          </p>

          <div className="feed-content">
            {article.content}
          </div>
        </div>
      </section>
    </div>
  );
}
