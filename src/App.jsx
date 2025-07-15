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
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simula el tiempo de carga
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Bloquear/desbloquear scroll modificando el estilo del body
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoaded]);

  return (
    <div className="min-h-screen overflow-x-hidden granulado font-orbitron">
      {!isLoaded && <LoadingScreen />}

      <Header />

      <div className={`main-content ${isLoaded ? "fade-in mt-16" : "hidden"}`}>
        <div className="tv-static"></div>
        <div className="tv-scanlines"></div>

        <img
          src="/nueva-fondo.png"
          width="1920"
          height="1080"
          className="fixed w-screen h-screen select-none pointer-events-none z-50 inset-0"
        />

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

      <Analytics />
    </div>
  );
}

export default App;
