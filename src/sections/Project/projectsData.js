import ImgProject1 from '../../assets/fondoNat4.jpg';
import ImgProject2 from '../../assets/fondoNat4.jpg';
import ImgProject3 from '../../assets/fondoNat4.jpg';



export const projects = [
  {
    id: 1,
    title: "Portfolio Personal",
    description: "Portfolio profesional desarrollado con React y Tailwind CSS",
    technologies: ["React", "Tailwind CSS", "Vite"],
    image:  ImgProject1 ,
    githubUrl: "https://github.com/tuusuario/portfolio",
    demoUrl: "https://tudominio.com"
  },
  {
    id: 2,
    title: "E-commerce",
    description: "Plataforma de ventas online con carrito de compras",
    technologies: ["React", "Node.js", "MongoDB"],
    image: ImgProject2,
    githubUrl: "https://github.com/tuusuario/ecommerce",
    demoUrl: "https://ecommerce.tudominio.com"
  },

  {
    id: 3,
    title: "E-Wheel",
    description: "Plataforma de ventas online con carrito de compras",
    technologies: ["React", "Node.js", "MongoDB"],
    image: ImgProject3,
    githubUrl: "https://github.com/tuusuario/ecommerce",
    demoUrl: "https://ecommerce.tudominio.com"
  }
  // Agrega más proyectos aquí
];