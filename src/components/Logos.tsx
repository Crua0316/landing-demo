import './Logos.css'

const logos = ['Stripe','Notion','Linear','Vercel','Figma','GitHub','Shopify','Intercom','Loom','Atlassian']

export default function Logos() {
  const doubled = [...logos, ...logos]
  return (
    <section className="logos-section">
      <p className="logos-label container">Usado por equipos en más de 50 países</p>
      <div className="logos-overflow">
        <div className="logos-track">
          {doubled.map((name, i) => (
            <div key={i} className="logo-chip">{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
