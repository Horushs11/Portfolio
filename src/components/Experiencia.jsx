function Experiencia() {
  const experiencias = [
    {
      empresa: "Onets",
      periodo: "Marzo 2024 - Octubre 2024",
      rol: "Desarrollador Frontend",
      items: [
        "Desarrollé interfaces web con HTML, CSS, JavaScript y Bootstrap y mejoré la compatibilidad multiplataforma y la accesibilidad.",
        "Diseñé prototipos interactivos en Figma y facilité la aprobación con clientes, alineando expectativas y alcance.",
        "Lideré un pequeño equipo front-end y mejoré la calidad de las entregas con revisiones de código y guías de estilo.",
        "Contribuí al entrenamiento de una solución de IA para identificación de tejados y mejoré la calidad del dataset mediante criterios de etiquetado consistentes.",
      ],
    },
    {
      empresa: "Adminfy",
      periodo: "Octubre 2024 - Agosto 2025",
      rol: "Diseñador y desarrollador Front-end",
      items: [
        "Implementé webhooks para integrar y facilitar el traspaso de datos entre servidores y Odoo (ERP), optimizando la trazabilidad entre áreas.",
        "Desarrollé una página web en React y mejoré la experiencia de usuario con patrones de navegación consistentes y cargas percibidas más fluidas.",
        "Implementé un sistema de contacto conectado a nuestros servidores en IONOS, facilitando el envío de formularios y la notificación interna para el seguimiento de solicitudes.",
        "Diseñé prototipos en Figma y facilité la validación con stakeholders mediante iteraciones cortas y feedback guiado.",
        "Integré Odoo en flujos administrativos clave y mejoré la coordinación entre equipos mediante paneles y procesos estandarizados.",
        "Optimicé la organización documental y la comunicación interna, facilitando el seguimiento de tareas y la priorización diaria.",
      ],
    },
  ];

  return (
    <section id="Experiencia" className="flex items-center justify-center min-h-screen px-4 py-12 sm:py-16">
      <div className="w-full max-w-6xl rounded-3xl md:bg-[#121212] md:shadow-lg text-[#D9D9D9] font-semibold p-6 sm:p-8 lg:p-10">
        <h2 className="text-[#1DB954] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
          Experiencia
        </h2>

        {/* Responsive: 1 columna en móvil, 2 columnas desde md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {experiencias.map((exp) => (
            <article
              key={exp.empresa}
              className="rounded-xl bg-[#222222] p-5 sm:p-6 lg:p-7 shadow-md ring-1 ring-white/5 transition"
            >
              <header className="mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1DB954]">{exp.empresa}</h3>
                <p className="text-sm sm:text-base text-[#cfcfcf]">{exp.periodo}</p>
                <p className="text-sm sm:text-base text-[#cfcfcf]">{exp.rol}</p>
              </header>

              <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-[#b7b7b7]">
                {exp.items.map((li, i) => (
                  <li key={i} className="leading-relaxed">
                    {li}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
