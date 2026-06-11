function About() {
  return (
    <div className="page-content">
      <section className="section-block section-header">
        <span className="eyebrow">Sobre mi</span>
        <h1>Un emprendimiento local con atencion cercana</h1>
        <p className="section-text">
          SOS Monta LLantas 24/7 nace como un emprendimiento local de taller mecanico enfocado en
          resolver rapido las necesidades de conductores que requieren apoyo confiable, directo y
          sin complicaciones.
        </p>
      </section>

      <section className="section-grid-two">
        <article className="info-card tall-card">
          <p className="card-kicker">Mision</p>
          <h2>Brindar soluciones agiles para que sigas tu camino</h2>
          <p>
            Queremos ofrecer servicio oportuno, trato amable y trabajo responsable en cada cambio,
            reparacion o revision de llantas, tanto en taller como en atencion movil.
          </p>
        </article>

        <article className="info-card tall-card dark-card">
          <p className="card-kicker">Compromiso</p>
          <h2>Servicio honesto, puntual y facil de solicitar</h2>
          <p>
            Nuestra meta es ayudarte con rapidez y claridad, para que encuentres una respuesta
            practica cuando tu vehiculo lo necesite.
          </p>
        </article>
      </section>

      <section className="section-block">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">Beneficios</span>
            <h2>Lo que hace mas comodo nuestro servicio</h2>
          </div>
        </div>

        <div className="benefits-grid">
          <article className="benefit-card">
            <strong>Entrega rapida</strong>
            <p>Respuesta agil para atender pinchazos, cambios y revisiones en el menor tiempo posible.</p>
          </article>
          <article className="benefit-card">
            <strong>Pago facil</strong>
            <p>Coordinacion simple y opciones practicas para que el proceso sea comodo y directo.</p>
          </article>
          <article className="benefit-card">
            <strong>Atencion por WhatsApp</strong>
            <p>Contacto inmediato para consultar disponibilidad y coordinar la ubicacion del servicio.</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default About
