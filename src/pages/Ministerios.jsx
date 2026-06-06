import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const ministerios = [
  {
    slug: "escuela-biblica",
    name: "Escuela Bíblica",
    description: "Un espacio para profundizar en la Palabra de Dios para todas las edades.",
    details: "Ofrecemos clases para niños, jóvenes y adultos, con un enfoque en el crecimiento espiritual y la aplicación práctica de las Escrituras.",
  },
  {
    slug: "jovenes",
    name: "Jovenes",
    description: "Un espacio para acompañar a los jóvenes en su vida espiritual, familiar y comunitaria.",
    details: "Cada semana nos reunimos para compartir la Palabra, orar juntos y vivir experiencias que fortalezcan su fe y su sentido de pertenencia a la comunidad.",
  },
  {
    slug: "damas",
    name: "Damas",
    description: "Un espacio para acompañar a las mujeres en su vida espiritual, familiar y comunitaria.",
    details: "Cada semana nos reunimos para compartir la Palabra, orar juntas y vivir experiencias que fortalezcan su fe y su sentido de pertenencia a la comunidad.",
  },
  {
    slug: "varones",
    name: "Varones",
    description: "Un espacio para acompañar a los hombres en su vida espiritual, familiar y comunitaria.",
    details: "Cada semana nos reunimos para compartir la Palabra, orar juntos y vivir experiencias que fortalezcan su fe y su sentido de pertenencia a la comunidad.",
  },
];

const Ministerios = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6">
            <SectionTitle title="Ministerios" />
            <p className="max-w-2xl text-slate-600 leading-relaxed">
              Descubre los ministerios que se encargan de servir, capacitar y acompañar a cada persona en su camino de fe.
            </p>
          </div>
          <div className="rounded-4xl overflow-hidden shadow-2xl ring-1 ring-cyan-100/40"></div>
        </div>

        {/* Tarjetas de ministerios */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ministerios.map((item) => (
            <div key={item.slug} className="rounded-4xl border border-slate-200 bg-white p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{item.name}</h2>
                <p className="text-slate-600 mb-4">{item.description}</p>
              </div>
              
              {/* Botón para ver más detalles */}
              <div className="mt-6">
                <Link
                  to={`/ministerios/${item.slug}`}
                  className="text-sm font-semibold text-cyan-600 hover:text-cyan-500 inline-flex items-center gap-1"
                >
                  Ver más detalles <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/nosotros/quienes"
            className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500"
          >
            Volver a Nosotros
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ministerios;
