import SectionTitle from '../components/SectionTitle';
import { services } from '../data/churchData';

const Horarios = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-slate-100 shadow-sm rounded-3xl p-10">
          <SectionTitle title="Horarios de Reunión" />
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Ven a compartir con nosotros en nuestros espacios de culto, oración y enseñanza bíblica. Aquí tienes los horarios principales para planificar tu visita.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((servicio, index) => (
              <div
                key={index}
                className={`bg-slate-50 border-t-4 rounded-3xl border-slate-200 p-7 shadow-sm hover:-translate-y-1 transition-transform duration-300 ${servicio.accent || 'border-blue-900'}`}
              >
                <h3 className="font-serif text-2xl text-slate-900 mb-3">{servicio.title}</h3>
                <p className="text-slate-700 font-semibold mb-4">{servicio.time}</p>
                <p className="text-slate-600 leading-relaxed">{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Horarios;