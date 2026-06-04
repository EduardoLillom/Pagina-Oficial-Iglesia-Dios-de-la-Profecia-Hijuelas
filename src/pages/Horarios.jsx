import SectionTitle from '../components/SectionTitle';
import { services } from '../data/churchData';

const Horarios = () => {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-4xl bg-white/5 border border-white/10 p-10 shadow-2xl backdrop-blur-md">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <SectionTitle title="Horarios de Reunión" />
              <p className="mt-4 max-w-3xl text-slate-300 leading-relaxed">
                Ven a compartir con nosotros en nuestros espacios de culto, oración y enseñanza bíblica. Aquí tienes los horarios principales para planificar tu visita.
              </p>
            </div>
            <div className="rounded-4xl overflow-hidden shadow-2xl ring-1 ring-cyan-300/20">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Reunión de iglesia"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((servicio, index) => (
              <div
                key={index}
                className={`rounded-4xl border-l-8 border-cyan-500 bg-slate-900/95 p-8 shadow-2xl transition hover:-translate-y-1 hover:shadow-2xl ${servicio.accent || 'border-cyan-500'}`}
              >
                <h3 className="text-2xl font-bold text-white mb-3">{servicio.title}</h3>
                <p className="text-cyan-300 font-semibold mb-4">{servicio.time}</p>
                <p className="text-slate-300 leading-relaxed">{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Horarios;