import Link from "next/link";
import Image from "next/image";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";

export function Header() {
  return (
    <>
      <header className="border-b border-[#ccc]">
        <div className="logo-bg-orange">
          <div className="container flex justify-between items-center py-3 text-white font-semibold text-lg">
            <Link href={'mailto:rederealmais@bateriasreal.com.br'} className="flex items-center gap-2 hover:underline"><MdOutlineMailOutline size={26} /> rederealmais@bateriasreal.com.br</Link>
            <Link href={''} className="flex items-center gap-2 hover:underline"><MdOutlinePhone size={26} /> (11) 96603-3023</Link>
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
          <MenuDesktop />          
          <MenuMobile />
        </div>        
      </header>
    </>
  );
}