import { ANOS_EXPERIENCIA } from "@/lib/Constantes";

export default function Metricas() {
  return (
    <div className="bg-[#111010] border-t border-white/6 grid grid-cols-2 md:grid-cols-4">
      {[
        { num: ANOS_EXPERIENCIA, sup: "+", label: "Años de experiencia" },
        { num: "10", sup: "k+", label: "Envíos completados" },
        { num: "10", sup: "+", label: "Clientes activos" },
        { num: "24", sup: "hs", label: "Tiempo de respuesta" },
      ].map((s, i) => (
        <div
          key={i}
          className="px-10 py-7 border-r border-white/6 last:border-r-0 hover:bg-white/3 transition-colors"
        >
          <div className="font-serif text-4xl font-bold text-white leading-none">
            {s.num}
            <sup className="text-base text-[#C8202E]">{s.sup}</sup>
          </div>
          <div className="text-[#444] text-xs uppercase tracking-wide mt-2">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
