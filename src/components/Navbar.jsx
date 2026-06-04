import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/ministerios', label: 'Ministerios' },
  { to: '/horarios', label: 'Horarios' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/construccion', label: 'Construcción' },
];

export const Navbar = () => {
  const { pathname } = useLocation();

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

        <Link
          to="/contacto"
          className="rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500"
        >
          Contáctanos
        </Link>
      </div>
    </header>
  );
};