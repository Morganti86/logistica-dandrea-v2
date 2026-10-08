"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Empresa", href: "#historia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-14 h-14 transition-all duration-300 ${scrolled
        ? "bg-[#F2F2F2]/98 backdrop-blur-md shadow-sm"
        : "bg-[#F2F2F2]"
        }`}
    >
      <Link href="#inicio">
        <Image
          src="/Company/logo.webp"
          alt="Logística D'Andrea"
          width={140}
          height={34}
          className="h-10 w-auto"
          priority
        />
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="relative text-[black] text-sm tracking-wide hover:text-[#111010] transition-colors duration-200 py-2 px-1 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:w-0 after:h-px after:bg-[#C8202E] after:transition-all after:duration-500 hover:after:w-[70%] hover:after:left-[15%]"
            >
              {l.label}

            </a>

          </li>
        ))}
      </ul>

      <a
        href="#contacto"
        className="hidden md:block bg-[#C8202E] text-white text-sm font-normal tracking-wide px-5 py-2 border border-[#C8202E] rounded-sm hover:bg-[#a8181f] hover:border-[#a8181f] transition-all duration-200">
        
        Contactanos
      </a>

      <button
        className="md:hidden text-[#111010]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          {menuOpen
            ? <path d="M6 18L18 6M6 6l12 12" />
            : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F2F0EB] border-t border-[#E2DED8] py-6 px-14 flex flex-col gap-5 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#666] text-sm tracking-wide hover:text-[#111010] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="hidden md:block bg-[#C8202E] text-white text-sm font-normal tracking-wide px-5 py-2 border border-[#C8202E] rounded-sm hover:bg-[#111010] hover:border-[#111010] transition-all duration-200"
          >
            Contactanos
          </a>
        </div>


      )}
    </nav>
  );
}

