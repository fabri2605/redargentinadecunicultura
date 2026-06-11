import { useState, useEffect } from 'react'
import racLogo from '../assets/RAC_LOGO.png'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes Somos', href: '#quienes-somos' },
  { label: 'Congreso', href: '#congreso' },
  /* { label: 'Publicaciones', href: '#publicaciones' }, */
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#inicio" className="navbar-logo" onClick={(e) => handleLink(e, '#inicio')}>
          <img src={racLogo} alt="RAC Logo" className="logo-img" />
        </a>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleLink(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent;
          transition: background 0.3s, box-shadow 0.3s;
        }
        .navbar.scrolled {
          background: rgba(12, 45, 90, 0.97);
          box-shadow: 0 2px 20px rgba(0,0,0,0.2);
          backdrop-filter: blur(10px);
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-img {
          height: 52px;
          width: 52px;
          object-fit: contain;
          border-radius: 50%;
          background: white;
          padding: 4px;
          display: block;
        }
        .navbar-links {
          display: flex;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-links a {
          color: white;
          font-size: 14px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 6px;
          transition: background 0.2s;
          text-decoration: none;
          white-space: nowrap;
        }
        .navbar-links a:hover {
          background: rgba(255,255,255,0.15);
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        @media (max-width: 768px) {
          .hamburger { display: flex; }
          .navbar-links {
            display: none;
            position: absolute;
            top: 70px;
            left: 0; right: 0;
            background: rgba(12, 45, 90, 0.98);
            flex-direction: column;
            gap: 0;
            padding: 12px 0;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          }
          .navbar-links.open { display: flex; }
          .navbar-links a { padding: 14px 24px; border-radius: 0; }
          .logo-img { height: 42px; width: 42px; }
        }
      `}</style>
    </nav>
  )
}
