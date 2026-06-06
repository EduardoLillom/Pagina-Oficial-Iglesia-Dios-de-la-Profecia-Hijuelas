import SectionTitle from '../components/SectionTitle';
import { services } from '../data/churchData';

const Horarios = () => {
  return (
    <section className="bg-slate-50 py-12 md:py-20 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-10 md:space-y-16">
        
        {/* Sección Header Principal */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <SectionTitle title="Horarios de Reunión" />
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Ven a compartir con nosotros en nuestros espacios de culto, oración y enseñanza bíblica. 
              Aquí tienes los horarios principales para planificar tu visita. ¡Te esperamos con los brazos abiertos!
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 md:p-8 shadow-md hover:shadow-lg transition border border-slate-100">
                <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-cyan-600 font-bold">Comunidad</p>
                <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed">
                  Espacios diseñados para toda la familia, desde niños hasta adultos.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 md:p-8 shadow-md hover:shadow-lg transition border border-slate-100">
                <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-cyan-600 font-bold">Modalidad</p>
                <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed">
                  Reuniones presenciales centrales con todas las medidas para recibirte.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque de Imagen */}
          <div className="rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2 h-48 sm:h-64 lg:h-full min-h-[250px] lg:min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Reunión de iglesia"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Separador visual opcional con texto */}
        <div className="rounded-3xl bg-white border border-slate-100 p-6 md:p-8 shadow-md">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-600 font-bold">Nuestros Servicios</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Días y Horas de Encuentro</h2>
            <p className="max-w-2xl text-slate-500 text-sm md:text-base">
              Consulta nuestras actividades semanales y encuentra el momento ideal para congregarte.
            </p>
          </div>
        </div>

        {/* Cuadrícula de Tarjetas de Servicios Dinámicos */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((servicio, index) => (
            <div 
              key={index} 
              className="rounded-3xl bg-linear-to-br from-white to-slate-50/50 border-l-8 border-cyan-500 border-t border-r border-b border-slate-200/60 p-6 md:p-8 shadow-md hover:shadow-lg hover:border-cyan-200 transition duration-300"
            >
              <p className="text-xs uppercase tracking-wider text-cyan-600 font-bold mb-2">
                {servicio.time}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                {servicio.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Horarios;