import Image from "next/image";

const clientes = [
  { name: "Graco", src: "/Clients/Graco.webp" },
  { name: "Zecat", src: "/Clients/Zecat.webp" },
  { name: "Cobb", src: "/Clients/Cobb.webp" },
  { name: "Difapro", src: "/Clients/Difapro.webp" },
  { name: "Gematec", src: "/Clients/Gematec.webp" },
  { name: "Locksley", src: "/Clients/Locksley.webp" },
  { name: "Sisfriends", src: "/Clients/Sisfriends.webp" },
  { name: "Wayna", src: "/Clients/Wayna.webp" },
  { name: "Ces", src: "/Clients/Ces.webp" },
  { name: "Juegos y Juguetes", src: "/Clients/Juegosyjuguetes.webp" },
];

export default function Clientes() {
  return (
    <section id="clientes" className="bg-[#F4F0EB] px-8 md:px-14 py-24">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 pb-10 border-b border-[#E2DED8]">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-[#C8202E]" />
            <span className="text-[#C8202E] text-xs tracking-[0.25em] uppercase">Clientes</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Empresas que<br />
            <em className="italic text-[#C8202E]">confían</em> en nosotros.
          </h2>
        </div>
      </div>

      {/* Grid de logos */}
      <div className="grid grid-cols-2 md:grid-cols-5 border border-[#E2DED8]">
        {clientes.map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-center p-10 border-r border-b border-[#E2DED8] hover:bg-white transition-colors duration-200 group"
          >
            <Image
              src={c.src}
              alt={c.name}
              width={120}
              height={40}
              className="max-h-8 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-150 transition-all duration-500"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
