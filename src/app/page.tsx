import Image from "next/image";
import Sobre from "./components/sobre";
import Funcionalidades from "./components/Funcionalidades";
import Modulos from "./components/Modulos";
import TesteSistema from "./components/TesteSistema";


export default function Home() {
  return (
    <main className="bg-zinc-50 font-sans">
      <Sobre />
      <Funcionalidades />
      <Modulos />
      <TesteSistema />
    </main>
  );
}
