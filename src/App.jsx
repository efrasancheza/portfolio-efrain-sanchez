import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Fondo from './assets/fondoNat2.jpg'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
import Project from './sections/Project/Project'
import Contact from './sections/Contact/Contact'

function App() {
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed', // Fondo fijo al hacer scroll
    minHeight: '100vh', // Cambiado de height a minHeight
    width: '100%',
  }

  return (
    <div style={bgImagen} className="overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4">
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
  )
}

export default App