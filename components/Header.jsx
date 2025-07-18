import React from "react";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <h1 className="title">Senithudassa</h1>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
