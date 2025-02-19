function Educacion() {

  return (
    <div id="Educacion" className="flex items-center justify-center min-h-screen">
      <div className="md:bg-[#121212] text-center p-8 rounded-3xl md:shadow-lg max-w-4xl w-full">
        <h2 className="text-[#1DB954] text-4xl font-bold mb-8">Educación</h2>
        
        <div className="bg-[#222222] p-6 rounded-xl shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-[#1DB954]">Desarrollo de Aplicaciones Multiplataforma (DAM)</h3>
          <p className="text-[#D9D9D9] font-semibold text-lg">MEDAC | Septiembre 2022 - Junio 2024</p>
        </div>

        <div className="bg-[#222222] p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-[#1DB954]">Bachillerato de Ciencias Sociales</h3>
          <p className="text-[#D9D9D9] font-semibold text-lg">IES Dionisio Aguado | Septiembre 2020 - Junio 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Educacion;
