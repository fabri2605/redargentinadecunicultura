import { useEffect, useState } from 'react'

/* Estadísticas — comentadas hasta tener datos confirmados
const stats = [
  { value: 1424, label: 'Miembros activos', suffix: '+' },
  { value: 297038, label: 'Conejos producidos', suffix: '' },
  { value: 400050, label: 'Kg de carne anual', suffix: '' },
  { value: 118063, label: 'Recursos educativos', suffix: '' },
]
*/

const CONGRESS_DATE = new Date('2026-11-11T00:00:00')

function useCountdown(target) {
  const calc = () => {
    const diff = target - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function CountdownBlock({ value, label }) {
  return (
    <div className="stat-card">
      <div className="stat-number">
        <span>{String(value).padStart(2, '0')}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(CONGRESS_DATE)

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-badge">Desde mayo 2023</div>
        <h1 className="hero-title">
          Red Argentina de<br />
          <span className="hero-highlight">Cunicultura</span>
        </h1>
        <p className="hero-subtitle">
          Fortaleciendo la producción cunícola argentina mediante la cooperación
          interinstitucional y el trabajo en equipo.
        </p>
        <div className="hero-actions">
          <a
            href="#quienes-somos"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#quienes-somos')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Conocé la RAC
          </a>
          <a
            href="#congreso"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#congreso')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            VIII Congreso Americano de Cunicultura - 2026
          </a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="countdown-label">VIII Congreso · 11, 12 y 13 de noviembre 2026</div>
        <div className="countdown-grid">
          <CountdownBlock value={days}    label="Días" />
          <CountdownBlock value={hours}   label="Horas" />
          <CountdownBlock value={minutes} label="Minutos" />
          <CountdownBlock value={seconds} label="Segundos" />
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-dot" />
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 70px 24px 0;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0c2d5a 0%, #1e5799 45%, #1589b3 75%, #38b2d4 100%);
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .hero-content {
          position: relative;
          text-align: center;
          max-width: 700px;
          padding-top: 60px;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.9);
          font-size: 13px;
          font-weight: 500;
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 24px;
          border: 1px solid rgba(255,255,255,0.2);
          letter-spacing: 0.5px;
        }
        .hero-title {
          font-size: clamp(2.4rem, 6vw, 4rem);
          font-weight: 800;
          color: white;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }
        .hero-highlight {
          color: #7dd9a2;
        }
        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: rgba(255,255,255,0.8);
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 70px;
        }
        .btn-primary {
          background: white;
          color: var(--green-dark);
          font-size: 15px;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 50px;
          transition: all 0.2s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
          text-decoration: none;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.25); }
        .btn-outline {
          background: transparent;
          color: white;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 32px;
          border-radius: 50px;
          border: 2px solid rgba(255,255,255,0.6);
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.15);
          border-color: white;
          transform: translateY(-2px);
        }
        .hero-stats {
          position: relative;
          width: 100%;
          max-width: 700px;
          margin-bottom: 60px;
          text-align: center;
        }
        .countdown-label {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .countdown-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .stat-card {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px;
          padding: 24px 12px;
          text-align: center;
        }
        .stat-number {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: white;
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 11px;
          color: rgba(255,255,255,0.6);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .hero-scroll-indicator {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
        }
        .scroll-dot {
          width: 6px;
          height: 36px;
          background: rgba(255,255,255,0.3);
          border-radius: 3px;
          position: relative;
          overflow: hidden;
        }
        .scroll-dot::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          right: 0;
          height: 50%;
          background: white;
          border-radius: 3px;
          animation: scrollAnim 1.8s infinite;
        }
        @keyframes scrollAnim {
          0% { top: -50%; }
          100% { top: 150%; }
        }
        @media (max-width: 768px) {
          .countdown-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-content { padding-top: 20px; }
        }
      `}</style>
    </section>
  )
}
