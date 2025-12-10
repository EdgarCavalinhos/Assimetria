import React from 'react';
import { useArticles } from '../hooks/useArticles'; 

function Articles() {
    const { articles, loading } = useArticles();

    if (loading) return <p className="page-container">A carregar artigos...</p>;


    if (articles.length === 0) {
        return (
            <div className="page-container" style={{ textAlign: 'center', marginTop: '50px' }}>
                <header className="hero-section">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>No Articles Yet</h2>
                    <p>The AI is currently researching new topics.</p>
                    <p style={{ color: '#888', marginTop: '10px' }}>Check back later, new article at 7:30</p>
                </header>
            </div>
        );
    }

    return (
        <div className="page-container">
            <header className="hero-section" style={{ marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Full Feed</h2>
                <p>Reading all articles from start to finish.</p>
            </header>

            <div className="articles-feed">
                {articles.map(article => (
                    <article key={article.id} className="feed-item">
                        
                        {/* 1. Cabeçalho do Post (Tópico e Data) */}
                        <div className="feed-meta">
                            <span className="topic-badge">{article.topic}</span>
                            <span className="date">
                                {new Date(article.date).toLocaleDateString('en-US', {
                                    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                })}
                            </span>
                        </div>

                        {/* 2. Título Grande */}
                        <h2 className="feed-title">{article.title}</h2>

                        {/* 3. O CONTEÚDO COMPLETO (Sem cortes) */}
                        <div className="feed-content">
                            {article.content}
                        </div>

                        {/* 4. Rodapé do Post (Autor) */}
                        <div className="feed-footer">
                            <p>Written by <strong>{article.author}</strong></p>
                        </div>

                        {/* Linha separadora entre artigos */}
                        <hr className="feed-divider" />
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Articles;