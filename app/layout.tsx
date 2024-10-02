import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Raleway } from 'next/font/google';
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ["100", "300", "400", "700", "900"],
  display: 'swap',
  variable: '--font-raleway'
});

export const metadata: Metadata = {
  title: "Rede RealMais",
  description: "Oferecemos uma linha completa de baterias para veículos leves e pesados, garantindo a energia que você precisa para qualquer jornada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${raleway.variable} antialiased relative overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer/>
        <WhatsAppButton/>
        <Toaster />
      </body>
    </html>
  );
}
