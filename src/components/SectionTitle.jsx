const SectionTitle = ({ title }) => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 font-semibold mb-3">Iglesia de Dios de la Profecía</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-cyan-500" />
    </div>
  );
};

export default SectionTitle;