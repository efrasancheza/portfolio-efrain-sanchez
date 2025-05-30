
export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-10 pb-20 mt-20 bg-gray-100 dark:bg-gray-800 opacity-90"
    >
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-lime-100 text-center mb-12">
          Contáctame
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
  <div className="md:w-1/2 flex flex-col items-center justify-center"> {/* Contenedor centrado */}
    <div className="w-full max-w-md space-y-6 text-center"> {/* Ancho máximo y centrado */}
      <div className="flex justify-center items-center space-x-4">
        <i className="bi bi-envelope text-3xl text-indigo-600" />
        <span className="text-white">
          lsanchezarroyo251558@gmail.com
        </span>
      </div>
      
      {/* Ejemplo para otros elementos de contacto (centrados automáticamente) */}
      <div className="flex justify-center items-center space-x-4">
        <i className="bi bi-telephone text-3xl text-indigo-600" />
        <span className="text-white">+51 123 456 789</span>
      </div>
      
      <div className="flex justify-center items-center space-x-4">
        <i className="bi bi-geo-alt text-3xl text-indigo-600" />
        <span className="text-white">Lima, Perú</span>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}
