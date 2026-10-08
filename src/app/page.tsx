import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Metricas from "@/components/Metricas/Metricas";
import Historia from "@/components/Historia/Historia";
import Servicios from "@/components/Servicios/Servicios";
import Clientes from "@/components/Clientes/Clientes";
import Contacto from "@/components/Contacto/Contacto";
import Footer from "@/components/Footer/Footer";
import MouseFollower from "@/components/UI/MouseFollower";
import Separador from "@/components/Separador/Separador";
import { ANOS_EXPERIENCIA } from "@/lib/Constantes";


export default function Home() {
  return (
    <main>
      <MouseFollower />
      <Navbar />
      <Hero />
      <Metricas />
      <Separador texto={`${ANOS_EXPERIENCIA} años construyendo confianza`} />
      <Historia />
      <Separador texto="Tu operación no para, nosotros tampoco" /> 
      <Servicios />
      <Separador texto="Empresas reales, resultados reales" />
      <Clientes />
      <Separador texto="Hablemos de tu operación" />
      <Contacto />
      <Footer />
    </main>
  );
}