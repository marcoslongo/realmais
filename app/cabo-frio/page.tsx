// src/app/page.tsx ou onde estiver o componente Home

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Banner } from "@/components/layout/Banner";
import { Contato } from "@/components/layout/Contato/Index";
import { Escolhas } from "@/components/layout/Escolhas";
import { Localizacao } from "@/components/layout/Localizacao";
import { Sobre } from "@/components/layout/Sobre";
import siteData from "@/data/cabofrio";

export default function Home() {
  return (
    <>
      <Header
        telefone={siteData.Header.telefone}
        email={siteData.Header.email}
        whatsapp={siteData.Header.whatsapp}
      />
      <Banner />
      <Sobre />
      <Escolhas />
      <Localizacao />
      <Contato />
      <Footer />
    </>
  );
}
