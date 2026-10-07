import './Footer.css'

const cols = [
  { title: 'Producto',  links: ['Funcionalidades', 'Precios', 'Changelog', 'Roadmap'] },
  { title: 'Recursos',  links: ['Documentación', 'Blog', 'Comunidad', 'Tutoriales'] },
  { title: 'Empresa',   links: ['Sobre nosotros', 'Careers', 'Prensa', 'Contacto'] },
  { title: 'Legal',     links: ['Privacidad', 'Términos', 'Cookies', 'Seguridad'] },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="nav-logo-mark" style={{ width: 28, height: 28, background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                <path d="M5 12 L10 17 L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontWeight: 800, fontSize: '1rem' }}>FlowSync</span>
          </div>
          <p className="footer-tagline">Gestión de proyectos para equipos que construyen cosas que importan.</p>
          <div className="footer-socials">
            {['𝕏', 'in', 'gh'].map(s => (
              <a key={s} href="#" className="social-btn">{s}</a>
            ))}
          </div>
        </div>

        {cols.map(col => (
          <div key={col.title} className="footer-col">
            <div className="footer-col-title">{col.title}</div>
            {col.links.map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© 2026 FlowSync Inc. Todos los derechos reservados.</span>
          <span>Hecho con ♥ por <a href="https://portafolio-crua.vercel.app/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontWeight: 600 }}>Cristian Rua</a></span>
        </div>
      </div>
    </footer>
  )
}
