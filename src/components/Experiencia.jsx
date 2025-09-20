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
      ]
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
        "Optimicé la organización documental y la comunicación interna, facilitando el seguimiento de tareas y la priorización diaria."
      ]
    }
  ];

  return (
    <div id="Experiencia" className="flex items-center justify-center min-h-screen">
      <div className="md:bg-[#121212] text-[#D9D9D9] font-semibold p-8 rounded-3xl md:shadow-lg max-w-6xl w-full">
        <h2 className="text-[#1DB954] text-4xl font-bold mb-6">Experiencia</h2>

        {/* OPCIÓN A: siempre lado a lado */}
        <div className="grid grid-cols-2 gap-6">
          {experiencias.map((exp) => (
            <section key={exp.empresa} className="bg-[#222222] p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-[#1DB954]">{exp.empresa}</h3>
              <p className="text-[#D9D9D9] text-lg">{exp.periodo}</p>
              <p className="text-[#D9D9D9] text-lg">{exp.rol}</p>
              <ul className="mt-4 text-[#b7b7b7] list-disc list-inside space-y-2">
                {exp.items.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
