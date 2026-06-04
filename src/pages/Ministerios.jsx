import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const ministerios = [
  {
    name: "Ministerio de Jóvenes",
    description: "Encuentros, discipulado y servicio para los jóvenes que quieren crecer en su fe y vivir con propósito.",
    details: "Participamos en actividades, grupos de crecimiento y proyectos sociales que fomentan la fraternidad y la misión.",
  },
  {
    name: "Ministerio de Damas",
    description: "Un espacio para acompañar a las mujeres en su vida espiritual, familiar y comunitaria.",
    details: "Ofrecemos estudios bíblicos, retiros y apoyo mutuo para fortalecer el llamado femenino en la iglesia.",
  },
  {
    name: "Ministerio de Música",
    description: "Adoración musical para bendecir el culto y preparar corazones hacia la presencia de Dios.",
    details: "Somos una familia de músicos y cantores que sirven con talento, excelencia y entrega en cada reunión.",
  },
  {
    name: "Ministerio de Niños",
    description: "Enseñanza bíblica y juegos diseñados para que los niños se encuentren con Jesús de forma alegre y segura.",
    details: "Cada semana cuidamos, educamos y acompañamos a los más pequeños en su crecimiento espiritual.",
  },
  {
    name: "Ministerio de Familias",
    description: "Apoyo integral para parejas, padres e hijos con recursos que fortalecen el hogar cristiano.",
    details: "Creamos espacios de consejería, capacitación y encuentro para vivir la familia según los principios bíblicos.",
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

          <div className="rounded-4xl overflow-hidden shadow-2xl ring-1 ring-cyan-100/40">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
              alt="Ministerios en acción"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ministerios.map((item) => (
            <div key={item.name} className="rounded-4xl border border-slate-200 bg-white p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{item.name}</h2>
              <p className="text-slate-600 mb-4">{item.description}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{item.details}</p>
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
