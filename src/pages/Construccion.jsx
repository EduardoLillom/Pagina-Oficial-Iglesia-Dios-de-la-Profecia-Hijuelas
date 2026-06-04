import SectionTitle from "../components/SectionTitle";

const Construccion = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
      alt: "Nueva iglesia en construcción exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1519098901909-b1553a8d5f40?auto=format&fit=crop&w=1400&q=80",
      alt: "Equipo trabajando en obra de construcción",
    },
    {
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      alt: "Maqueta de construcción de iglesia",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-slate-100 shadow-sm rounded-3xl p-10">
          <div className="text-center mb-10">
            <SectionTitle title="Nueva iglesia en construcción" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              Descubre el avance de nuestra nueva casa de reunión. Aquí mostramos imágenes de ejemplo para inspirarte mientras crecemos juntos.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-3xl shadow-lg bg-slate-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-semibold text-slate-900">Imagen {index + 1}</h3>
                  <p className="text-slate-500 text-sm mt-2">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Construccion;
