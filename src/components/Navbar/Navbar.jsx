import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`} id="navbar">
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" onClick={(e) => handleLinkClick(e, '#home')}>
          <span className="logo-m">M</span>
          <span className="logo-divider">/</span>
          <span className="logo-l">L</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a>
          </li>
          <li>
            <a href="#servicos" onClick={(e) => handleLinkClick(e, '#servicos')}>Serviços</a>
          </li>
          <li>
            <a href="#contato" onClick={(e) => handleLinkClick(e, '#contato')}>Contato</a>
          </li>
        </ul>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          id="menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
