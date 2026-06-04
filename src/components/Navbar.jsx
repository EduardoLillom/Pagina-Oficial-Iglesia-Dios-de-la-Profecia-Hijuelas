import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/ministerios', label: 'Ministerios' },
  { to: '/galeria', label: 'Galería' },
  { to: '/horarios', label: 'Horarios' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/construccion', label: 'Construcción' },
];

export const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/10 bg-white/85 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-600 text-lg font-extrabold text-white shadow-lg shadow-cyan-500/20">
            IDP
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">Iglesia IDP Hijuelas</p>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Fe, unidad y santidad</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition-colors ${pathname === item.to ? 'text-slate-900' : 'hover:text-cyan-600'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-cyan-600 hover:text-cyan-600 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className="text-2xl leading-none">
              {menuOpen ? '✕' : '☰'}
            </span>
          </button>

          <Link
            to="/contacto"
            className="hidden rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500 md:inline-flex"
          >
            Contáctanos
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-200/10 bg-white/95 px-4 py-4 shadow-sm backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-2xl px-4 py-3 transition ${pathname === item.to ? 'bg-cyan-50 text-cyan-700' : 'hover:bg-slate-100 hover:text-slate-900'}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500"
              onClick={() => setMenuOpen(false)}
            >
              Contáctanos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};