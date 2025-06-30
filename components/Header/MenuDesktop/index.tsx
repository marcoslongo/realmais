import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

interface MenuDesktopProps {
  whatsapp: string;
}

export function MenuDesktop({ whatsapp }: MenuDesktopProps) {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <ul className="flex gap-5">
        <ItemMenu href={'#sobre'}>Sobre nós</ItemMenu>
        <ItemMenu href={'#localizacao'}>Localização</ItemMenu>
        <ItemMenu href={'#contato'}>Contato</ItemMenu>
      </ul>
      <Link
        className="bg-[#05CE38] rounded-full flex gap-2 text-white py-3 px-6 items-center justify-center font-bold text-lg hover:scale-105 transition shadow hover:shadow-md"
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
      >
        <FaWhatsapp size={28} />
        Peça sua Bateria
      </Link>
    </nav>
  );
}

interface ItemMenuProps {
  href: string;
  children: React.ReactNode;
}

function ItemMenu({ href, children }: ItemMenuProps) {
  return (
    <li><Link className="text-lg font-semibold hover:logo-color-orange transition" href={href}>{children}</Link></li>
  );
}