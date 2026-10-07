import './Hero.css'

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="producto">
      {/* Background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container hero-inner">
        <div className="hero-badge reveal">
          <span className="hero-badge-dot" />
          Nuevo — Integración nativa con Slack y GitHub
        </div>

        <h1 className="hero-title reveal reveal-delay-1">
          Gestión de proyectos<br />
          <span className="hero-gradient">sin fricción</span>
        </h1>

        <p className="hero-sub reveal reveal-delay-2">
          FlowSync une tareas, sprints y métricas en un solo lugar.
          Tu equipo enfocado, tus entregas a tiempo.
        </p>

        <div className="hero-actions reveal reveal-delay-3">
          <button className="btn-primary hero-cta" onClick={() => scrollTo('precios')}>
            Empieza gratis — 14 días
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('clientes')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z" fill="currentColor"/>
            </svg>
            Ver demo
          </button>
        </div>

        <p className="hero-note reveal reveal-delay-3">Sin tarjeta de crédito · Cancela cuando quieras</p>

        {/* Product mockup */}
        <div className="hero-mockup reveal">
          <div className="mockup-bar">
            <span /><span /><span />
            <div className="mockup-url">app.flowsync.io/dashboard</div>
          </div>
          <div className="mockup-body">
            <div className="mockup-sidebar">
              {['Dashboard','Proyectos','Tareas','Equipo','Analytics','Ajustes'].map((item, i) => (
                <div key={item} className={`mockup-nav-item${i === 0 ? ' active' : ''}`}>{item}</div>
              ))}
            </div>
            <div className="mockup-content">
              <div className="mockup-kpis">
                {[
                  { label: 'Tareas activas', value: '248', color: '#4F46E5' },
                  { label: 'Completadas', value: '1,847', color: '#10B981' },
                  { label: 'En revisión', value: '32', color: '#F59E0B' },
                  { label: 'Velocidad', value: '94%', color: '#6366F1' },
                ].map(k => (
                  <div key={k.label} className="mockup-kpi">
                    <div className="mockup-kpi-val" style={{ color: k.color }}>{k.value}</div>
                    <div className="mockup-kpi-lbl">{k.label}</div>
                    <div className="mockup-kpi-bar"><div style={{ background: k.color }} /></div>
                  </div>
                ))}
              </div>
              <div className="mockup-chart">
                {[40,55,45,65,80,72,90,85,95,88,100,110].map((h, i) => (
                  <div key={i} className="mockup-bar-item" style={{ height: `${h * .9}%`, background: i === 11 ? '#4F46E5' : '#C7D2FE' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
