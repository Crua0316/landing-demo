import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const stats = [
  { target: 12400, suffix: '+', label: 'Equipos activos' },
  { target: 99.9, suffix: '%', label: 'Uptime garantizado', decimal: true },
  { target: 4.8, suffix: '★', label: 'Rating promedio', decimal: true },
  { target: 50, suffix: '+', label: 'Países' },
]

function StatCounter({ target, suffix, label, decimal = false }: { target: number; suffix: string; label: string; decimal?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let started = false
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        started = true
        const duration = 1800
        const t0 = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setCount(parseFloat((eased * target).toFixed(decimal ? 1 : 0)))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [target, decimal])

  return (
    <div ref={ref} className="hero-stat">
      <div className="hero-stat-value">{decimal ? count.toFixed(1) : count.toLocaleString()}{suffix}</div>
      <div className="hero-stat-label">{label}</div>
    </div>
  )
}

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="producto">
      <div className="hero-mesh" />
      <div className="hero-noise" />

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
          <button className="hero-btn-primary" onClick={() => scrollTo('precios')}>
            Empieza gratis — 14 días
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="hero-btn-ghost" onClick={() => scrollTo('clientes')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z" fill="currentColor"/>
            </svg>
            Ver demo
          </button>
        </div>

        <p className="hero-note reveal reveal-delay-3">Sin tarjeta de crédito · Cancela cuando quieras</p>

        {/* 3D floating mockup */}
        <div className="hero-mockup-wrap reveal">
          <div className="hero-mockup-glow" />
          <div className="hero-mockup">
            <div className="mockup-bar">
              <span /><span /><span />
              <div className="mockup-url">app.flowsync.io/dashboard</div>
              <div className="mockup-bar-actions">
                <div className="mockup-bar-pill" />
                <div className="mockup-bar-pill" style={{ width: 48 }} />
              </div>
            </div>
            <div className="mockup-body">
              <div className="mockup-sidebar">
                <div className="mockup-sidebar-logo">
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg,#4F46E5,#7C3AED)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 700, fontSize: '.75rem', color: '#1F2937' }}>FlowSync</span>
                </div>
                {['Dashboard','Proyectos','Tareas','Equipo','Analytics','Ajustes'].map((item, i) => (
                  <div key={item} className={`mockup-nav-item${i === 0 ? ' active' : ''}`}>{item}</div>
                ))}
              </div>
              <div className="mockup-content">
                <div className="mockup-kpis">
                  {[
                    { label: 'Tareas activas', value: '248', color: '#4F46E5', bar: 68 },
                    { label: 'Completadas',    value: '1,847', color: '#10B981', bar: 85 },
                    { label: 'En revisión',    value: '32',   color: '#F59E0B', bar: 40 },
                    { label: 'Velocidad',      value: '94%',  color: '#6366F1', bar: 94 },
                  ].map(k => (
                    <div key={k.label} className="mockup-kpi">
                      <div className="mockup-kpi-val" style={{ color: k.color }}>{k.value}</div>
                      <div className="mockup-kpi-lbl">{k.label}</div>
                      <div className="mockup-kpi-bar"><div style={{ background: k.color, width: `${k.bar}%` }} /></div>
                    </div>
                  ))}
                </div>
                <div className="mockup-bottom-row">
                  <div className="mockup-chart">
                    {[40,55,45,65,80,72,90,85,95,88,100,110].map((h, i) => (
                      <div key={i} className="mockup-bar-col" style={{ height: `${h * .85}%`, background: i === 11 ? '#4F46E5' : '#E0E7FF' }} />
                    ))}
                  </div>
                  <div className="mockup-tasks">
                    {['Diseño sistema v2', 'API integración', 'Tests E2E', 'Deploy staging'].map((t, i) => (
                      <div key={t} className="mockup-task">
                        <div className="mockup-task-dot" style={{ background: ['#10B981','#10B981','#F59E0B','#6B7280'][i] }} />
                        <span>{t}</span>
                        <div className="mockup-task-av" style={{ background: ['#4F46E5','#7C3AED','#EC4899','#6366F1'][i] }}>
                          {['AB','CR','MR','LV'][i]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="hero-stats reveal">
          {stats.map(s => <StatCounter key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}
