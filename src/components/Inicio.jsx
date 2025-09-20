function Inicio() {
  return (
    <div id="inicio" className="flex flex-col justify-center items-center h-screen text-white px-4">
      {/* Imagen de perfil */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#D9D9D9] mb-6">
        <img
          src="/Foto-cv.png"
          alt="Foto de perfil"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Nombre */}
      <h1 className="text-4xl text-[#1DB954] mb-14 font-medium text-center">
        Roberto Moreno
      </h1>
      
      {/* Descripción */}
      <p className="text-2xl font-semibold text-[#D9D9D9] text-center max-w-[100%] sm:max-w-[600px]">
        Bienvenido a mi portafolio como desarrollador front-end y diseñador UX/UI
      </p>
    </div>
  );
}

export default Inicio;
