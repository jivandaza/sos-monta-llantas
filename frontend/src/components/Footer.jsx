function Footer({ businessName, whatsappUrl, instagramUrl, facebookUrl, email }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="footer-title">{businessName}</p>
          <p className="footer-copy">
            Atencion 24/7 para emergencias, cambios, reparacion y revision de llantas.
          </p>
        </div>

        <div>
          <p className="footer-title">Contacto</p>
          <div className="footer-links">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={`mailto:${email}`}>{email}</a>
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
