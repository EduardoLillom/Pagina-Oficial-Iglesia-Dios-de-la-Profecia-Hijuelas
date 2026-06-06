import { useParams, Link } from "react-router-dom";

// Agregamos imágenes (puedes usar URLs reales o locales) y la lista de miembros de staff/líderes
const ministerios = [
  {
    slug: "escuela-biblica",
    name: "Escuela Bíblica",
    // Imagen de prueba de 800x450 px (temática de libros/estudio)
    image: "https://picsum.photos/id/24/800/450", 
    description: "Un espacio para profundizar en la Palabra de Dios para todas las edades.",
    details: "Ofrecemos clases estructuradas para niños, jóvenes y adultos, con un enfoque en el crecimiento espiritual constante y la aplicación práctica de las Escrituras en el día a día.",
    members: [
      { name: "Carlos Mendoza", role: "Coordinador General", avatar: "https://i.pravatar.cc/150?img=11" },
      { name: "Elena Espinoza", role: "Maestra de Niños", avatar: "https://i.pravatar.cc/150?img=5" },
    ]
  },
  {
    slug: "jovenes",
    name: "Jóvenes",
    // Imagen de prueba (temática de grupo/reunión)
    image: "https://picsum.photos/id/1062/800/450",
    description: "Un espacio para acompañar a los jóvenes en su vida espiritual, familiar y comunitaria.",
    details: "Cada semana nos reunimos para compartir la Palabra, orar juntos y vivir experiencias dinámicas que fortalezcan su fe y su sentido de pertenencia a la comunidad.",
    members: [
      { name: "Samuel Silva", role: "Líder de Jóvenes", avatar: "https://i.pravatar.cc/150?img=12" },
      { name: "Laura Pastén", role: "Coordinadora de Actividades", avatar: "https://i.pravatar.cc/150?img=16" },
    ]
  },
  {
    slug: "damas",
    name: "Damas",
    // Imagen de prueba (temática de naturaleza/tranquilidad)
    image: "https://picsum.photos/id/306/800/450",
    description: "Un espacio para acompañar a las mujeres en su vida espiritual, familiar y comunitaria.",
    details: "Cada semana nos reunimos para compartir la Palabra, orar juntas y vivir experiencias que fortalezcan su fe y su sentido de pertenencia a la comunidad.",
    members: [
      { name: "Marta Cortés", role: "Presidenta de Damas", avatar: "https://i.pravatar.cc/150?img=32" },
    ]
  },
  {
    slug: "varones",
    name: "Varones",
    // Imagen de prueba (temática de montaña/esfuerzo)
    image: "https://picsum.photos/id/342/800/450",
    description: "Un espacio para acompañar a los hombres en su vida espiritual, familiar y comunitaria.",
    details: "Cada semana nos reunimos para compartir la Palabra, orar juntos y vivir experiencias que fortalezcan su fe y su sentido de pertenencia a la comunidad.",
    members: [
      { name: "Andrés Castro", role: "Coordinador de Varones", avatar: "https://i.pravatar.cc/150?img=59" },
    ]
  },
];

const DetalleMinisterio = () => {
  const { id } = useParams();
  
  const ministerio = ministerios.find((m) => m.slug === id);

  if (!ministerio) {
    return (
      <div className="text-center py-24 bg-slate-50 min-h-[70vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-slate-800">Ministerio no encontrado</h2>
        <Link to="/ministerios" className="mt-4 rounded-full bg-cyan-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-cyan-500 transition">
          Volver a Ministerios
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 py-12 md:py-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Botón Volver */}
        <Link 
          to="/ministerios" 
          className="text-sm font-semibold text-cyan-600 hover:text-cyan-500 inline-flex items-center gap-2 mb-8 group transition"
        >
          <span className="transition group-hover:-translate-x-1">←</span> Volver a ministerios
        </Link>

        {/* Contenedor Principal en Grid */}
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] items-start">
          
          {/* COLUMNA IZQUIERDA: Info Principal e Imagen */}
          <div className="space-y-8">
            <div className="bg-white rounded-4xl p-6 md:p-10 shadow-xl border border-slate-100 ring-1 ring-slate-900/5">
              <span className="text-cyan-600 font-bold text-xs uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full">
                Ministerio
              </span>
              <h1 className="text-4xl font-extrabold text-slate-900 mt-4 mb-6">{ministerio.name}</h1>
              
              <p className="text-xl text-slate-600 mb-8 font-medium leading-relaxed border-l-4 border-cyan-500 pl-4 bg-slate-50/50 py-3 pr-2 rounded-r-2xl">
                {ministerio.description}
              </p>

              {/* Imagen Principal del Ministerio */}
              <div className="rounded-3xl overflow-hidden shadow-lg my-8 aspect-[16/9] bg-slate-200 ring-1 ring-slate-200">
                <img 
                  src={ministerio.image} 
                  alt={ministerio.name} 
                  className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
                />
              </div>
              
              <div className="space-y-4 text-slate-700 leading-relaxed border-t border-slate-100 pt-8">
                <h3 className="text-xl font-bold text-slate-900">¿Qué hacemos en este espacio?</h3>
                <p className="text-slate-600 text-base">{ministerio.details}</p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Barra lateral del Equipo / Miembros */}
          <div className="bg-white rounded-4xl p-6 md:p-8 shadow-xl border border-slate-100 ring-1 ring-slate-900/5 lg:sticky lg:top-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
              Equipo de Trabajo
            </h3>
            
            <div className="space-y-5">
              {ministerio.members && ministerio.members.length > 0 ? (
                ministerio.members.map((member, index) => (
                  <div key={index} className="flex items-center gap-4 p-2 rounded-2xl hover:bg-slate-50 transition">
                    {/* Avatar redondo */}
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-12 h-12 rounded-full object-cover shadow-sm bg-slate-100"
                    />
                    {/* Datos del Miembro */}
                    <div>
                      <h4 className="font-semibold text-slate-900 text-base">{member.name}</h4>
                      <p className="text-xs font-medium text-cyan-600 uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500 italic">No hay encargados asignados actualmente.</p>
              )}
            </div>

            {/* Cuadro de contacto rápido o invitación */}
            <div className="mt-8 bg-gradient-to-br from-cyan-50 to-slate-50 rounded-2xl p-5 border border-cyan-100/50">
              <h4 className="font-bold text-slate-900 text-sm mb-1">¿Quieres integrarte?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Escríbenos a través de nuestra sección de contacto para recibir los horarios detallados e incorporarte al equipo.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DetalleMinisterio;