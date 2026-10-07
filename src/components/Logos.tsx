import './Logos.css'

const logos = ['Stripe', 'Notion', 'Linear', 'Vercel', 'Figma', 'GitHub']

export default function Logos() {
  return (
    <section className="logos-section">
      <div className="container">
        <p className="logos-label">Usado por equipos en más de 50 países</p>
        <div className="logos-grid">
          {logos.map(name => (
            <div key={name} className="logo-chip">{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
