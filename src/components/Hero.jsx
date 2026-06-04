import { Link } from "react-router-dom";

export const Hero = () => (
  <header className="relative min-h-screen w-full bg-[linear-gradient(rgba(0,51,102,0.7),rgba(26,18,5,0.8)),url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1500')] bg-center bg-cover flex flex-col justify-center items-center text-center text-white px-4">
    
    {/* 
       Añadimos un margen superior solo al contenido interno 
       para que el texto baje un poco y no lo tape la Navbar flotante.
    */}
    <div className="mt-20">
      <p className="tracking-[3px] text-yellow-500 uppercase font-bold mb-4">
        Iglesia de Dios de la Profecía
      </p>
      <h1 className="font-serif text-4xl md:text-7xl mb-4">
        Bienvenidos a Casa
      </h1>
      <p className="text-lg max-w-xl mb-8 opacity-90">
        Proclamando a Cristo, Santidad y Unidad en nuestra comunidad de Hijuelas.
      </p>
      <Link to="/nosotros/mision" className="bg-yellow-600 text-slate-900 px-8 py-4 rounded font-extrabold uppercase hover:bg-white hover:-translate-y-1 transition-all">
        Conoce nuestra misión
      </Link>
    </div>
  </header>
);