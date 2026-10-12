import Image from "next/image";

const servicios = [
  {
    num: "01",
    label: "Almacenamiento",
    title: "Tu mercadería\nen depósito seguro",
    image: "/Services/Almacenamiento.webp",
    tags: ["Recepción y control de mercadería", "Etiquetado", "Depósito monitoreado", "Control de stock", "Palletizado y enfilmado", "Fraccionamiento"],
  },
  {
    num: "02",
    label: "Distribución",
    title: "Entregas donde\nlo necesitás",
    image: "/Services/Distribucion.webp",
    tags: ["Picking y preparación", "Puerta a puerta", "Interplantas", "Contenedores", "Gestión de devoluciones"],
  },
  {
    num: "03",
    label: "Seguridad",
    title: "Tu carga\nsiempre protegida",
    image: "/Services/Seguridad.webp",
    tags: ["Monitoreo satelital 24hs", "Custodia y escolta", "Seguro de carga", "Seguridad física", "Control en tránsito"],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-[#111010] px-8 md:px-14 py-24">

      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-16 pb-10 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-[#C8202E]" />
            <span className="text-[#C8202E] text-xs tracking-[0.25em] uppercase">Servicios</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
            Soluciones logísticas<br />
            <em className="italic text-[#C8202E]">de punta a punta.</em>
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {servicios.map((s) => (
          <div
            key={s.num}
            className="group relative overflow-hidden cursor-default"
          >
            {/* Imagen de fondo */}
            <Image
              src={s.image}
              alt={s.label}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center grayscale brightness-50"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#111010]/60 group-hover:bg-[#111010]/50 transition-colors duration-300" />

            {/* Contenido */}
            <div className="relative z-10 p-12">

              {/* Número decorativo */}
              <div className="font-serif text-8xl font-black text-white/10 group-hover:text-[#C8202E]/50 absolute top-6 right-8 leading-none transition-colors duration-300 select-none">
                {s.num}
              </div>

              {/* Label */}
              <div className="text-[#C8202E] text-sm tracking-[0.2em] uppercase mb-6">
                {s.label}
              </div>

              {/* Título */}
              <h3 className="font-serif text-2xl font-bold leading-tight mb-8 text-white whitespace-pre-line">
                {s.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-white/60 px-2.5 py-1 border border-white/20 rounded-sm group-hover:border-white/40 group-hover:text-white/90 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
