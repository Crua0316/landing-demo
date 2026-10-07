import './Features.css'

export default function Features() {
  return (
    <section className="section features-section" id="producto">
      <div className="container">
        <div className="features-header reveal">
          <span className="section-label">✦ Funcionalidades</span>
          <h2 className="section-title">Todo lo que tu equipo necesita</h2>
          <p className="section-sub">Sin hojas de cálculo, sin reuniones extra. Solo flujo.</p>
        </div>

        <div className="bento-grid">

          {/* 1 — KANBAN wide card with mini board */}
          <div className="bento-card bento-wide reveal reveal-delay-1">
            <div className="bento-content">
              <div className="bento-icon" style={{ background: '#EEF2FF', color: '#4F46E5' }}>
                <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/><rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/><rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M17 13v8M13 17h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </div>
              <h3 className="bento-title">Tableros Kanban inteligentes</h3>
              <p className="bento-desc">Organiza tareas con drag & drop. Filtra por asignado, prioridad o sprint con un clic.</p>
            </div>
            <div className="bento-kanban">
              {[
                { col: 'Por hacer', color: '#E5E7EB', items: ['Rediseño homepage','API OAuth','Tests unitarios'] },
                { col: 'En progreso', color: '#DBEAFE', items: ['Sistema de pagos','Onboarding flow'] },
                { col: 'Completado', color: '#D1FAE5', items: ['Auth module','DB migration','CI pipeline'] },
              ].map(c => (
                <div key={c.col} className="kanban-col">
                  <div className="kanban-col-header" style={{ background: c.color }}>{c.col}</div>
                  {c.items.map(t => (
                    <div key={t} className="kanban-item">{t}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 2 — SPRINTS tall card */}
          <div className="bento-card bento-tall reveal reveal-delay-2">
            <div className="bento-icon" style={{ background: '#F5F3FF', color: '#7C3AED' }}>
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="bento-title">Sprints con velocity tracking</h3>
            <p className="bento-desc">Planea iteraciones y mide la velocidad real del equipo semana a semana.</p>
            <div className="sprint-progress">
              <div className="sprint-label">Sprint 12 · 8 días restantes</div>
              <div className="sprint-bar"><div className="sprint-fill" style={{ width: '68%' }} /></div>
              <div className="sprint-meta">
                <span style={{ color: '#10B981' }}>34 pts completados</span>
                <span style={{ color: '#9CA3AF' }}>16 restantes</span>
              </div>
              {[
                { label: 'Velocidad media', val: '42 pts' },
                { label: 'Entregas en tiempo', val: '94%' },
                { label: 'Bugs por sprint', val: '1.2' },
              ].map(m => (
                <div key={m.label} className="sprint-metric">
                  <span className="sprint-metric-val">{m.val}</span>
                  <span className="sprint-metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3 — ANALYTICS */}
          <div className="bento-card reveal reveal-delay-1">
            <div className="bento-icon" style={{ background: '#ECFDF5', color: '#059669' }}>
              <svg viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </div>
            <h3 className="bento-title">Analytics en tiempo real</h3>
            <p className="bento-desc">Burn-down charts, tiempo de ciclo y throughput. Datos, no intuición.</p>
          </div>

          {/* 4 — COLABORACIÓN */}
          <div className="bento-card reveal reveal-delay-2">
            <div className="bento-icon" style={{ background: '#FFF7ED', color: '#D97706' }}>
              <svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </div>
            <h3 className="bento-title">Colaboración sin fricción</h3>
            <p className="bento-desc">Comentarios en contexto, menciones y notificaciones que llegan cuando importan.</p>
          </div>

          {/* 5 — AUTOMATIZACIONES wide */}
          <div className="bento-card bento-wide reveal reveal-delay-1">
            <div className="bento-content">
              <div className="bento-icon" style={{ background: '#FEF2F2', color: '#DC2626' }}>
                <svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="bento-title">Automatizaciones sin código</h3>
              <p className="bento-desc">Crea flujos automáticos con triggers y acciones condicionales. Sin una línea de código.</p>
            </div>
            <div className="auto-flow">
              {[
                { trigger: 'Tarea completada', arrow: true },
                { trigger: 'Asignar revisor', arrow: true },
                { trigger: 'Notificar en Slack', arrow: false },
              ].map((s, i) => (
                <div key={i} className="auto-flow-row">
                  <div className="auto-node" style={{ borderColor: i === 0 ? '#4F46E5' : i === 1 ? '#7C3AED' : '#10B981', color: i === 0 ? '#4F46E5' : i === 1 ? '#7C3AED' : '#10B981' }}>
                    {['⚡','👤','💬'][i]} {s.trigger}
                  </div>
                  {s.arrow && <div className="auto-arrow">↓</div>}
                </div>
              ))}
            </div>
          </div>

          {/* 6 — PERMISOS */}
          <div className="bento-card reveal reveal-delay-2">
            <div className="bento-icon" style={{ background: '#EFF6FF', color: '#0891B2' }}>
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="bento-title">Permisos granulares</h3>
            <p className="bento-desc">Controla quién ve qué. Proyectos privados, roles por equipo y auditoría completa.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
