import { Link } from 'react-router-dom'
import { gallery } from '../data/gallery'
import { testimonials } from '../data/testimonials'

function Home({ businessName, logoSrc, whatsappUrl }) {
  const highlights = [
    {
      label: 'Siempre listos',
      title: 'Atencion 24/7',
      description: 'Asistencia continua para pinchazos, cambios de llanta y apoyo urgente.',
    },
    {
      label: 'Servicio movil',
      title: 'Llegamos a tu zona',
      description: 'Atendemos en Medellin con respuesta rapida para que sigas tu camino.',
    },
    {
      label: 'Canal directo',
      title: 'WhatsApp activo',
      description: 'Coordinacion simple, rapida y clara desde el primer mensaje.',
    },
  ]

  const serviceChecks = [
    'Parche y reparacion',
    'Cambio y montaje',
    'Revision y presion',
  ]

  return (
    <div className="page-content">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Asistencia vial y taller mecanico</span>
          <h1>{businessName}</h1>
          <p className="hero-text">
            Atencion rapida y confiable para pinchazos, cambios, inflado y venta de llantas en
            Medellin. Llegamos a tu zona cuando mas lo necesitas.
          </p>

          <div className="hero-actions">
            <Link to="/servicios" className="button button-primary">
              Ver Servicios
            </Link>
            <a
              className="button button-secondary button-pulse"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Pide tu Servicio
            </a>
          </div>

          <div className="hero-service-grid">
            {highlights.map((item) => (
              <article key={item.title} className="service-highlight-card">
                <span className="signal-label">{item.label}</span>
                <strong className="signal-title">{item.title}</strong>
                <span className="signal-copy">{item.description}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="garage-glow"></div>

          <div className="hero-logo-card">
            <img src={logoSrc} alt="" className="hero-logo" />
            <div>
              <p className="visual-title">Bahia de servicio lista para atender</p>
              <p className="visual-copy">Monta llantas, revision y apoyo inmediato en tu zona.</p>
            </div>
          </div>

          <div className="garage-stage">
            <div className="hazard-strip"></div>

            <div className="service-beacon">
              <span className="service-dot"></span>
              Disponible 24/7
            </div>

            <div className="tool-rack">
              <span className="tool tool-short"></span>
              <span className="tool tool-long"></span>
              <span className="tool tool-short"></span>
            </div>

            <div className="tire-illustration">
              <div className="tire-shadow"></div>
              <div className="tire-ring">
                <div className="tire-core">
                  <span className="spoke spoke-one"></span>
                  <span className="spoke spoke-two"></span>
                  <span className="spoke spoke-three"></span>
                  <span className="spoke spoke-four"></span>
                  <span className="tire-hub"></span>
                </div>
              </div>
            </div>

            <div className="service-console">
              <span className="console-label">Bahia principal</span>
              <strong>Cambio, ajuste y revision de llantas</strong>

              <div className="console-list">
                {serviceChecks.map((item) => (
                  <span key={item} className="console-item">
                    <span className="console-check"></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="brand-stamp">
              <img src={logoSrc} alt="" className="brand-stamp-logo" />
              <span>Respuesta rapida en carretera y taller</span>
            </div>

            <div className="hero-lane"></div>
          </div>

          <div className="floating-chip chip-left">Montaje y balanceo</div>
          <div className="floating-chip chip-right">WhatsApp activo</div>
        </div>
      </section>

      <section className="section-block section-grid-three">
        <article className="info-card">
          <p className="card-kicker">Emergencias</p>
          <h2>Soluciones rapidas para tu llanta</h2>
          <p>
            Respondemos con agilidad para que vuelvas a rodar sin perder tiempo ni complicarte.
          </p>
        </article>

        <article className="info-card">
          <p className="card-kicker">Cobertura</p>
          <h2>Servicio movil en Medellin</h2>
          <p>
            Llevamos asistencia a tu ubicacion y tambien atendemos en punto fisico cuando lo
            necesites.
          </p>
        </article>

        <article className="info-card accent-card">
          <p className="card-kicker">Contacto directo</p>
          <h2>Habla con nosotros por WhatsApp</h2>
          <p>Un canal rapido para pedir ayuda, consultar disponibilidad y coordinar el servicio.</p>
        </article>
      </section>

      <section className="section-block testimonials-section">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">Testimonios</span>
            <h2>Comentarios de referencia de clientes</h2>
            <p className="section-subcopy">
              Estos textos son ejemplos temporales mientras agregamos reseñas reales del negocio.
            </p>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card">
              <div className="testimonial-head">
                <div className="client-badge">{testimonial.name.slice(0, 1)}</div>
                <div className="client-meta">
                  <strong>{testimonial.name}</strong>
                  <span>
                    {testimonial.role} · {testimonial.location}
                  </span>
                </div>
              </div>

              <div className="rating-row" aria-hidden="true">
                <span>★★★★★</span>
              </div>

              <p>{testimonial.message}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block gallery-section">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">Galeria</span>
            <h2>Imagenes de referencia del ambiente y los servicios</h2>
            <p className="section-subcopy">
              Galeria temporal con imagenes web de apoyo mientras definimos la coleccion final del
              negocio.
            </p>
          </div>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure key={item.id} className="gallery-card">
              <img src={item.image} alt={item.alt} className="gallery-image" loading="lazy" />
              <figcaption className="gallery-copy">
                <strong>{item.title}</strong>
                <span>{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
