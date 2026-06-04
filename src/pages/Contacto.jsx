import SectionTitle from "../components/SectionTitle";

const Contacto = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-slate-100 shadow-sm rounded-3xl p-10">
          <div className="text-center mb-10">
            <SectionTitle title="Contacto" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              Estamos felices de recibir tu visita. Nuestro equipo está disponible para apoyarte en consultas, oración y orientación pastoral.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Visítanos</h3>
              <p className="text-slate-600 leading-relaxed">Calle Falsa 123, Santiago, Chile</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Contáctanos</h3>
              <p className="text-slate-600 leading-relaxed">
                <span className="block font-medium text-slate-900">Teléfono:</span>
                +56 9 1234 5678
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                <span className="block font-medium text-slate-900">Correo:</span>
                contacto@idiglesia.cl
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Enviar mensaje por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;