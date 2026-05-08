import { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = 'service_pqw70pb'
const TEMPLATE_ID = 'template_mjqyqu7'
const PUBLIC_KEY  = 'aGWwEIOcSwwRKk7Rx'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'ok' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.mensaje) return
    setStatus('sending')
    emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setStatus('ok')
        setForm({ nombre: '', email: '', asunto: '', mensaje: '' })
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-label" style={{ color: '#7dd9a2' }}>Contacto y Redes</div>
            <h2>Conectate con la RAC</h2>
            <p>
              ¿Sos productor, investigador, docente o estudiante vinculado a la cunicultura?
              Sumate a nuestra red y formá parte de la comunidad cunícola argentina.
            </p>

            <div className="contact-items">
              <a href="mailto:redargentinadecunicultura@gmail.com" className="contact-item">
                <div className="contact-item-icon">✉️</div>
                <div>
                  <div className="contact-item-label">Correo electrónico</div>
                  <div className="contact-item-value">redargentinadecunicultura@gmail.com</div>
                </div>
              </a>

              <a
                href="https://instagram.com/rac_arg"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">📷</div>
                <div>
                  <div className="contact-item-label">Instagram</div>
                  <div className="contact-item-value">@rac_arg</div>
                </div>
              </a>

              <a href="#" className="contact-item">
                <div className="contact-item-icon">👥</div>
                <div>
                  <div className="contact-item-label">Facebook</div>
                  <div className="contact-item-value">Red Argentina de Cunicultura</div>
                </div>
              </a>

              <a
                href="https://youtube.com/shorts/deEWuPpJ8XA?feature=share"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">▶️</div>
                <div>
                  <div className="contact-item-label">Canal YouTube</div>
                  <div className="contact-item-value">RAC Argentina</div>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h3>Envianos un mensaje</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="tu@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="asunto">Tema</label>
                <select id="asunto" name="asunto" value={form.asunto} onChange={handleChange}>
                  <option value="">Seleccioná un asunto</option>
                  <option>Quiero sumarme a la RAC</option>
                  <option>Consulta sobre el Congreso</option>
                  <option>Colaboración institucional</option>
                  <option>Publicaciones</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escribí tu mensaje aquí..." value={form.mensaje} onChange={handleChange} required />
              </div>

              {status === 'ok' && (
                <div className="form-feedback form-feedback--ok">✅ ¡Mensaje enviado! Te respondemos a la brevedad.</div>
              )}
              {status === 'error' && (
                <div className="form-feedback form-feedback--error">❌ Hubo un error al enviar. Intentá de nuevo o escribinos directo al correo.</div>
              )}

              <button type="submit" className="form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact {
          background: linear-gradient(135deg, #0c2d5a, #1589b3);
          padding: 96px 24px;
        }
        .contact-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: start;
        }
        .contact-info h2 {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        .contact-info p {
          color: rgba(255,255,255,0.75);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 40px;
        }
        .contact-items { display: flex; flex-direction: column; gap: 12px; }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
        }
        .contact-item:hover { background: rgba(255,255,255,0.15); transform: translateX(4px); }
        .contact-item-icon { font-size: 22px; flex-shrink: 0; }
        .contact-item-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.5); margin-bottom: 2px; }
        .contact-item-value { font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.9); }
        .contact-form-wrap {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.2);
        }
        .contact-form-wrap h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 28px;
        }
        .contact-form { display: flex; flex-direction: column; gap: 20px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label { font-size: 13px; font-weight: 600; color: var(--gray-700); }
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 14px;
          border: 2px solid var(--gray-300);
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          color: var(--gray-900);
          transition: border-color 0.2s;
          background: white;
          outline: none;
          resize: none;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus { border-color: var(--green-main); }
        .form-group select { cursor: pointer; }
        .form-submit {
          background: var(--green-main);
          color: white;
          font-size: 15px;
          font-weight: 600;
          padding: 14px;
          border-radius: 8px;
          transition: all 0.2s;
          width: 100%;
        }
        .form-submit:hover:not(:disabled) { background: var(--green-dark); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(21,137,179,0.3); }
        .form-submit:disabled { opacity: 0.7; cursor: not-allowed; }
        .form-feedback { padding: 12px 16px; border-radius: 8px; font-size: 14px; font-weight: 500; }
        .form-feedback--ok { background: #e0f5fc; color: #0a5f80; }
        .form-feedback--error { background: #fde8e8; color: #b91c1c; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr; }
          .contact-form-wrap { padding: 28px 20px; }
        }
      `}</style>
    </section>
  )
}
