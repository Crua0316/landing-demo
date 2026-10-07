import { useEffect, useRef } from 'react'
import './Features.css'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M17 13v8M13 17h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: '#4F46E5',
    title: 'Tableros Kanban inteligentes',
    desc: 'Organiza tareas con drag & drop. Filtra por asignado, prioridad o sprint. Tu backlog siempre bajo control.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#7C3AED',
    title: 'Sprints con velocity tracking',
    desc: 'Planea iteraciones, estima puntos de historia y mide la velocidad real del equipo semana a semana.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: '#059669',
    title: 'Analytics en tiempo real',
    desc: 'Dashboards con burn-down charts, tiempo de ciclo y throughput. Toma decisiones con datos, no intuición.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: '#D97706',
    title: 'Colaboración sin fricción',
    desc: 'Comentarios en contexto, menciones, revisiones de código y notificaciones que llegan cuando importan.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#0891B2',
    title: 'Permisos granulares',
    desc: 'Controla quién ve qué. Proyectos privados, roles por equipo y auditoría completa de acciones.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#DC2626',
    title: 'Automatizaciones sin código',
    desc: 'Crea flujos automáticos: asignar tareas, enviar alertas o mover tarjetas con triggers condicionales.',
  },
]

export default function Features() {
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
    <section className="section features-section" id="producto" ref={ref}>
      <div className="container">
        <div className="features-header reveal">
          <span className="section-label">✦ Funcionalidades</span>
          <h2 className="section-title">Todo lo que tu equipo necesita</h2>
          <p className="section-sub">Sin hojas de cálculo, sin reuniones extra. Solo flujo.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={f.title} className={`feature-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="feature-icon" style={{ background: `${f.color}14`, color: f.color }}>
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
