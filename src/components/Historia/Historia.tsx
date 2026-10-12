import { ANOS_EXPERIENCIA } from "@/lib/Constantes";

export default function Historia() {
  return (
    <section id="historia" className="grid grid-cols-1 md:grid-cols-2">

      {/* Izquierda — historia */}
      <div className="bg-[#F4F0EB] px-12 md:px-20 py-24 flex flex-col justify-center">

        {/* Label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-[#C8202E]" />
          <span className="text-[#C8202E] text-xs tracking-[0.25em] uppercase">
            Nuestra historia
          </span>
        </div>

        {/* Título */}
        <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#111010] mb-8">
          Una vida en<br />
          logística.<br />
          <em className="text-[#C8202E]">Una empresa propia.</em>
        </h2>

        {/* Texto */}
        <p className="text-[#666] text-base leading-relaxed font-light mb-6">
          Pasamos décadas trabajando en algunas de las operaciones logísticas más importantes del país.
        </p>
        <p className="text-[#666] text-base leading-relaxed font-light mb-6">
          Esa experiencia nos permitió entender qué hace eficiente a una empresa logística — y qué valoran realmente los clientes:{" "}
          <strong className="text-[#111010] font-medium">
            cumplimiento, comunicación y capacidad de respuesta.
          </strong>
        </p>
        <p className="text-[#666] text-base leading-relaxed font-light mb-6">
          Logística D'Andrea nació para combinar ese conocimiento con el trato cercano que solo una empresa familiar puede brindar.
        </p>
        <p className="text-[#666] text-base leading-relaxed font-light">
          Hoy operamos en todo el AMBA con la responsabilidad directa de un equipo que trabaja con nombre propio.
        </p>

      </div>

      {/* Derecha — valores */}
      <div className="bg-[#111010] px-12 md:px-20 py-24 flex flex-col justify-center gap-12">
        {[
          {
            num: "01",
            title: "Experiencia que se traduce en resultados",
            desc: "Cada proceso que diseñamos está respaldado por décadas de experiencia en operaciones logísticas de gran escala. No vendemos promesas: entregamos resultados.",
          },
          {
            num: "02",
            title: "Trato directo y sin intermediarios",
            desc: "Somos una PYME y lo asumimos con orgullo. Cada cliente tiene contacto directo con nuestro equipo, sin call centers ni derivaciones. Comunicación clara, respuesta rápida y sin fricción.",
          },
          {
            num: "03",
            title: "Compromiso que se cumple",
            desc: `Cuando asumimos un plazo, lo cumplimos. Más de ${ANOS_EXPERIENCIA} años construyendo una reputación basada en responsabilidad y cumplimiento.`,
          },
        ].map((v) => (
          <div key={v.num} className="flex gap-6 items-start">
            <div className="font-serif text-5xl font-bold text-[#C8202E]/50 leading-none flex-shrink-0 w-12">
              {v.num}
            </div>
            <div>
              <div className="w-8 h-px bg-[#C8202E] mb-3" />
              <div className="text-white text-base font-medium mb-2">{v.title}</div>
              <div className="text-[#555] text-sm leading-relaxed font-light">{v.desc}</div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
