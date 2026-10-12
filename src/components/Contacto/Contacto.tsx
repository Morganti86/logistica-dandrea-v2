"use client";

import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-[#111010] px-8 md:px-14 py-24">

      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-[#C8202E]" />
          <span className="text-[#C8202E] text-xs tracking-[0.25em] uppercase">Contacto</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight tracking-tight text-white max-w-xl">
          Contanos sobre<br />
          tu <em className="italic text-[#C8202E]">operación.</em>
        </h2>
        <p className="text-[#555] text-base font-light mt-4">
          Respondemos en menos de 24 horas hábiles. Sin bots, sin formularios perdidos.
        </p>
      </div>

      {/* Grid formulario + info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-16">

        {/* Formulario */}
        <div className="flex flex-col justify-between">
          {sent ? (
            <div className="flex flex-col items-start gap-4 py-12">
              <div className="w-12 h-12 rounded-full bg-[#C8202E]/10 flex items-center justify-center">
                <svg width="22" height="22" fill="none" stroke="#C8202E" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">¡Mensaje enviado!</h3>
              <p className="text-[#555] text-sm font-light">Te respondemos en menos de 24hs hábiles.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[#555] text-xs tracking-[0.2em] uppercase mb-2">Nombre completo</label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full bg-white/4 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-[#444] outline-none focus:border-[#C8202E] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#555] text-xs tracking-[0.2em] uppercase mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Tu@empresa.com"
                  required
                  className="w-full bg-white/4 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-[#444] outline-none focus:border-[#C8202E] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#555] text-xs tracking-[0.2em] uppercase mb-2">Teléfono</label>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="11-XXXX-XXXX"
                  className="w-full bg-white/4 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-[#444] outline-none focus:border-[#C8202E] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#555] text-xs tracking-[0.2em] uppercase mb-2">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Contanos sobre tu operación, qué necesitás mover, en qué zona..."
                  required
                  rows={5}
                  className="w-full bg-white/4 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-[#444] outline-none focus:border-[#C8202E] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#C8202E] text-white text-sm font-medium tracking-wide py-4 rounded-sm hover:bg-[#a8181f] transition-colors mt-2"
              >
                Enviar mensaje
              </button>
              {/* <p className="text-[#444] text-xs text-center">
                Respondemos en menos de 24hs hábiles · Sin bots
              </p> */}
            </form>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between">
          {[
            {
              label: "Teléfono",
              value: "11-6397-8564",
              href: "tel:+541163978564",
              sub: null,
            },
            {
              label: "Email",
              emails: [
                {
                  value: "contacto@logisticadandrea.com.ar",
                  href: "mailto:contacto@logisticadandrea.com.ar?cc=beatriz@logisticadandrea.com.ar",
                },
                {
                  value: "beatriz@logisticadandrea.com.ar",
                  href: "mailto:beatriz@logisticadandrea.com.ar?cc=contacto@logisticadandrea.com.ar",
                },
              ],
            },
            {
              label: "Horario de atención",
              value: "Lunes a viernes · 8:00 — 16:00 hs",
              sub: null,
            },
            {
              label: "Dirección",
              value: "Domingo F. Sarmiento 1719, Villa San Andrés",
              sub: "Buenos Aires, Argentina",
            },
          ].map((item) => (
            <div key={item.label} className="py-6 border-b border-white/7 flex gap-5 items-start">
              <div className="w-2 h-2 rounded-full bg-[#C8202E] flex-shrink-0 mt-1.5" />
              <div>
                <div className="text-[#444] text-xs tracking-[0.2em] uppercase mb-1">{item.label}</div>
                <div className="text-[#ccc] text-sm font-light">
                  {item.emails ? (
                    item.emails.map((email) => (
                      <div key={email.value}>
                        <a
                          href={email.href}
                          className="hover:text-white transition-colors"
                        >
                          {email.value}
                        </a>
                      </div>
                    ))
                  ) : item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
                {item.sub && <div className="text-[#555] text-xs mt-0.5">{item.sub}</div>}
              </div>
            </div>
          ))}

          {/* WhatsApp */}
          <a
            href="https://wa.me/5491163978564?text=Hola%2C+quiero+consultar+sobre+sus+servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 bg-[#25D366] flex items-center gap-3 px-6 py-4 rounded-sm hover:opacity-90 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-white text-sm font-medium tracking-wide">
              Escribinos por WhatsApp
            </span>
          </a>
        </div>
      </div>

      {/* Mapa */}
      <div className="border border-white/8 rounded-sm overflow-hidden">
        <div className="bg-white/4 px-6 py-3 border-b border-white/8 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#C8202E]" />
          <span className="text-[#555] text-xs tracking-[0.15em] uppercase">
            Domingo F. Sarmiento 1719, B1651 Villa San Andrés, Provincia de Buenos Aires
          </span>
        </div>
        <iframe
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.6759242865082!2d-58.539209725150464!3d-34.53643775394658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0b6c6674753%3A0xf144785a4f0bf0c7!2sV%C3%A9lez%20S%C3%A1rsfield%205780%2C%20Munro%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2suk!4v1703079708825!5m2!1ses-419!2suk"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19372.730737662314!2d-58.544873286730976!3d-34.55511941837264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f8!3m3!1m2!1s0x95bcb747cce37999%3A0xac41d9547d248f4c!2sDomingo%20F.%20Sarmiento%201719%2C%20B1651%20Villa%20San%20Andr%C3%A9s%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2snl!4v1790766785338!5m2!1ses!2snl"
          width="100%"
          height="320"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Logística D'Andrea"
        />
      </div>

    </section>
  );
}
