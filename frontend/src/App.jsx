import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import logoImage from './assets/logo.jpg'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Location from './pages/Location'
import Services from './pages/Services'

const BUSINESS_INFO = {
  name: 'SOS Monta LLantas 24/7',
  seoName: 'SOS Monta Llantas',
  whatsappNumber: '573002143130',
  phoneDisplay: '+57 300 214 3130',
  instagramUrl: 'https://www.instagram.com/sosllantassos',
  facebookUrl: 'https://www.facebook.com/share/18bDcb1uwm/',
  email: 'Sosllantas24y7.@gmail.com',
  address: 'Medellin, Colombia. Calle 56a sur cra 62b-68 limonar 1 san Antonio de Prado',
  coverageAreas: ['Medellin', 'San Antonio de Prado', 'sectores cercanos del area metropolitana'],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Medellin%2C%20Colombia.%20Calle%2056a%20sur%20cra%2062b-68%20limonar%201%20san%20Antonio%20de%20Prado',
}

function App() {
  const [selectedService, setSelectedService] = useState('')

  const getWhatsAppUrl = (serviceName = '') => {
    const message = serviceName
      ? `Hola, quiero solicitar el servicio de ${serviceName}. Me puedes ayudar con disponibilidad?`
      : 'Hola, quiero solicitar informacion sobre los servicios de SOS Monta LLantas 24/7.'

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="site-shell">
      <Navbar
        businessName={BUSINESS_INFO.name}
        logoSrc={logoImage}
        selectedService={selectedService}
        whatsappUrl={getWhatsAppUrl(selectedService)}
      />

      <main className="page-shell">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                businessName={BUSINESS_INFO.name}
                seoBusinessName={BUSINESS_INFO.seoName}
                logoSrc={logoImage}
                whatsappUrl={getWhatsAppUrl()}
                phoneDisplay={BUSINESS_INFO.phoneDisplay}
                phoneHref={`tel:+${BUSINESS_INFO.whatsappNumber}`}
                coverageAreas={BUSINESS_INFO.coverageAreas}
                address={BUSINESS_INFO.address}
              />
            }
          />
          <Route path="/sobre-mi" element={<About />} />
          <Route
            path="/servicios"
            element={
              <Services
                selectedService={selectedService}
                onSelectService={setSelectedService}
                getWhatsAppUrl={getWhatsAppUrl}
              />
            }
          />
          <Route
            path="/ubicacion"
            element={
              <Location
                address={BUSINESS_INFO.address}
                mapsUrl={BUSINESS_INFO.mapsUrl}
                whatsappUrl={getWhatsAppUrl(selectedService)}
              />
            }
          />
        </Routes>
      </main>

      <Footer
        businessName={BUSINESS_INFO.name}
        whatsappUrl={getWhatsAppUrl()}
        phoneDisplay={BUSINESS_INFO.phoneDisplay}
        phoneHref={`tel:+${BUSINESS_INFO.whatsappNumber}`}
        address={BUSINESS_INFO.address}
        instagramUrl={BUSINESS_INFO.instagramUrl}
        facebookUrl={BUSINESS_INFO.facebookUrl}
        email={BUSINESS_INFO.email}
      />
    </div>
  )
}

export default App
