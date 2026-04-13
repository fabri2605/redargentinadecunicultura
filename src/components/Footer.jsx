export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span>🐇</span>
            <div>
              <div className="footer-logo-rac">RAC</div>
              <div className="footer-logo-name">Red Argentina de Cunicultura</div>
            </div>
          </div>
          <p>Fortaleciendo la producción cunícola argentina mediante la cooperación interinstitucional desde 2023.</p>
          <div className="footer-social">
            <a href="mailto:redargentinadecunicultura@gmail.com" className="social-icon" title="Email">✉️</a>
            <a href="https://instagram.com/rac_arg" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">📷</a>
            <a href="#" className="social-icon" title="Facebook">👥</a>
            <a href="https://youtube.com/shorts/deEWuPpJ8XA?feature=share" target="_blank" rel="noopener noreferrer" className="social-icon" title="YouTube">▶️</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            {[
              ['Inicio', '#inicio'],
              ['Quiénes Somos', '#quienes-somos'],
              ['Congreso', '#congreso'],
              ['Publicaciones', '#publicaciones'],
              ['Contacto', '#contacto'],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={(e) => handleNav(e, href)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Congreso</h4>
          <ul>
            <li><a href="#congreso" onClick={(e) => handleNav(e, '#congreso')}>VIII Congreso 2025</a></li>
            <li><a href="#">Circular N°1</a></li>
            <li><a href="#">Circular N°2</a></li>
            <li><a href="#">Envío de Trabajos</a></li>
            <li><a href="#">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Publicaciones</h4>
          <ul>
            <li><a href="#">Manuales INTA</a></li>
            <li><a href="#">Saber Cunícola</a></li>
            <li><a href="#">Publicaciones RAC</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Red Argentina de Cunicultura. Todos los derechos reservados.</span>
        <span>Conformada en mayo de 2023</span>
      </div>

      <style>{`
        .footer {
          background: #0d1f15;
          color: rgba(255,255,255,0.7);
          padding: 64px 24px 0;
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 24px;
        }
        .footer-logo-rac { font-size: 20px; font-weight: 800; color: white; line-height: 1; }
        .footer-logo-name { font-size: 11px; color: rgba(255,255,255,0.6); }
        .footer-brand p { font-size: 14px; line-height: 1.7; margin-bottom: 24px; }
        .footer-social { display: flex; gap: 12px; }
        .social-icon {
          width: 38px;
          height: 38px;
          background: rgba(255,255,255,0.08);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .social-icon:hover { background: rgba(255,255,255,0.18); }
        .footer-links h4 { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: white; margin-bottom: 16px; }
        .footer-links ul { display: flex; flex-direction: column; gap: 10px; }
        .footer-links a { font-size: 14px; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s; }
        .footer-links a:hover { color: #7dd9a2; }
        .footer-bottom {
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          flex-wrap: wrap;
          gap: 8px;
        }
        @media (max-width: 900px) {
          .footer-inner { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}
