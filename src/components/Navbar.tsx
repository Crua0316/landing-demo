import { useEffect, useState } from 'react'
import './Navbar.css'

const links = ['Producto', 'Precios', 'Clientes', 'Blog']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#" className="nav-logo">
          <div className="nav-logo-mark">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12 L10 17 L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>FlowSync</span>
        </a>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="nav-link">{l}</button>
          ))}
          <div className="nav-divider" />
          <button className="nav-link">Iniciar sesión</button>
          <button className="btn-primary" style={{ padding: '.5rem 1.2rem', fontSize: '.875rem' }}
            onClick={() => scrollTo('precios')}>
            Empieza gratis
          </button>
        </div>

        <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="menu">
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </div>
    </nav>
  )
}
