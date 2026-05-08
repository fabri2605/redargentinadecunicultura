import { useState, useEffect } from 'react'

export default function DevBanner() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => startFade(), 6000)
    return () => clearTimeout(timer)
  }, [])

  const startFade = () => {
    setFading(true)
    setTimeout(() => setVisible(false), 500)
  }

  if (!visible) return null

  return (
    <div className={`dev-banner${fading ? ' fade-out' : ''}`}>
      <span className="dev-banner-icon">🚧</span>
      <span className="dev-banner-text">
        Este sitio se encuentra en proceso de desarrollo. Algunos contenidos pueden estar incompletos.
      </span>
      <button className="dev-banner-close" onClick={startFade} aria-label="Cerrar">✕</button>

      <style>{`
        .dev-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2000;
          background: #1e3a5f;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px 48px 10px 24px;
          font-size: 13.5px;
          font-weight: 500;
          box-shadow: 0 2px 12px rgba(0,0,0,0.2);
          opacity: 1;
          transition: opacity 0.5s ease;
        }
        .dev-banner.fade-out { opacity: 0; }
        .dev-banner-icon { font-size: 16px; flex-shrink: 0; }
        .dev-banner-text { line-height: 1.4; text-align: center; }
        .dev-banner-close {
          position: absolute;
          right: 14px;
          background: none;
          border: none;
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: color 0.2s;
        }
        .dev-banner-close:hover { color: white; }
      `}</style>
    </div>
  )
}
