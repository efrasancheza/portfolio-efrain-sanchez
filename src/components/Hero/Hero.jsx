import React from 'react'
import Programador from '../../assets/programador.jpg'

export const Hero = () => {
  return (
    <section className='mt-36 flex flex-col items-center'>
      {/* Contenedor principal con layout flex */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl mx-auto px-4">
        
        {/* Texto y descripción (añadí placeholder) */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-white">Ingeniero de Sistemas</h1>
          <p className="mt-4 text-lg text-white">Desarrollo soluciones tecnológicas innovadoras</p>
        </div>
        
        {/* Contenedor de la imagen con efectos */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mix-blend-multiply blur-md opacity-70"></div>
          <img 
            src={Programador} 
            alt="ingeniero de sistemas" 
            className="relative z-10 h-64 w-64 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;