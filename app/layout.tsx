import "../app/globals.css";
import { Raleway } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from "next";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ["100", "300", "400", "700", "900"],
  display: 'swap',
  variable: '--font-raleway'
});

export const metadata: Metadata = {
  title: "Rede RealMais | Baterias Automotivas",
  description: "Oferecemos uma linha completa de baterias para veículos leves e pesados, garantindo a energia que você precisa para qualquer jornada.",
  keywords: ["baterias", "baterias automotivas", "Rede RealMais", "autopeças", "baterias para carros"],
  authors: [{ name: "Rede RealMais" }],
  creator: "Rede RealMais",
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: "Rede RealMais | Baterias Automotivas",
    description: "Oferecemos uma linha completa de baterias para veículos leves e pesados, garantindo a energia que você precisa para qualquer jornada.",
    url: "https://www.rederealmais.com.br",
    siteName: "Rede RealMais",
    images: [
      {
        url: "https://www.rederealmais.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rede RealMais - Baterias Automotivas"
      }
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth overflow-x-hidden">
      <GoogleTagManager gtmId="GTM-PQ6HG94V" />
      <body className={`${raleway.variable} antialiased relative overflow-x-hidden`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
