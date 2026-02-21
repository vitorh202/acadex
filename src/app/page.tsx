import Image from "next/image";
import Sobre from "./components/sobre";
import Funcionalidades from "./components/Funcionalidades";
import Modulos from "./components/Modulos";


export default function Home() {
  return (
    <main className="bg-zinc-50 font-sans">
      <Sobre />
      <Funcionalidades />
      <Modulos />
      <section id="contato" className="min-h-screen">...</section>
    </main>
  );
}
