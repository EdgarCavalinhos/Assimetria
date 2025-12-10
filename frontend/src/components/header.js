import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <h1>Journal</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;