import { services } from '../data/services'

function Services({ selectedService, onSelectService, getWhatsAppUrl }) {
  return (
    <div className="page-content">
      <section className="section-block section-header">
        <span className="eyebrow">Servicios</span>
        <h1>Todo lo que necesitas para tus llantas en un solo lugar</h1>
        <p className="section-text">
          Atendemos servicios de taller mecanico enfocados en llantas, montaje, revision y soporte
          inmediato para carros, motos y vehiculos que necesitan respuesta rapida.
        </p>
      </section>

      {selectedService ? (
        <section className="selected-banner">
          <span>Servicio seleccionado:</span>
          <strong>{selectedService}</strong>
        </section>
      ) : null}

      <section className="services-grid">
        {services.map((service) => {
          const isSelected = selectedService === service.name

          return (
            <article key={service.id} className={`service-card ${isSelected ? 'is-selected' : ''}`}>
              <div className="service-image-wrap">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="service-image"
                  loading="lazy"
                />
                <span className="service-badge">{service.tag}</span>
              </div>

              <div className="service-body">
                <div className="service-topline">
                  <h2>{service.name}</h2>
                </div>

                <p>{service.description}</p>

                <a
                  className="button button-primary"
                  href={getWhatsAppUrl(service.name)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => onSelectService(service.name)}
                >
                  Pedir Servicio
                </a>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Services
