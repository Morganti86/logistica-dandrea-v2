"use client";

import Image from "next/image";
import { ANOS_EXPERIENCIA } from "@/lib/Constantes";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col pt-[68px] relative overflow-hidden bg-[#111010]">

      {/* Imagen de fondo */}
      <Image
        src="/Company/Home.webp"
        alt="Logística D'Andrea"
        sizes="70vw"
        fill
        className="object-cover object-bottom grayscale md:block hidden"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D0D] from-30% to-transparent to-95% md:block hidden"
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 items-center px-8 md:px-14 py-5">

        {/* Izquierda */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#C8202E]" />
            <span className="text-[#C8202E] text-xs tracking-[0.2em] uppercase">
              Logística AMBA · Buenos Aires
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-black leading-none tracking-tight text-white mb-8">
            Tu operación,<br />
            en manos<br />
            <span className="italic text-[#C8202E]">expertas.</span>
          </h1>

          <p className="text-[#666] text-base md:text-lg leading-relaxed font-light max-w-md mb-12">
            Almacenamiento, distribución y seguridad de carga.<br />
            {ANOS_EXPERIENCIA} años construyendo operaciones que no fallan,<br />
            para empresas que no se lo pueden permitir.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#contacto"
              className="bg-[#C8202E] text-white text-sm font-medium tracking-wide px-8 py-4 rounded-sm hover:bg-[#a8181f] transition-colors"
            >
              Solicitá una cotización
            </a>
            <a
              href="#servicios"
              className="text-white/70  text-sm tracking-wide flex items-center gap-2 hover:text-white transition-colors"
            >
              Ver servicios
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div />

      </div>

    </section>
  );
}
