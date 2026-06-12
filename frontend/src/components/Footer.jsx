function Footer({
  businessName,
  whatsappUrl,
  phoneDisplay,
  phoneHref,
  address,
  instagramUrl,
  facebookUrl,
  email,
}) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="footer-title">{businessName}</p>
          <p className="footer-copy">
            Atencion 24/7 para emergencias, cambios, reparacion y revision de llantas.
          </p>
          <p className="footer-copy footer-address">{address}</p>
        </div>

        <div>
          <p className="footer-title">Contacto</p>
          <div className="footer-links">
            <a href={phoneHref}>Llamar al {phoneDisplay}</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Solicitar servicio por WhatsApp
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              Ver Instagram del negocio
            </a>
            <a href={facebookUrl} target="_blank" rel="noreferrer">
              Ver Facebook del negocio
            </a>
            <a href={`mailto:${email}`}>Enviar correo a {email}</a>
          </div>
        </div>

        <div>
          <p className="footer-title">Horario</p>
          <p className="footer-copy">Lunes a domingo</p>
          <p className="footer-copy">Disponibilidad 24/7</p>
          <p className="footer-copy">Atencion inmediata por WhatsApp</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
