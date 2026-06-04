import { Hero } from '../components/Hero';
import { services } from '../data/churchData';

const Home = () => {
  return (
    <>
      <Hero />
      <section className="py-20 px-[10%] max-w-7xl mx-auto" id="nosotros">
        <h2 className="text-center font-serif text-4xl text-blue-900 mb-12 relative after:content-[''] after:w-16 after:h-1 after:bg-red-600 after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
          Nuestros Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className={`bg-white p-10 rounded-lg shadow-md border-t-4 ${s.accent || 'border-blue-900'} hover:-translate-y-2 transition-transform`}>
              <h3 className="font-serif text-2xl text-blue-900 mb-4">{s.title}</h3>
              <p className="font-bold">{s.time}</p>
              <p className="text-gray-600 mt-2">{s.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;