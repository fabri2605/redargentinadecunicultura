import racLogo from '../assets/RAC_LOGO.png'

const SvgEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const SvgInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const SvgFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const SvgYoutube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon fill="#0d1f15" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)

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
            <img src={racLogo} alt="RAC Logo" className="footer-logo-img" />
            <div>
              <div className="footer-logo-rac">RAC</div>
              <div className="footer-logo-name">Red Argentina de Cunicultura</div>
            </div>
          </div>
          <p>Fortaleciendo la producción cunícola argentina mediante la cooperación interinstitucional desde 2023.</p>
          <div className="footer-social">
            <a href="mailto:redargentinadecunicultura@gmail.com" className="social-icon" title="Email"><SvgEmail /></a>
            <a href="https://instagram.com/rac_arg" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram"><SvgInstagram /></a>
            <a href="https://www.facebook.com/share/1CdyeyimQs/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook"><SvgFacebook /></a>
            <a href="https://youtube.com/shorts/deEWuPpJ8XA?feature=share" target="_blank" rel="noopener noreferrer" className="social-icon" title="YouTube"><SvgYoutube /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            {[
              ['Inicio', '#inicio'],
              ['Quiénes Somos', '#quienes-somos'],
              ['Congreso', '#congreso'],
              /* ['Publicaciones', '#publicaciones'], */
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
            <li><a href="#congreso" onClick={(e) => handleNav(e, '#congreso')}>VIII Congreso 2026</a></li>
            <li><a href="#">Circular N°1</a></li>
            <li><a href="#">Circular N°2</a></li>
            <li><a href="#">Envío de Trabajos</a></li>
            <li><a href="#">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* <div className="footer-links">
          <h4>Publicaciones</h4>
          <ul>
            <li><a href="#">Manuales INTA</a></li>
            <li><a href="#">Saber Cunícola</a></li>
            <li><a href="#">Publicaciones RAC</a></li>
          </ul>
        </div> */}
      </div>

      <div className="footer-bottom">
        <span>© 2026 Red Argentina de Cunicultura. Todos los derechos reservados.</span>
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
        }
        .footer-logo-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          border-radius: 50%;
          background: white;
          padding: 4px;
          flex-shrink: 0;
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
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .social-icon:hover { background: rgba(255,255,255,0.18); color: white; }
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
