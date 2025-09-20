import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/carouselStyles.css"; // si tienes estilos propios

function Proyectos() {
  const proyectos = [
    {
      nombre: "Clubox",
      descripcion: "Aplicación de gestión de entidades.",
      imagen: "/Clubox.png",
      enlace: "https://www.clubox.es/"
    },
    {
      nombre: "Mundo Basket",
      descripcion: "Mundo Basket es una aplicación web desarrollada con React y Tailwind, que consume datos estructurados en JSON para mostrar de forma dinámica plantillas, estadísticas y equipos de las ligas españolas de baloncesto.",
      imagen: "/Mundobasket.png",
      enlace: "https://mundo-basket.vercel.app/"
    },
    {
      nombre: "Adminfy",
      descripcion: "Web de empresa (en desarrollo).",
      imagen: "/adminfy.png",
      enlace: "https://www.adminfytechnologies.com/"
    },
    {
      nombre: "Pokefy",
      descripcion: "Aplicación de visualización de pokemons.",
      imagen: "/Pokefy.png",
      enlace: "https://pokefy-five.vercel.app/"
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1280, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="proyectos" className="flex justify-center items-center py-16 px-4">
      <div className="bg-[#121212] text-center p-6 rounded-3xl shadow-lg max-w-6xl w-full">
        <h2 className="text-[#1DB954] text-4xl font-bold mb-4">Proyectos</h2>
        <p className="text-[#D9D9D9] text-base font-medium mb-8">
          Aquí puedes ver los proyectos en los que he trabajado.
        </p>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          arrows
          keyBoardControl
          containerClass="carousel-container"
          itemClass="px-3"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-4 shadow-md h-full flex flex-col items-center justify-between"
            >
              <div className="w-full h-[250px] flex justify-center items-center bg-black rounded-xl overflow-hidden">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.nombre}
                  className="h-full object-contain"
                />
              </div>
              <h3 className="text-[#1DB954] text-2xl font-semibold mt-4">
                {proyecto.nombre}
              </h3>
              <p className="text-[#D9D9D9] text-base font-medium mt-2 mb-4">
                {proyecto.descripcion}
              </p>
              {proyecto.enlace && (
                <a
                  href={proyecto.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1DB954] text-[#1a1a1a] px-5 py-2 rounded-full font-bold hover:bg-[#FFD300] transition"
                >
                  Visitar
                </a>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Proyectos;
