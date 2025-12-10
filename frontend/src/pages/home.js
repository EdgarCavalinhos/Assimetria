import { useArticles } from '../hooks/useArticles';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const { articles, loading } = useArticles();
    const navigate = useNavigate();
    if (loading) return <p>Loading...</p>;

    if (articles.length === 0) {
        return (
            <div className="page-container">
                <section className="hero-section">
                <h2>Stories, Code, and Creativity</h2>
                <p>
                    A curated space for thoughts on technology, innovation, and continuous learning.
                </p>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>No Articles Yet</h2>
            </section>
            </div>
        );
    }

    const featuredArticle = articles[0];
    const otherArticles = articles.slice(1, 10);

    return (
        <div className="page-container">
            <section className="hero-section">
                <h2>Stories, Code, and Creativity</h2>
                <p>
                    A curated space for thoughts on technology, innovation, and continuous learning.
                </p>
            </section>

            <section className="featured-article">
                <div className="article-card featured-card"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/articles/${featuredArticle.id}`)}
                >
                    <p style={{ color: '#D32F2F' }}>{featuredArticle.topic}</p>
                    <h3>{featuredArticle.title}</h3>
                    <p>{featuredArticle.content.substring(0, 550)}...</p>
                    <p>Author: {featuredArticle.author}</p>
                    <small>
                        {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </small>
                </div>
            </section>

            <section className="other-section">
                <h2>Latest Articles</h2>
                <div className="articles-grid">
                    {otherArticles.map(article => (
                        <div className="article-card" key={article.id}
                        onClick={() => navigate(`/articles/${article.id}`)}>
                            <p style={{ color: '#D32F2F' }}>{article.topic}</p>
                            <h3>{article.title}</h3>
                            <p>{article.content.substring(0, 100)}...</p>
                            <small>
                                {new Date(article.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </small>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;