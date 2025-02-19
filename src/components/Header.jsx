import "../styles/Header.css"; // Importamos el CSS

const Header = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header fixed top-0 left-0 w-full bg-[#121212]/80 backdrop-blur-md z-50 py-4 shadow-md">
      <nav className="flex justify-center space-x-6">
        <button className="text-[#D9D9D9] font-bold hover:text-[#1DB954]" onClick={() => handleScroll("inicio")}>Inicio</button>
        <button className="text-[#D9D9D9] font-bold hover:text-[#1DB954]" onClick={() => handleScroll("sobreMi")}>Sobre Mí</button>
        <button className="text-[#D9D9D9] font-bold hover:text-[#1DB954]" onClick={() => handleScroll("Experiencia")}>Experiencia</button>
        <button className="text-[#D9D9D9] font-bold hover:text-[#1DB954]" onClick={() => handleScroll("proyectos")}>Proyectos</button>
        <button className="text-[#D9D9D9] font-bold hover:text-[#1DB954]" onClick={() => handleScroll("Educacion")}>Educación</button>
        <button className="text-[#D9D9D9] font-bold hover:text-[#1DB954]" onClick={() => handleScroll("skills")}>Skills</button>
        <button className="text-[#D9D9D9] font-bold hover:text-[#1DB954]" onClick={() => handleScroll("contacto")}>Contacto</button>
      </nav>
    </header>
  );
};

export default Header;