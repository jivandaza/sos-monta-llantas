import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar({ businessName, logoSrc, selectedService, whatsappUrl }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar-wrap">
      <nav className="navbar" aria-label="Navegacion principal">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logoSrc} alt={`Logo de ${businessName}`} className="brand-logo" />
          <div>
            <span className="brand-name">{businessName}</span>
            <span className="brand-copy">Servicio movil, rapido y confiable</span>
          </div>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-panel ${isMenuOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            <NavLink to="/" end className="nav-link" onClick={closeMenu}>
              Inicio
            </NavLink>
            <NavLink to="/sobre-mi" className="nav-link" onClick={closeMenu}>
              Sobre mi
            </NavLink>
            <NavLink to="/servicios" className="nav-link" onClick={closeMenu}>
              Servicios
            </NavLink>
            <NavLink to="/ubicacion" className="nav-link" onClick={closeMenu}>
              Ubicacion
            </NavLink>
          </div>

          <div className="nav-actions">
            {selectedService ? (
              <span className="nav-pill" title={selectedService}>
                Servicio elegido: {selectedService}
              </span>
            ) : null}

            <a
              className="button button-primary nav-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              WhatsApp de servicio
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
