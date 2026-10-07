import './Footer.css'

const cols = [
  {
    title: 'Producto',
    links: ['Funcionalidades', 'Precios', 'Changelog', 'Roadmap', 'Integraciones'],
  },
  {
    title: 'Recursos',
    links: ['Documentación', 'Blog', 'Comunidad', 'Tutoriales', 'Estado del sistema'],
  },
  {
    title: 'Empresa',
    links: ['Sobre nosotros', 'Careers', 'Prensa', 'Partners', 'Contacto'],
  },
]

const socials = [
  {
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-border" />

      <div className="container footer-main">
        {/* Brand column */}
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <div className="footer-logo-mark">
              <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                <path d="M5 12L10 17L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            FlowSync
          </a>

          <p className="footer-tagline">
            Gestión de proyectos para equipos que construyen cosas que importan.
          </p>

          <div className="footer-newsletter">
            <p className="footer-newsletter-label">Novedades del producto</p>
            <div className="footer-newsletter-row">
              <input type="email" placeholder="tu@email.com" className="footer-input" />
              <button className="footer-input-btn">Suscribir</button>
            </div>
          </div>

          <div className="footer-socials">
            {socials.map(s => (
              <a key={s.label} href="#" className="footer-social" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {cols.map(col => (
          <div key={col.title} className="footer-col">
            <div className="footer-col-title">{col.title}</div>
            {col.links.map(l => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-copy">© 2026 FlowSync Inc. Todos los derechos reservados.</span>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacidad</a>
            <span className="footer-bottom-dot" />
            <a href="#" className="footer-bottom-link">Términos</a>
            <span className="footer-bottom-dot" />
            <a href="#" className="footer-bottom-link">Cookies</a>
          </div>
          <span className="footer-made">
            Hecho con ♥ por{' '}
            <a href="https://portafolio-crua.vercel.app/" target="_blank" rel="noreferrer" className="footer-made-link">
              Cristian Rua
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
