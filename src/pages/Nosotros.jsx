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
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-center">
          <div className="space-y-6">
            <SectionTitle title="Sobre Nosotros" />
            <p className="text-slate-600 text-lg leading-relaxed">
              Somos una familia de fe que busca glorificar a Cristo, vivir en espíritu de santidad y extender el evangelio a Hijuelas y más allá.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-500 font-semibold">Historia</p>
                <p className="mt-3 text-slate-600 leading-relaxed">Más de un siglo de ministerio, tradición y un testimonio vivo en la región.</p>
              </div>
              <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-500 font-semibold">Unidad</p>
                <p className="mt-3 text-slate-600 leading-relaxed">Unidos en la adoración, en el servicio y en el llamado a la renovación espiritual.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/ministerios" className="rounded-full border border-cyan-500 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-500/10">
                Ver ministerios
              </Link>
              <Link to="/contacto" className="rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500">
                Contáctanos
              </Link>
            </div>
          </div>

          <div className="rounded-4xl overflow-hidden shadow-2xl ring-1 ring-cyan-100/30">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
              alt="Iglesia reunida"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-4xl bg-white border border-slate-200 p-6 shadow-xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-500 font-semibold">Explora</p>
            <h2 className="text-3xl font-bold text-slate-900">Nuestra historia, visión y misión</h2>
            <p className="max-w-3xl text-slate-600 leading-relaxed">
              Navega por nuestras secciones para comprender mejor quiénes somos, hacia dónde vamos y cómo servimos a la comunidad.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full bg-linear-to-r from-cyan-100 to-sky-100 p-1 shadow-lg">
              {tabs.map((tabItem) => (
                <button
                  key={tabItem.id}
                  onClick={() => setActiveTab(tabItem.id)}
                  className={`px-5 py-3 rounded-full text-sm font-semibold transition ${
                    activeTab === tabItem.id ? 'bg-slate-950 text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tabItem.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeTab === "quienes" && (
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-4xl bg-white p-10 shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Quiénes somos</h3>
              <p className="text-slate-600 leading-relaxed">
                La Iglesia de Dios de la Profecía es un movimiento mundial que busca vivir con excelencia espiritual, proclamando el evangelio y sirviendo con amor a toda la comunidad.
              </p>
              <ul className="mt-8 space-y-4 text-slate-600">
                <li>• Ministerio centrado en Cristo</li>
                <li>• Comunión entre las generaciones</li>
                <li>• Cultura de adoración y oración</li>
              </ul>
            </div>
            <div className="rounded-4xl overflow-hidden shadow-xl bg-linear-to-br from-white via-cyan-50 to-slate-100 border border-cyan-100">
              <img
                src="https://images.unsplash.com/photo-1508851874028-7b427d24d24f?auto=format&fit=crop&w=1200&q=80"
                alt="Grupos de oración"
                className="h-96 w-full object-cover"
              />
            </div>
          </div>
        )}

        {activeTab === "vision" && (
          <div className="rounded-4xl bg-white p-10 shadow-xl border border-slate-200">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nuestra visión</h3>
                <p className="text-slate-600 leading-relaxed">
                  Reconciliar al mundo con Cristo por medio del poder del Espíritu Santo, con una iglesia sana y comprometida con la Gran Comisión.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">Impacto</p>
                    <p className="mt-3 text-slate-600">Un movimiento que transforma familias y comunidades.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">Unidad</p>
                    <p className="mt-3 text-slate-600">Una red de iglesias conectadas en propósito y amor.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-4xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                  alt="Visión compartida"
                  className="h-96 w-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "mision" && (
          <div className="space-y-10">
            <div className="rounded-4xl bg-white p-10 shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Nuestra misión</h3>
              <p className="text-slate-600 leading-relaxed">
                Exaltar a Cristo, procurar la santidad, ser llenos del Espíritu, abrirnos a todas las naciones, hacer discípulos, plantar iglesias y vivir la unión cristiana.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {misionPilares.map((item) => (
                <div key={item.title} className="rounded-4xl bg-linear-to-br from-white via-cyan-50 to-slate-100 border border-cyan-100 p-6 shadow-xl">
                  <p className="text-lg font-semibold text-slate-900 mb-3">{item.title}</p>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Nosotros;