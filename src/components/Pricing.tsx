import { useState } from 'react'
import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    monthly: 0,
    annual: 0,
    desc: 'Para equipos pequeños que están empezando.',
    color: '#6B7280',
    features: ['Hasta 5 miembros', '3 proyectos activos', 'Tableros Kanban', '1 GB de almacenamiento', 'Soporte por email'],
    cta: 'Empieza gratis',
    highlight: false,
  },
  {
    name: 'Pro',
    monthly: 18,
    annual: 14,
    desc: 'El favorito de los equipos de producto.',
    color: '#4F46E5',
    features: ['Miembros ilimitados', 'Proyectos ilimitados', 'Sprints + velocity tracking', 'Analytics avanzados', 'Automatizaciones (50/mes)', 'Integraciones: Slack, GitHub', 'Soporte prioritario 24/7'],
    cta: 'Empezar prueba gratis',
    highlight: true,
  },
  {
    name: 'Enterprise',
    monthly: 49,
    annual: 39,
    desc: 'Control total para organizaciones grandes.',
    color: '#7C3AED',
    features: ['Todo en Pro', 'SSO / SAML', 'Permisos granulares', 'Auditoría completa', 'SLA 99.99%', 'Manager de cuenta dedicado', 'Onboarding personalizado'],
    cta: 'Hablar con ventas',
    highlight: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="section" id="precios">
      <div className="container">
        <div className="pricing-header reveal">
          <span className="section-label">✦ Precios</span>
          <h2 className="section-title">Simple y transparente</h2>
          <p className="section-sub">Sin sorpresas. Cambia de plan cuando quieras.</p>

          <div className="pricing-toggle">
            <span className={!annual ? 'active' : ''}>Mensual</span>
            <button
              className={`toggle-btn${annual ? ' on' : ''}`}
              onClick={() => setAnnual(a => !a)}
              aria-label="toggle annual billing"
            >
              <span className="toggle-knob" />
            </button>
            <span className={annual ? 'active' : ''}>
              Anual
              <em className="pricing-save">Ahorra 22%</em>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div key={p.name} className={`pricing-card reveal reveal-delay-${i + 1}${p.highlight ? ' highlight' : ''}`}>
              {p.highlight && <div className="pricing-badge">Más popular</div>}
              <div className="pricing-top">
                <div className="pricing-name" style={{ color: p.color }}>{p.name}</div>
                <p className="pricing-desc">{p.desc}</p>
                <div className="pricing-price">
                  {p.monthly === 0 ? (
                    <span className="price-amount">Gratis</span>
                  ) : (
                    <>
                      <span className="price-currency">$</span>
                      <span className="price-amount">{annual ? p.annual : p.monthly}</span>
                      <span className="price-period">/mes por usuario</span>
                    </>
                  )}
                </div>
              </div>
              <button className={`pricing-cta${p.highlight ? ' primary' : ''}`} style={p.highlight ? {} : { borderColor: p.color, color: p.color }}>
                {p.cta}
              </button>
              <ul className="pricing-features">
                {p.features.map(f => (
                  <li key={f}>
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
