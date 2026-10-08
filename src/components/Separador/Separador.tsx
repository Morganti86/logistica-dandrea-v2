export default function Separador({ texto }: { texto: string }) {
  return (
    <div className="bg-[#C8202E] px-14 py-3.5 flex items-center gap-5">
      <span className="text-white/50 text-sm">—</span>
      <span className="text-white/90 text-xs tracking-[0.15em] uppercase">
        {texto}
      </span>
    </div>
  );
}