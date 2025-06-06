export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-10 pb-20 mt-20 bg-gray-900 dark:bg-gray-900 opacity-80"
    >
      <div className="container mx-auto px-6 ">
        <h2 className="text-6xl font-bold text-lime-100 text-center mb-12">
          Contáctame
        </h2>

        <div className="flex flex-col items-center justify-center">
          <div className="md:w-1/2 flex flex-col items-center justify-center">
            {" "}
            {/* Contenedor centrado */}
            <div className="bg-gray-800 dark:bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md ">
              
              {/* Ancho máximo y centrado */}
              <div className="flex justify-center items-center space-x-4 mb-8">
                <i className="bi bi-envelope text-3xl text-indigo-600" />
                <span className="text-white text-2xl ">
                  lsanchezarroyo251558@gmail.com
                </span>
              </div>
              {/* Ejemplo para otros elementos de contacto (centrados automáticamente) */}
              <div className="flex justify-center items-center space-x-4 mb-8">
                <i className="bi bi-telephone text-3xl text-indigo-600" />
                <span className="text-white text-2xl">+51 904 771 427</span>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <i className="bi bi-geo-alt text-3xl text-indigo-600" />
                <span className="text-white text-2xl">Lima, Perú</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
