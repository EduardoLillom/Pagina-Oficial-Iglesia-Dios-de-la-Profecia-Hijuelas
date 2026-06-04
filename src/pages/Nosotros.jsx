import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const tabs = [
  { id: "quienes", label: "Quiénes somos" },
  { id: "vision", label: "Nuestra visión" },
  { id: "mision", label: "Nuestra misión" },
];

const misionPilares = [
  {
    title: "Que exalta a Cristo",
    text: "Que Jesucristo se vea reflejado en todo lo que hagamos. Él es la Cabeza del Cuerpo y por lo tanto debe tener la preeminencia en todo.",
  },
  {
    title: "Gente que procura la santidad",
    text: "Nacimos del arrollador avivamiento de las reuniones campestres de santidad. El llamado a la santidad está profundamente arraigado en nuestras raíces.",
  },
  {
    title: "Lleno del Espíritu",
    text: "La promesa profética de que 'en los últimos días derramará Su Espíritu' sigue siendo una parte central de nuestro ADN mundial.",
  },
  {
    title: "Abierto a todas las naciones",
    text: "Nos aferramos al ideal de que la iglesia de Dios estaría compuesta por toda 'tribu, lengua, pueblo y nación'. Celebramos la diversidad.",
  },
  {
    title: "Hacedor de discípulos",
    text: "Por más de un siglo de ministerio, esta red familiar se ha comprometido con el mandato bíblico de la Gran Comisión.",
  },
  {
    title: "Establecedor de iglesias",
    text: "Las iglesias sanas que plantan nuevas iglesias contribuyen en gran medida a la difusión del evangelio en todo el mundo.",
  },
  {
    title: "Unión cristiana",
    text: "Nos proponemos cooperar con todos los que exaltan el nombre de Cristo y Su gran evangelio en un espíritu de unidad.",
  },
];

const Nosotros = () => {
  const { tab } = useParams();
  const [activeTab, setActiveTab] = useState(tab || "quienes");

  useEffect(() => {
    if (tab === "quienes" || tab === "vision" || tab === "mision") {
      setActiveTab(tab);
    } else {
      setActiveTab("quienes");
    }
  }, [tab]);

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto space-y-12 bg-slate-50/50 rounded-3xl my-10">
      <div className="text-center space-y-4">
        <SectionTitle title="Sobre Nosotros" />
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          Conoce nuestra historia, el impacto global y los pilares que guían a la Iglesia de Dios de la Profecía.
        </p>
      </div>

      {/* Navegación estilo COGOP: Botones minimalistas tipo píldora */}
      <div className="flex justify-center">
        <div className="inline-flex bg-white p-1.5 rounded-full shadow-sm border border-slate-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido Dinámico */}
      <div className="mt-8 transition-all duration-500">
        
        {/* SECCIÓN: QUIÉNES SOMOS */}
        {activeTab === "quienes" && (
          <section className="space-y-12 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  Movimiento Global
                </span>
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl tracking-tight">
                  Iglesia de Dios de la Profecía
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  La Iglesia de Dios de la Profecía es un vibrante movimiento cristiano fundamentado en las Escrituras, firme en la fe y decidido en su pasión por las personas. Somos un cuerpo mundial de creyentes, unidos en la adoración, que trabajan hombro a hombro para compartir el amor de Dios.
                </p>
              </div>
              
              {/* Grid de imágenes estilizado */}
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                    alt="Adoración"
                    className="w-full h-56 object-cover rounded-2xl shadow-md transform hover:scale-[1.02] transition duration-300"
                  />
                </div>
                <div className="col-span-4">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
                    alt="Comunidad"
                    className="w-full h-56 object-cover rounded-2xl shadow-md transform hover:scale-[1.02] transition duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Estadísticas Impacto Global */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="text-4xl font-extrabold text-slate-900">133</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Países con presencia</p>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="text-4xl font-extrabold text-slate-900">90%</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Fuera de Norteamérica</p>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="text-4xl font-extrabold text-slate-900">14K+</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Ministros Licenciados</p>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="text-4xl font-extrabold text-slate-900">300</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Salvaciones cada 24h</p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-sm text-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                Ministerios
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Descubre nuestros ministerios</h3>
              <p className="max-w-2xl mx-auto text-slate-600 mt-4">
                Aquí puedes conocer los ministerios que nos permiten servir mejor a la comunidad. Haz clic para ver los detalles y crecer con nosotros.
              </p>
              <Link
                to="/ministerios"
                className="mt-6 inline-flex px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
              >
                Ver ministerios
              </Link>
            </div>
          </section>
        )}

        {/* SECCIÓN: NUESTRA VISIÓN */}
        {activeTab === "vision" && (
          <section className="max-w-3xl mx-auto text-center py-12 space-y-6 animate-fadeIn">
            <div className="inline-flex p-4 bg-primary-50 text-primary-600 rounded-full mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Nuestra Visión</h2>
            <p className="text-xl sm:text-2xl text-slate-700 font-medium italic leading-relaxed px-4">
              "Reconciliar al mundo con Cristo por medio del poder del Espíritu Santo."
            </p>
          </section>
        )}

        {/* SECCIÓN: NUESTRA MISIÓN */}
        {activeTab === "mision" && (
          <section className="space-y-12 animate-fadeIn">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Nuestra Misión</h2>
              <p className="text-slate-600 leading-relaxed">
                La Iglesia de Dios de la Profecía será un movimiento que exalte a Cristo, procure la santidad, esté lleno del Espíritu, esté abierto a todas las naciones, sea hacedor de discípulos, sea establecedor de iglesias, y sienta gran pasión por la unión cristiana.
              </p>
            </div>

            {/* Tarjetas de los Pilares de Misión estilo Grid Editorial */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {misionPilares.map((item) => (
                <div 
                  key={item.title} 
                  className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                      {/* Check icon sutil */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default Nosotros;