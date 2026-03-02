import "../app/globals.css";
import { Raleway } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from "next";
import Script from "next/script";

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
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '906624341776510');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>

      <GoogleTagManager gtmId="GTM-PQ6HG94V" />

      <body className={`${raleway.variable} antialiased relative overflow-x-hidden`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=906624341776510&ev=PageView&noscript=1"
          />
        </noscript>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
