import { useState, useEffect } from "react";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Educacion from "./components/Educacion";
import Skills from "./components/Skills";
import Contacto from "./components/Contacto";
import LoadingScreen from "./components/LoadingScreen";
import Experiencia from "./components/Experiencia";
import Header from "./components/Header";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simula el tiempo de carga
    const timer = setTimeout(() => {
      setIsLoaded(true); // Cambia el estado después de que termine la carga
    }, 3500); // Ajusta el tiempo según lo que necesites

    return () => clearTimeout(timer); // Limpia el temporizador
  }, []);

  useEffect(() => {
    const disableScroll = (event) => event.preventDefault();
    window.addEventListener("wheel", disableScroll, { passive: false });
    return () => window.removeEventListener("wheel", disableScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden granulado font-orbitron">
      {/* Pantalla de carga */}
      {!isLoaded && <LoadingScreen />}

      {/* Header fijo en la parte superior */}
      <Header />

      {/* Contenido principal con animación */}
      <div className={`main-content ${isLoaded ? "fade-in mt-16" : "hidden"}`}>
        {/* Efectos de TV */}
        <div className="tv-static"></div>
        <div className="tv-scanlines"></div>

        {/* Overlay de imagen */}
        <img
          src="./src/assets/images/nueva-fondo.png"
          width="1920"
          height="1080"
          className="fixed w-screen h-screen select-none pointer-events-none z-50 inset-0"
        />

        {/* Contenido principal */}
        <div className="flex flex-col">
          <div className="min-h-screen">
            <Inicio />
          </div>
          <div className="min-h-screen">
            <SobreMi />
          </div>
          <div className="min-h-screen">
            <Experiencia />
          </div>
          <div className="min-h-screen">
            <Proyectos />
          </div>
          <div className="min-h-screen">
            <Educacion />
          </div>
          <div className="min-h-screen">
            <Skills />
          </div>
          <div className="min-h-screen">
            <Contacto />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;