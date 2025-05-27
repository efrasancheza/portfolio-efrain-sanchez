import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Fondo from './assets/fondoNat2.jpg'


function App() {

  const bgImagen={
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    height: '100vh',
    width: '100%',

  }

  return (
    <div style={bgImagen} className="overflow-hidden">
    
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
