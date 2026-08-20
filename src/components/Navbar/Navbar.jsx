import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ logo, links }) {
  const [isOpen, setIsOpen] = useState(false);
  return <header className="navbar"><nav className="navbar__content" aria-label="Main navigation"><a className="navbar__logo" href="#top">{logo}</a><button className="navbar__toggle" type="button" aria-label="Toggle navigation menu" aria-expanded={isOpen} aria-controls="main-navigation" onClick={() => setIsOpen((open) => !open)}><span /><span /><span /></button><ul id="main-navigation" className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>{links.map((link) => <li key={link.label}><a href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a></li>)}</ul></nav></header>;
}

export default Navbar;
