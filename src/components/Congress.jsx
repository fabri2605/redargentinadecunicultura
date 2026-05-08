import { useState } from 'react'

const circulars = [
  {
    id: 1,
    title: 'Circular N°1',
    desc: 'Primera circular informativa del VIII Congreso Americano de Cunicultura. Información general, fechas y convocatoria.',
  },
  {
    id: 2,
    title: 'Circular N°2',
    desc: 'Segunda circular con detalles de áreas temáticas, normas de presentación y fechas límite de envío de trabajos.',
  },
]

const thematicAreas = [
  'Genética y Mejoramiento',
  'Nutrición y Alimentación',
  'Sanidad y Bienestar Animal',
  'Reproducción y Manejo Reproductivo',
  'Producción y Sistemas Productivos',
  'Economía y Mercados',
  'Extensión y Educación',
  'Tecnología e Innovación',
]

const menuItems = ['circulares', 'autores', 'faq', 'comoycuando']
const menuLabels = { circulares: 'Circulares', autores: 'Guía para Autores', faq: 'Preguntas Frecuentes', comoycuando: 'Cómo y cuándo' }

export default function Congress() {
  const [activeMenu, setActiveMenu] = useState('circulares')

  return (
    <section id="congreso" className="congress">
      <div className="congress-header">
        <div className="container">
          <div className="congress-badge">2026 · Esquel, Chubut</div>
          <h2 className="congress-title">
            VIII Congreso Americano<br />de Cunicultura
          </h2>
          <p className="congress-subtitle">
            Un espacio estratégico para el intercambio de conocimientos y experiencias
            en producción cunícola a nivel continental.
          </p>
        </div>
      </div>

      <div className="container congress-body">
        <div className="congress-sidebar">
          <nav className="congress-nav">
            {menuItems.map(item => (
              <button
                key={item}
                className={`congress-nav-btn${activeMenu === item ? ' active' : ''}`}
                onClick={() => setActiveMenu(item)}
              >
                {menuLabels[item]}
              </button>
            ))}
          </nav>

          <div className="event-info-card">
            <h4>Evento simultáneo</h4>
            <div className="event-info-divider" />
            <p>
              El congreso se desarrollará de manera simultánea con el{' '}
              <strong>49° Congreso Argentino de Producción Animal</strong> en la Sociedad Rural de Esquel.
            </p>
            <a
              href="https://www.aapa.org.ar/49capa/"
              target="_blank"
              rel="noopener noreferrer"
              className="event-link"
            >
              Ver CAPA 2026 →
            </a>
          </div>
        </div>

        <div className="congress-content">
          {activeMenu === 'circulares' && (
            <div className="congress-panel">
              <h3>Circulares</h3>
              <div className="circulars-grid">
                {circulars.map(c => (
                  <div key={c.id} className="circular-card">
                    <div className="circular-number">N°{c.id}</div>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                    <button className="circular-btn">Descargar PDF</button>
                  </div>
                ))}
              </div>

              <div className="areas-section">
                <h4>Áreas Temáticas</h4>
                <div className="areas-grid">
                  {thematicAreas.map(area => (
                    <div key={area} className="area-chip">
                      <span className="area-dot" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              <div className="submission-section">
                <h4>Envío de Trabajos</h4>
                <div className="submission-items">
                  <a href="#" className="submission-item">
                    <span className="sub-icon">📄</span>
                    <div>
                      <div className="sub-title">Normas de Redacción</div>
                      <div className="sub-desc">Instrucciones para la preparación del manuscrito</div>
                    </div>
                  </a>
                  <a href="#" className="submission-item">
                    <span className="sub-icon">📋</span>
                    <div>
                      <div className="sub-title">Plantilla de Resúmenes</div>
                      <div className="sub-desc">Formato oficial para presentación de resúmenes</div>
                    </div>
                  </a>
                  <a href="#" className="submission-item">
                    <span className="sub-icon">🖼️</span>
                    <div>
                      <div className="sub-title">Plantilla de Poster</div>
                      <div className="sub-desc">Versión papel y digital disponibles</div>
                    </div>
                  </a>
                  <a href="#" className="submission-item">
                    <span className="sub-icon">📤</span>
                    <div>
                      <div className="sub-title">Formulario de Envío</div>
                      <div className="sub-desc">Portal de carga de trabajos en línea</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'autores' && (
            <div className="congress-panel">
              <h3>Guía para Autores</h3>
              <div className="guide-content">
                <div className="guide-step">
                  <div className="step-num">01</div>
                  <div>
                    <h4>Modalidad de presentación</h4>
                    <p>Se aceptan presentaciones orales y en formato poster (papel y digital). Los trabajos deben ser inéditos y relacionados a las áreas temáticas del congreso.</p>
                  </div>
                </div>
                <div className="guide-step">
                  <div className="step-num">02</div>
                  <div>
                    <h4>Normas de redacción</h4>
                    <p>Los resúmenes deben seguir el formato establecido en la plantilla oficial. Se aceptarán en español, portugués e inglés. Extensión máxima: 300 palabras.</p>
                  </div>
                </div>
                <div className="guide-step">
                  <div className="step-num">03</div>
                  <div>
                    <h4>Envío</h4>
                    <p>Completar el formulario de envío en línea adjuntando el resumen en el formato correspondiente. Se confirmará la recepción por correo electrónico.</p>
                  </div>
                </div>
                <div className="guide-step">
                  <div className="step-num">04</div>
                  <div>
                    <h4>Evaluación</h4>
                    <p>El comité científico evaluará los trabajos y notificará la aceptación, la modalidad de presentación asignada y el horario correspondiente.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'faq' && (
            <div className="congress-panel">
              <h3>Preguntas Frecuentes</h3>
              <div className="faq-list">
                {[
                  {
                    q: '¿Cuándo y dónde se realiza el congreso?',
                    a: 'El VIII Congreso Americano de Cunicultura se realizará en la Sociedad Rural de Esquel, Chubut, de manera simultánea con el 49° Congreso Argentino de Producción Animal.'
                  },
                  {
                    q: '¿Cómo me inscribo?',
                    a: 'Enviá un correo a eeabalcarce.aapa@inta.gob.ar indicando que la inscripción es para el VIII Congreso Americano de Cunicultura 2026.'
                  },
                  {
                    q: '¿Hay opciones de alojamiento?',
                    a: 'Sí. Podés consultar opciones de alojamiento en Esquel en el sitio oficial de turismo: turismesquel.com.ar'
                  },
                  {
                    q: '¿Puedo presentar más de un trabajo?',
                    a: 'Sí, cada autor puede presentar hasta 6 trabajos. Consultar las normas específicas en la guía para autores.'
                  },
                  {
                    q: '¿Se entregan certificados?',
                    a: 'Se emitirán certificados de asistencia y de presentación de trabajos en formato digital para todos los participantes.'
                  },
                ].map((item, i) => (
                  <FaqItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          )}

          {activeMenu === 'comoycuando' && (
            <div className="congress-panel">
              <h3>Cómo y cuándo</h3>
              <div className="venue-info">
                <div className="venue-detail"><span className="venue-icon">📅</span><div><strong>Fecha</strong><p>A confirmar — 2026, Esquel, Chubut</p></div></div>
                <div className="venue-detail"><span className="venue-icon">📍</span><div><strong>Lugar</strong><p>Hotel Melipal, Esquel, Chubut, Argentina</p></div></div>
                <div className="venue-detail"><span className="venue-icon">🏛️</span><div><strong>Evento simultáneo</strong><p>49° Congreso Argentino de Producción Animal (CAPA 2026)</p></div></div>
                <div className="venue-detail"><span className="venue-icon">🏨</span><div><strong>Alojamiento</strong><p>Encontrá opciones de alojamiento en Esquel en el sitio oficial de turismo. <a href="https://share.google/QMDPbJXxdNW1FahAn" target="_blank" rel="noopener noreferrer" className="venue-link">Turismo Esquel →</a></p></div></div>
              </div>
              <div className="venue-map">
                <iframe
                  title="Ubicación Hotel Melipal"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.0!2d-71.3167!3d-42.9083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961bb9b7b4f7a3e3%3A0x1234567890abcdef!2sHotel%20Melipal%2C%20Esquel!5e0!3m2!1ses!2sar!4v1234567890"
                  width="100%"
                  height="320"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://share.google/p4KAP4kHelyhMmGKk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="organizers">
        <div className="container">
          <div className="org-row">
            <div className="org-group">
              <div className="org-label">Organizan</div>
              <div className="org-logos">
                {['Facultad Ciencias Veterinarias', 'INTA', 'IGEVET', 'UBA', 'UNLP'].map(o => (
                  <div key={o} className="org-chip org-chip--organizer">{o}</div>
                ))}
              </div>
            </div>
            <div className="org-group">
              <div className="org-label">Acompañan</div>
              <div className="org-logos">
                {['WRSA', 'SIC', 'ALPA'].map(o => (
                  <div key={o} className="org-chip org-chip--accompany">{o}</div>
                ))}
              </div>
            </div>
            <div className="org-group">
              <div className="org-label">Auspician</div>
              <div className="org-logos">
                {['AAPA', 'CONICET'].map(o => (
                  <div key={o} className="org-chip org-chip--sponsor">{o}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .congress {
          background: var(--gray-100);
        }
        .congress-header {
          background: linear-gradient(135deg, #0c2d5a, #1589b3);
          padding: 72px 24px 48px;
          text-align: center;
        }
        .congress-badge {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.9);
          font-size: 13px;
          font-weight: 500;
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .congress-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: white;
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .congress-subtitle {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.75);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .congress-body {
          padding: 48px 24px;
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 32px;
          align-items: start;
        }
        .congress-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 24px;
        }
        .congress-nav-btn {
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--gray-500);
          text-align: left;
          background: transparent;
          transition: all 0.2s;
          cursor: pointer;
          border: none;
        }
        .congress-nav-btn:hover { background: white; color: var(--gray-700); }
        .congress-nav-btn.active {
          background: var(--green-main);
          color: white;
          box-shadow: 0 2px 8px rgba(45,122,71,0.3);
        }
        .event-info-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          border-left: 4px solid var(--blue-main);
        }
        .event-info-card h4 { font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--blue-main); margin-bottom: 12px; }
        .event-info-divider { width: 24px; height: 2px; background: var(--gray-300); margin-bottom: 12px; }
        .event-info-card p { font-size: 13px; color: var(--gray-500); line-height: 1.7; margin-bottom: 12px; }
        .event-link { font-size: 13px; color: var(--blue-main); font-weight: 500; text-decoration: none; }
        .event-link:hover { text-decoration: underline; }
        .congress-content {
          background: white;
          border-radius: 16px;
          padding: 36px;
          box-shadow: var(--shadow-sm);
        }
        .congress-panel h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 28px;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--gray-100);
        }
        .circulars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 36px;
        }
        .circular-card {
          background: var(--gray-100);
          border-radius: 12px;
          padding: 24px;
          border: 2px solid transparent;
          transition: all 0.2s;
        }
        .circular-card:hover { border-color: var(--green-light); background: var(--green-pale); }
        .circular-number {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--green-main);
          margin-bottom: 8px;
        }
        .circular-card h4 { font-size: 16px; font-weight: 700; color: var(--gray-900); margin-bottom: 8px; }
        .circular-card p { font-size: 14px; color: var(--gray-500); line-height: 1.6; margin-bottom: 16px; }
        .circular-btn {
          background: var(--green-main);
          color: white;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 6px;
          transition: background 0.2s;
        }
        .circular-btn:hover { background: var(--green-dark); }
        .areas-section h4,
        .submission-section h4 {
          font-size: 16px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 16px;
        }
        .areas-section { margin-bottom: 36px; }
        .areas-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .area-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--green-pale);
          color: var(--green-dark);
          font-size: 13px;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(45,122,71,0.2);
        }
        .area-dot { width: 6px; height: 6px; background: var(--green-main); border-radius: 50%; flex-shrink: 0; }
        .submission-items { display: flex; flex-direction: column; gap: 12px; }
        .submission-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: var(--gray-100);
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
        }
        .submission-item:hover { background: var(--blue-pale); }
        .sub-icon { font-size: 24px; flex-shrink: 0; }
        .sub-title { font-size: 14px; font-weight: 600; color: var(--gray-900); margin-bottom: 2px; }
        .sub-desc { font-size: 12px; color: var(--gray-500); }
        .guide-content { display: flex; flex-direction: column; gap: 24px; }
        .guide-step { display: flex; gap: 20px; }
        .step-num {
          font-size: 28px;
          font-weight: 800;
          color: var(--gray-300);
          line-height: 1;
          flex-shrink: 0;
          width: 40px;
        }
        .guide-step h4 { font-size: 16px; font-weight: 700; color: var(--gray-900); margin-bottom: 6px; }
        .guide-step p { font-size: 14px; color: var(--gray-500); line-height: 1.7; }
        .faq-list { display: flex; flex-direction: column; gap: 12px; }
        .organizers {
          background: white;
          padding: 48px 24px;
          border-top: 1px solid var(--gray-100);
        }
        .org-row {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          align-items: flex-start;
        }
        .org-group { flex: 1; min-width: 200px; }
        .org-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--gray-500);
          margin-bottom: 12px;
        }
        .org-logos { display: flex; flex-wrap: wrap; gap: 8px; }
        .org-chip {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
        }
        .org-chip--organizer { background: var(--green-pale); color: var(--green-dark); }
        .org-chip--accompany { background: var(--blue-pale); color: var(--blue-dark); }
        .org-chip--sponsor { background: #fff8e8; color: #92500f; border: 1px solid #f0d090; }
        @media (max-width: 900px) {
          .congress-body { grid-template-columns: 1fr; }
          .congress-sidebar { display: flex; flex-direction: column; gap: 16px; }
          .congress-nav { flex-direction: row; flex-wrap: wrap; }
          .congress-nav-btn { padding: 8px 14px; font-size: 13px; }
        }
        @media (max-width: 600px) {
          .circulars-grid { grid-template-columns: 1fr; }
          .congress-content { padding: 24px 20px; }
        }
        .venue-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
        }
        .venue-detail {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: var(--gray-100);
          border-radius: 10px;
          padding: 14px 18px;
        }
        .venue-icon { font-size: 22px; flex-shrink: 0; }
        .venue-link { color: var(--green-main); font-weight: 500; text-decoration: none; }
        .venue-link:hover { text-decoration: underline; }
        .venue-detail strong { display: block; font-size: 14px; color: var(--gray-900); margin-bottom: 2px; }
        .venue-detail p { font-size: 14px; color: var(--gray-500); margin: 0; }
        .venue-map { display: flex; flex-direction: column; gap: 12px; }
        .map-link {
          display: inline-block;
          font-size: 14px;
          font-weight: 500;
          color: var(--green-main);
          text-decoration: none;
        }
        .map-link:hover { text-decoration: underline; }
      `}</style>
    </section>
  )
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        {question}
        <span className="faq-chevron">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq-a">{answer}</div>}
      <style>{`
        .faq-item { background: var(--gray-100); border-radius: 10px; overflow: hidden; }
        .faq-item.open { background: var(--green-pale); }
        .faq-q {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          font-size: 15px;
          font-weight: 600;
          color: var(--gray-900);
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 16px;
        }
        .faq-chevron { font-size: 20px; color: var(--green-main); flex-shrink: 0; font-weight: 400; }
        .faq-a { padding: 0 20px 16px; font-size: 14px; color: var(--gray-700); line-height: 1.7; }
      `}</style>
    </div>
  )
}
