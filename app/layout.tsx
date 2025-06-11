import "../app/globals.css";
import { Raleway } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from '@next/third-parties/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ["100", "300", "400", "700", "900"],
  display: 'swap',
  variable: '--font-raleway'
});

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
