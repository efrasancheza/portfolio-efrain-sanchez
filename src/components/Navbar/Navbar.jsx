import React, { useState } from "react";
import Logo from "../../assets/efrain.jpeg";

const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Skill", href: "#skill" },
  { id: 4, name: "Contact", href: "#contact" },
];

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 bg-green-500 opacity-80 w-full backdrop-blur-md z-50">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-3 py-3 bg-gray-900">
        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="Efrain Sanchez"
            className="w-16 h-16 rounded-full inline-block transition-transform hover:scale-110 transform duration-300"
          />
        </div>

        {/* Hamburguer */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            )}
          </svg>
        </button>

        {/* Navegacion desktop */}
        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="text-white sm:text-2xl hover:text-sky-400 transition-transform hover:scale-110
                                transform inline-block duration-300"
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navegacion Redes  desktop */}
        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4">
            {navSocialNetworks.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-110 transform duration-300"
                >
                  <i
                    className={`${social.icon} sm:text-2xl text-lg text-white hover:text-sky-400 transition-transform hover:scale-110
                                transform inline-block duration-300`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navegacion mobile */}

      <div className={`md:hidden absolute w-full bg-gray-900 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} `}>
        <ul className="flex flex-col px-4 py-2">
          {navLinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a className="text-white hover:text-sky-400" href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Redes sociales mobile */}
        <ul className="flex space-x-4 px-4 py-2 justify-center border-t border-amber-50">
          {navSocialNetworks.map((social) => (
            <li key={social.id} className="py-2 text-center">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                onClick={() => setIsOpen(false)}
              >
                <i
                  className={`${social.icon}  text-lg text-white hover:text-sky-400`}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
