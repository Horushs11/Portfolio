

function SobreMi() {
  return (
    <div id="sobreMi" className="flex items-center justify-center min-h-screen">
      
      <div className="md:bg-[#121212] text-center p-8 rounded-3xl md:shadow-lg max-w-4xl">
        <h2 className="text-[#1DB954] text-4xl font-bold mb-4">Sobre mí</h2>
        <p className="text-[#D9D9D9] text-lg font-semibold text-start mb-4 leading-relaxed">
          Soy una persona resolutiva, creativa y proactiva, con gran capacidad
          para trabajar en equipo. Me encanta aprender cosas nuevas y
          enfrentarme a desafíos que me permitan crecer profesionalmente.
        </p>
        <p className="text-[#D9D9D9] text-lg font-semibold text-start mb-4 leading-relaxed">
          Estoy entusiasmado por seguir desarrollando mi carrera en el mundo
          del desarrollo web, aplicando mis habilidades y conocimientos para
          crear soluciones innovadoras.
        </p>
        <p className="text-[#D9D9D9] text-lg font-semibold text-start mb-4 leading-relaxed">
          Me gusta explorar nuevas tecnologías, crear pequeños proyectos
          personales y seguir aprendiendo sobre diseño UI/UX para mejorar la
          experiencia de usuario en mis desarrollos.
        </p>
        <p className="text-[#D9D9D9] text-lg font-semibold text-start">
          Puedes conocer más de mí en{" "}
          <a
            href="https://www.linkedin.com/in/roberto-moreno-iglesias-096534258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1DB954] hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      
      
      
    </div>
  );
};

export default SobreMi;