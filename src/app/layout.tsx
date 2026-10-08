import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ANOS_EXPERIENCIA } from "@/lib/Constantes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Logística D'Andrea | Almacenamiento y Distribución AMBA",
  description: `Empresa familiar con ${ANOS_EXPERIENCIA} años de experiencia en logística integral para el AMBA. Almacenamiento, distribución y seguridad de carga.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}