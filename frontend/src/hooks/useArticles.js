import { useState, useEffect } from 'react';

export function useArticles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch('http://54.170.63.117:3000/get-articles')
            .then(response => response.json())
            .then(data => {
                const sortedData = data.sort((a, b) => b.id - a.id);
                setArticles(sortedData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar artigos:', error);
                setLoading(false);
            });
    }, []);

    return { articles, loading };
}