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
      <Banner
        titulo={siteData.Banner.titulo}
        subtitulo={siteData.Banner.subtitulo}
        texto={siteData.Banner.texto}
        informativo={siteData.Banner.informativo}
      />
      <Sobre
        texto={siteData.Sobre.texto}
        whatsapp={siteData.Sobre.whatsapp}
      />
      <Escolhas />
      <Localizacao
        endereco={siteData.Localizacao.endereco}
        localMap={siteData.Localizacao.localMap}
      />
      <Contato />
      <Footer />
    </>
  );
}
