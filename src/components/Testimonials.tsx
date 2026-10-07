import './Testimonials.css'

const testimonials = [
  {
    quote: 'Redujimos el tiempo de planificación de sprints un 60%. Ahora el equipo dedica ese tiempo a construir, no a reuniones.',
    name: 'Andrea Martínez',
    role: 'Head of Product',
    company: 'Startup Unicornio',
    initials: 'AM',
    color: '#4F46E5',
  },
  {
    quote: 'Por fin una herramienta que el equipo de desarrollo y el de negocio usan al mismo tiempo. La visibilidad es increíble.',
    name: 'Carlos Vega',
    role: 'CTO',
    company: 'SaaS B2B',
    initials: 'CV',
    color: '#7C3AED',
  },
  {
    quote: 'Migramos desde Jira en una tarde. Los analytics de FlowSync son mucho más útiles y el onboarding es inmediato.',
    name: 'Sofía Ruiz',
    role: 'Engineering Manager',
    company: 'Fintech',
    initials: 'SR',
    color: '#059669',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="clientes">
      <div className="container">
        <div className="testimonials-header reveal">
          <span className="section-label">✦ Testimonios</span>
          <h2 className="section-title">Lo que dicen los equipos</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
              <div className="testimonial-stars" role="img" aria-label="5 de 5 estrellas">{'★'.repeat(5)}</div>
              <p className="testimonial-quote">{t.quote}</p>
              <hr className="testimonial-divider" aria-hidden="true" />
              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{ background: `linear-gradient(135deg, ${t.color}20, ${t.color}45)`, color: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role} · <span className="testimonial-company">{t.company}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
