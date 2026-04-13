import { useEffect, useRef } from 'react'

function useCountUp(target, duration = 2000) {
  const ref = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasRun.current) {
        hasRun.current = true
        const start = performance.now()
        const animate = (now) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = Math.floor(eased * target).toLocaleString('es-AR')
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.3 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return ref
}

const stats = [
  { value: 1424, label: 'Miembros activos', suffix: '+' },
  { value: 297038, label: 'Conejos producidos', suffix: '' },
  { value: 400050, label: 'Kg de carne anual', suffix: '' },
  { value: 118063, label: 'Recursos educativos', suffix: '' },
]

function StatCard({ value, label, suffix }) {
  const ref = useCountUp(value)
  return (
    <div className="stat-card">
      <div className="stat-number">
        <span ref={ref}>0</span>
        {suffix && <span className="stat-suffix">{suffix}</span>}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Hero() {
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
            VIII Congreso 2025
          </a>
        </div>
      </div>

      <div className="hero-stats">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
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
          background: linear-gradient(135deg, #0d3b1f 0%, #1a5c2e 40%, #2d7a47 70%, #1e5799 100%);
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
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          width: 100%;
          max-width: 1000px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 60px;
        }
        .stat-card {
          padding: 28px 20px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.12);
          transition: background 0.2s;
        }
        .stat-card:last-child { border-right: none; }
        .stat-card:hover { background: rgba(255,255,255,0.08); }
        .stat-number {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          color: white;
          line-height: 1;
          margin-bottom: 8px;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 2px;
        }
        .stat-suffix {
          font-size: 0.7em;
          color: #7dd9a2;
        }
        .stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.7);
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.5px;
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
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
          .stat-card:nth-child(2) { border-right: none; }
          .stat-card:nth-child(1), .stat-card:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,0.12); }
          .hero-content { padding-top: 20px; }
        }
        @media (max-width: 480px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  )
}
