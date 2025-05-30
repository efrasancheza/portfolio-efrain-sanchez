import React from 'react';
import { Link } from 'react-scroll';
import Programador from '../../assets/efrain.jpeg';

const navSocialNetworks = [
  {
    id: 1,
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "bi bi-instagram",
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "bi bi-linkedin",
  },
];

export const Hero = () => {
  return (
    <section id= "about" className='mt-20 flex flex-col items-center'>
      {/* Contenedor principal con layout flex */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-15 w-full max-w-6xl mx-auto pt-30">
        
        {/* Contenedor de texto + redes sociales */}
        <div className="flex flex-col items-center text-center order-2 md:order-1">
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-white">Hola! mi nombre es <span className="text-lime-400 hover:text-yellow-400" >Efraín Sánchez</span></h1>
            <p className="mt-4 text-lg text-white">Desarrollo soluciones tecnológicas innovadoras</p>
          </div>
          
          {/* Redes sociales - ahora debajo del texto en todos los dispositivos */}
          <ul className="flex space-x-6 mt-2">
            {navSocialNetworks.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-all hover:scale-110 duration-300"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-2xl text-white hover:text-sky-400`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contenedor de la imagen - orden cambiante */}
        <div className="relative order-1 md:order-2 mb-8 md:mb-0">
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