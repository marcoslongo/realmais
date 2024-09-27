import Link from "next/link";
import Image from "next/image";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";


export function Header() {
  return (
    <header className="border-b border-[#ccc]">
      <div className="logo-bg-orange">
        <div className="container flex justify-between items-center py-3 text-white font-semibold text-lg">
          <Link href={'mailto:rederealmais@bateriasreal.com.br'} className="flex items-center gap-2 hover:underline"><MdOutlineMailOutline size={26}/> rederealmais@bateriasreal.com.br</Link>
          <Link href={''} className="flex items-center gap-2 hover:underline"><MdOutlinePhone size={26}/> (11) 96603-3023</Link>
        </div>
      </div>
      <div className="container flex justify-between items-center py-4">
        <Link href="">
          <Image
            src={'assets/images/realmais.svg'}
            width={170}
            height={80}
            alt="Rede Real+"
          />
        </Link>
        <nav className="flex items-center gap-6">
          <ul className="flex gap-5">
            <ItemMenu href={'#sobre'}>Sobre nós</ItemMenu>
            <ItemMenu href={'#localizacao'}>Localização</ItemMenu>
            <ItemMenu href={'#contato'}>Contato</ItemMenu>
          </ul>
          <Link className="bg-[#05CE38] rounded-full flex gap-2 text-white py-3 px-6 items-center justify-center font-bold text-lg hover:scale-105 transition shadow hover:shadow-md" href={''}>
            <FaWhatsapp size={28}/>
            Peça sua Bateria
          </Link>
        </nav>
      </div>
    </header>
  );
}

interface ItemMenuProps {
  href: string;
  children: React.ReactNode;
}

function ItemMenu({href, children}:ItemMenuProps){
  return(
    <li><Link className="text-lg font-semibold hover:logo-color-orange transition" href={href}>{children}</Link></li>
  );
}