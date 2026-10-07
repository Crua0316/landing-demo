import { useEffect, useRef } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    quote: 'Redujimos el tiempo de planificación de sprints un 60%. Ahora el equipo dedica ese tiempo a construir, no a reuniones.',
    name: 'Andrea Martínez',
    role: 'Head of Product · Startup Unicornio',
    initials: 'AM',
    color: '#4F46E5',
  },
  {
    quote: 'Por fin una herramienta que el equipo de desarrollo y el de negocio usan al mismo tiempo. La visibilidad es increíble.',
    name: 'Carlos Vega',
    role: 'CTO · SaaS B2B',
    initials: 'CV',
    color: '#7C3AED',
  },
  {
    quote: 'Migramos desde Jira en una tarde. Los analytics de FlowSync son mucho más útiles y el onboarding es inmediato.',
    name: 'Sofía Ruiz',
    role: 'Engineering Manager · Fintech',
    initials: 'SR',
    color: '#059669',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>('.reveal')
    if (!els) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="section testimonials-section" id="clientes" ref={ref}>
      <div className="container">
        <div className="testimonials-header reveal">
          <span className="section-label">💬 Testimonios</span>
          <h2 className="section-title">Lo que dicen los equipos</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
              <div className="testimonial-stars">{'★'.repeat(5)}</div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: `${t.color}20`, color: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
