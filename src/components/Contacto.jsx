function Contacto() {
  return (
    <div id="contacto" className="flex items-center justify-center min-h-screen">
      <div className="md:bg-[#121212] text-center p-8 rounded-3xl md:shadow-lg max-w-4xl w-full">
        <h2 className="text-[#1DB954] text-4xl font-bold mb-8">Contacto</h2>
        <p className="text-[#D9D9D9] font-semibold text-lg mt-2 mb-5">Si deseas obtener más información o solicitar mi CV, puedes contactarme por correo electrónico o conectar conmigo en LinkedIn.</p>
        <p className="text-[#D9D9D9] font-semibold text-lg">Email: morenodev37@gmail.com</p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="https://www.linkedin.com/in/roberto-moreno-iglesias-096534258/" target="_blank" rel="noopener noreferrer" className="bg-[#1DB954] text-[#1a1a1a] px-6 py-3 rounded-full font-bold hover:bg-[#FFD300] transition">LinkedIn</a>
          <a href="https://github.com/Horushs11" target="_blank" rel="noopener noreferrer" className="bg-[#1DB954] text-[#1a1a1a] px-6 py-3 rounded-full font-bold hover:bg-[#FFD300] transition">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;