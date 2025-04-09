import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/carouselStyles.css";

function Proyectos() {
  const proyectos = [
    {
      nombre: "AdminfyApp",
      descripcion: "Aplicación de gestión de entidades en proceso de desarrollo.",
      imagen: "/adminfy.png",
      enlace: "https://adminfyapp.com/"
    },
    {
      nombre: "Pokefy",
      descripcion: "Aplicación de visualización de pokemons.",
      imagen: "/Pokefy.png",
      enlace: "https://pokefy-five.vercel.app/"
    },
  ];

  return (
    <div id="proyectos" className="flex items-center justify-center min-h-screen">
      <div className="md:bg-[#121212] text-center p-8 rounded-3xl md:shadow-lg max-w-4xl w-full">
        <h2 className="text-[#1DB954] text-4xl font-bold mb-8">Proyectos</h2>
        <p className="text-[#D9D9D9] text-lg font-semibold text-center mb-4 leading-relaxed">
          Aquí puedes ver los proyectos en los que he trabajado, reflejando mi
          pasión y habilidades como desarrollador front-end.
        </p>
        
        <Carousel 
          showArrows={true} 
          infiniteLoop={true} 
          showThumbs={false} 
          showStatus={false} 
          showIndicators={false} 
          className="rounded-xl custom-carousel"
        >
          {proyectos.map((proyecto, index) => (
            <div key={index} className="p-4">
              <img src={proyecto.imagen} alt={proyecto.nombre} className="rounded-xl shadow-lg" />
              <h3 className="text-[#1DB954] text-2xl font-semibold mt-4">{proyecto.nombre}</h3>
              <p className="text-[#D9D9D9] text-lg font-semibold mt-2 mb-8">{proyecto.descripcion}</p>
              <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="bg-[#1DB954] text-[#1a1a1a] px-6 py-3 rounded-full font-bold hover:bg-[#FFD300] transition">Visitar</a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Proyectos;