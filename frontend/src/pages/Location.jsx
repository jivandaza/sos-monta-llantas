function Location({ address, mapsUrl, whatsappUrl }) {
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

  return (
    <div className="page-content">
      <section className="section-block section-header">
        <span className="eyebrow">Ubicacion</span>
        <h1>Encuentranos o pide atencion inmediata</h1>
        <p className="section-text">
          Estamos listos para atenderte en Medellin. Puedes visitarnos o escribirnos por WhatsApp
          para coordinar servicio en tu zona.
        </p>
      </section>

      <section className="location-grid">
        <article className="info-card tall-card">
          <p className="card-kicker">Direccion</p>
          <h2>{address}</h2>
          <p>
            Punto de referencia para ubicar el negocio y solicitar asistencia con rapidez cuando lo
            necesites.
          </p>

          <div className="location-actions">
            <a className="button button-primary" href={mapsUrl} target="_blank" rel="noreferrer">
              Abrir en Google Maps
            </a>
            <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
          </div>
        </article>

        <div className="map-frame-wrap">
          <iframe
            className="map-frame"
            title="Mapa de SOS Monta LLantas 24/7"
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Location
