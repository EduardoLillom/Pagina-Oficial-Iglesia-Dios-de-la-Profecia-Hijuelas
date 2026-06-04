export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">IDP Hijuelas</p>
            <h3 className="mt-3 text-2xl font-bold text-white">Iglesia de Dios de la Profecía</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Un espacio de adoración, encuentro y servicio para la comunidad de Hijuelas.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Enlaces</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Inicio</li>
              <li>Nosotros</li>
              <li>Ministerios</li>
              <li>Horarios</li>
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Contacto</p>
            <p className="mt-4 text-sm text-slate-300">Calle Falsa 123, Santiago, Chile</p>
            <p className="mt-2 text-sm text-slate-300">contacto@idiglesia.cl</p>
            <p className="mt-2 text-sm text-slate-300">+56 9 1234 5678</p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 Iglesia de Dios de la Profecía. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};