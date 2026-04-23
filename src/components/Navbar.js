import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="bracket">[</span>
        GA
        <span className="bracket">]</span>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li>
          <a href="https://github.com/GangapuramAryan" target="_blank" rel="noreferrer">GitHub ↗</a>
        </li>
      </ul>
      <div className="nav-dot" title="Available for opportunities" />
    </nav>
  );
}
