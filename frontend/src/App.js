import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Articles from './pages/articles';
import './App.css';
import ArticleDetail from './pages/articlesDetail';

function App() {
  return (
    <BrowserRouter>
      {/* O Header fica fora das Routes para aparecer em todas as páginas */}
      <Header />
      
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </main>
      
    </BrowserRouter>
  );
}

export default App;