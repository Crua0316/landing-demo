import { useEffect, useRef } from 'react'
import './CTA.css'

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('visible') },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card reveal" ref={ref}>
          <div className="cta-blob" />
          <span className="section-label" style={{ background: 'rgba(255,255,255,.15)', color: '#fff' }}>
            🚀 Empieza hoy
          </span>
          <h2 className="cta-title">Tu equipo merece mejores herramientas</h2>
          <p className="cta-sub">14 días gratis. Sin tarjeta de crédito. Cancela en cualquier momento.</p>
          <div className="cta-actions">
            <button className="btn-primary cta-btn-white">
              Crear cuenta gratuita
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="cta-btn-ghost">Ver planes →</button>
          </div>
        </div>
      </div>
    </section>
  )
}
