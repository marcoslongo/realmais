import { Banner } from "./components/layout/Banner";
import { Contato } from "./components/layout/Contato/Index";
import { Escolhas } from "./components/layout/Escolhas";
import { Localizacao } from "./components/layout/Localizacao";
import { Sobre } from "./components/layout/Sobre";

export default function Home() {
  return (
    <div>
      <Banner />
      <Sobre />
      <Escolhas />
      <Localizacao />
      <Contato />
    </div>
  );
}
