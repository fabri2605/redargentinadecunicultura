export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-inner">
        <div className="video-text">
          <div className="section-label" style={{color:'white',opacity:.7}}>Contenido audiovisual</div>
          <h2>La RAC en acción</h2>
          <p>
            Conocé el trabajo de nuestra red a través de este video. Desde la investigación en
            universidades hasta las granjas productoras, la RAC conecta a todos los actores
            de la cunicultura argentina.
          </p>
        </div>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/deEWuPpJ8XA"
            title="Red Argentina de Cunicultura"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <style>{`
        .video-section {
          background: linear-gradient(135deg, var(--blue-dark), var(--blue-main));
          padding: 80px 24px;
        }
        .video-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 60px;
          align-items: center;
        }
        .video-text h2 {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .video-text p {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
        }
        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0,0,0,0.4);
        }
        .video-wrapper iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
        }
        @media (max-width: 768px) {
          .video-inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
