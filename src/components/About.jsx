import { useState } from 'react'
import peopleImg from '../assets/people.jpeg'
import rabbitsImg from '../assets/Rabbits.jpeg'
import misionImg from '../assets/MISION.jpeg'

const tabs = [
  {
    id: 'historia',
    label: 'Historia',
    icon: '📜',
    content: `La Red Argentina de Cunicultura (RAC) es una Red integrada por Instituciones Académicas y de Ciencia y Técnica de Argentina conformada en mayo de 2023 para fortalecer la educación, la vinculación, la investigación y el desarrollo en el área de la cunicultura.

La RAC promueve el intercambio de saberes entre profesionales, productores y estudiantes con el objeto de impactar positivamente en la producción y consumo locales y en el desarrollo regional.

Somos una red federal que nuclea a la academia, la ciencia y la extensión para potenciar la cunicultura en Argentina. Promovemos el intercambio de saberes, genética y tecnología entre universidades, escuelas agrotécnicas y productores, transformando décadas de investigación en soluciones prácticas para el desarrollo regional y la soberanía alimentaria.`
  },
  {
    id: 'mision',
    label: 'Misión',
    icon: '🎯',
    content: `Fortalecer la producción cunícola argentina mediante la cooperación interinstitucional y el trabajo en equipo.

Nuestra razón de ser es aunar esfuerzos entre docentes, investigadores y productores para mejorar la formación académica, optimizar las prácticas productivas y fomentar el arraigo rural a través de la cría de conejos.

Promover la cooperación interinstitucional en cunicultura mediante la investigación, la transferencia tecnológica y la formación de profesionales. Trabajamos bajo un esquema de colaboración federal para transformar el conocimiento científico en soluciones prácticas para el sector y la sociedad.

Articular las capacidades de docentes, investigadores y extensionistas del sistema universitario y científico argentino para potenciar la producción cunícola. A través de proyectos conjuntos, buscamos optimizar prácticas sostenibles y generar conocimiento que impacte positivamente en la formación académica y en la comunidad.`
  },
  {
    id: 'vision',
    label: 'Visión',
    icon: '🌟',
    content: `Consolidar un ecosistema de innovación cunícola en Argentina, donde la sinergia entre universidades, INTA y CONICET garantice la excelencia académica y el crecimiento productivo con un fuerte compromiso social y cultural.

Consolidar una comunidad cunícola integrada y pujante en todo el territorio nacional, donde la sinergia entre el sector científico y el productivo posicione a la carne de conejo como una alternativa estratégica, sostenible y de excelencia en la mesa de los argentinos.

Ser la plataforma referente de la cunicultura argentina que, partiendo de sus raíces universitarias y científicas, logre conectar a cada actor del sector —desde las aulas hasta el campo— para garantizar un crecimiento equitativo, tecnificado y con impacto social en cada rincón del país.`
  },
]

export default function About() {
  const [active, setActive] = useState('historia')
  const tab = tabs.find(t => t.id === active)

  return (
    <section id="quienes-somos" className="about">
      <div className="container">
        <div className="section-label">Quiénes Somos</div>
        <h2 className="section-title">Una red federal para la cunicultura argentina</h2>
        <p className="section-desc">
          Conformada en 2023, la RAC une instituciones académicas y científicas de todo el país
          para fortalecer la producción, investigación y formación en cunicultura.
        </p>

        <div className="about-tabs">
          {tabs.map(t => (
            <button
              key={t.id}
              className={`about-tab${active === t.id ? ' active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              <span>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        <div className="about-content">
          <div className="about-text">
            {tab.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="about-visual">
            {active === 'historia' ? (
              <img src={peopleImg} alt="Miembros de la RAC" className="about-people-img" />
            ) : active === 'vision' ? (
              <img src={rabbitsImg} alt="Conejos" className="about-people-img" />
            ) : active === 'mision' ? (
              <img src={misionImg} alt="Misión RAC" className="about-people-img" />
            ) : (
              <div className="about-card-accent">
                <div className="accent-icon">{tab.icon}</div>
                <h3>{tab.label}</h3>
                <div className="accent-divider" />
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .about {
          padding: 96px 24px;
          background: var(--white);
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-label {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--green-main);
          margin-bottom: 12px;
        }
        .section-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: var(--gray-900);
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .section-desc {
          font-size: 1.1rem;
          color: var(--gray-500);
          max-width: 600px;
          margin-bottom: 48px;
          line-height: 1.7;
        }
        .about-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .about-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 500;
          color: var(--gray-500);
          background: var(--gray-100);
          transition: all 0.2s;
          cursor: pointer;
          border: 2px solid transparent;
        }
        .about-tab:hover { background: var(--green-pale); color: var(--green-dark); }
        .about-tab.active {
          background: var(--green-main);
          color: white;
          box-shadow: 0 4px 12px rgba(45,122,71,0.3);
        }
        .about-content {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
          align-items: start;
        }
        .about-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .about-text p {
          font-size: 1.05rem;
          color: var(--gray-700);
          line-height: 1.8;
        }
        .about-card-accent {
          background: linear-gradient(135deg, var(--green-dark), var(--green-main));
          border-radius: 20px;
          padding: 40px 32px;
          color: white;
          text-align: center;
          position: sticky;
          top: 90px;
          box-shadow: 0 12px 40px rgba(45,122,71,0.3);
        }
        .accent-icon { font-size: 48px; margin-bottom: 16px; }
        .about-card-accent h3 { font-size: 24px; font-weight: 700; margin-bottom: 20px; }
        .accent-divider { width: 40px; height: 3px; background: rgba(255,255,255,0.4); margin: 0 auto 24px; border-radius: 2px; }
        .about-people-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 20px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          position: sticky;
          top: 90px;
        }
        @media (max-width: 900px) {
          .about-content { grid-template-columns: 1fr; }
          .about-card-accent { position: static; }
          .about-people-img { position: static; }
        }
      `}</style>
    </section>
  )
}
