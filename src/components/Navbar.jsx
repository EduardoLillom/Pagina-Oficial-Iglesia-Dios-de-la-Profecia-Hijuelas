import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 bg-blue-900/90 backdrop-blur-md px-8 py-3 rounded-full flex items-center justify-center gap-6 z-50 shadow-2xl border border-yellow-600/30">
      
      <Link to="/" className="text-white text-sm font-medium uppercase hover:text-yellow-500 transition-colors leading-none">
        Inicio
      </Link>

      {/* 
          CLAVE: Añadimos "pb-8" y "-mb-8" para crear un puente invisible.
          Esto hace que el área reactiva al mouse se extienda hacia abajo 
          sin mover visualmente la barra.
      */}
      <div 
        className="relative flex items-center h-full pb-8 -mb-8" 
        onMouseEnter={() => setIsNosotrosOpen(true)}
        onMouseLeave={() => setIsNosotrosOpen(false)}
      >
        <button className="text-white text-sm font-medium uppercase hover:text-yellow-500 transition-colors flex items-center gap-1 leading-none outline-none cursor-pointer">
          Nosotros
          <svg className={`w-4 h-4 transition-transform ${isNosotrosOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* El Menú Flotante */}
        {isNosotrosOpen && (
          <div className="absolute top-[80%] left-0 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
            <Link 
              to="/nosotros/mision" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
              onClick={() => setIsNosotrosOpen(false)}
            >
              Nuestra Misión
            </Link>
            <Link 
              to="/nosotros/quienes" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
              onClick={() => setIsNosotrosOpen(false)}
            >
              Quiénes somos
            </Link>
            <Link 
              to="/ministerios" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
              onClick={() => setIsNosotrosOpen(false)}
            >
              Ministerios
            </Link>
          </div>
        )}
      </div>

      <Link to="/horarios" className="text-white text-sm font-medium uppercase hover:text-yellow-500 transition-colors leading-none">
        Horarios
      </Link>
      
      <Link to="/contacto" className="text-white text-sm font-medium uppercase hover:text-yellow-500 transition-colors leading-none">
        Contacto
      </Link>

      <Link to="/construccion" className="text-white text-sm font-medium uppercase hover:text-yellow-500 transition-colors leading-none">
        Construcción
      </Link>

      <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm leading-none flex items-center">
        ¡Ver en Vivo!
      </a>
    </nav>
  );
};