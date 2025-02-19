import { useState, useEffect } from "react";
import "../styles/LoadingScreen.css";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 10, 100)); // Incrementa hasta el 100%
    }, 200);

    if (progress === 100) {
      // Espera un poco antes de activar la salida
      setTimeout(() => setIsExiting(true), 500);
    }

    return () => clearInterval(interval); // Limpia el intervalo
  }, [progress]);

  return (
    <div
      className={`loading-screen ${
        isExiting ? "loading-screen-exit" : ""
      }`}
    >
      <div className="loading-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="loading-text">Cargando...</p>
    </div>
  );
};

export default LoadingScreen;
