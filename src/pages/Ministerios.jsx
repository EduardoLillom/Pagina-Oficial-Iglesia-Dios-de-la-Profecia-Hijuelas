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
    <div className="py-20 px-4 max-w-6xl mx-auto space-y-12 bg-slate-50/50 rounded-3xl my-10">
      <div className="text-center space-y-4">
        <SectionTitle title="Ministerios" />
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          Conoce los ministerios activos en nuestra iglesia y cómo servimos a diferentes edades, dones y necesidades.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ministerios.map((item) => (
          <div key={item.name} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-xl font-bold text-slate-900 mb-3">{item.name}</h2>
            <p className="text-slate-600 mb-4">{item.description}</p>
            <p className="text-slate-500 text-sm leading-relaxed">{item.details}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link
          to="/nosotros/quienes"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
        >
          Volver a Nosotros
        </Link>
      </div>
    </div>
  );
};

export default Ministerios;
