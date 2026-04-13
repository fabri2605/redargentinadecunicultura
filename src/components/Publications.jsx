const publications = [
  {
    category: 'Manuales INTA',
    icon: '📚',
    color: '#2d7a47',
    bg: '#e8f5ec',
    items: [
      { title: 'Manual de Cunicultura INTA', desc: 'Guía completa sobre manejo productivo, sanidad y nutrición en cunicultura.' },
      { title: 'Producción de Conejos', desc: 'Aspectos técnicos y económicos para la cría intensiva y extensiva de conejos.' },
      { title: 'Bienestar Animal en Conejos', desc: 'Estándares y buenas prácticas para el bienestar animal en granjas cunícolas.' },
    ]
  },
  {
    category: 'Saber Cunícola',
    icon: '🔬',
    color: '#1e5799',
    bg: '#e8f0f8',
    items: [
      { title: 'Revista Saber Cunícola', desc: 'Publicación periódica con investigaciones y avances técnicos del sector.' },
      { title: 'Boletín Técnico', desc: 'Actualizaciones bimestrales sobre novedades científicas y productivas.' },
      { title: 'Casos de Estudio', desc: 'Experiencias exitosas de productores de todo el país.' },
    ]
  },
  {
    category: 'Publicaciones RAC',
    icon: '📝',
    color: '#7a5c1a',
    bg: '#f8f3e8',
    items: [
      { title: 'Mariana González et al.', desc: 'Investigación sobre genética y mejoramiento en líneas cunícolas argentinas.' },
      { title: 'Jorge Rodríguez et al.', desc: 'Evaluación de sistemas de alimentación en conejo de carne. Resultados 2024.' },
      { title: 'Soledad Pérez et al.', desc: 'Patologías respiratorias en cunicultura: diagnóstico y tratamiento.' },
    ]
  },
]

export default function Publications() {
  return (
    <section id="publicaciones" className="publications">
      <div className="container">
        <div className="section-label">Publicaciones de Interés</div>
        <h2 className="section-title">Conocimiento para el sector</h2>
        <p className="section-desc">
          Accedé a manuales, revistas científicas y publicaciones de los investigadores
          miembros de la RAC.
        </p>

        <div className="pub-grid">
          {publications.map(group => (
            <div key={group.category} className="pub-group">
              <div className="pub-group-header" style={{ background: group.bg }}>
                <span className="pub-group-icon">{group.icon}</span>
                <h3 style={{ color: group.color }}>{group.category}</h3>
              </div>
              <div className="pub-items">
                {group.items.map((item, i) => (
                  <a key={i} href="#" className="pub-item">
                    <div className="pub-item-dot" style={{ background: group.color }} />
                    <div>
                      <div className="pub-item-title">{item.title}</div>
                      <div className="pub-item-desc">{item.desc}</div>
                    </div>
                    <span className="pub-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .publications {
          padding: 96px 24px;
          background: var(--gray-100);
        }
        .pub-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .pub-group {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.2s;
        }
        .pub-group:hover { box-shadow: var(--shadow-md); }
        .pub-group-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px 24px;
        }
        .pub-group-icon { font-size: 24px; }
        .pub-group-header h3 { font-size: 16px; font-weight: 700; }
        .pub-items { padding: 8px 0; }
        .pub-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 20px;
          text-decoration: none;
          transition: background 0.15s;
          border-bottom: 1px solid var(--gray-100);
          cursor: pointer;
        }
        .pub-item:last-child { border-bottom: none; }
        .pub-item:hover { background: var(--gray-100); }
        .pub-item-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .pub-item-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: 3px;
          line-height: 1.4;
        }
        .pub-item-desc {
          font-size: 12px;
          color: var(--gray-500);
          line-height: 1.5;
        }
        .pub-arrow {
          margin-left: auto;
          color: var(--gray-300);
          font-size: 16px;
          flex-shrink: 0;
          transition: color 0.2s, transform 0.2s;
        }
        .pub-item:hover .pub-arrow { color: var(--green-main); transform: translateX(3px); }
        @media (max-width: 900px) {
          .pub-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
