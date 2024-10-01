'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`border-b border-[#ccc] w-full z-50 bg-white transition-all ${isScrolled ? 'fixed' : 'relative'}`}>
      <div className="logo-bg-orange">
        <div className={`container flex-col gap-2 md:gap-0 md:flex-row justify-between md:items-center py-3 text-white font-semibold md:text-lg ${isScrolled ? 'hidden' : 'flex'}`}>
          <Link href="mailto:rederealmais@bateriasreal.com.br" className="flex items-center gap-2 hover:underline">
            <MdOutlineMailOutline size={26} /> rederealmais@bateriasreal.com.br
          </Link>
          <Link href={'tel:11966033023'} className="flex items-center gap-2 hover:underline">
            <MdOutlinePhone size={26} /> (11) 96603-3023
          </Link>
        </div>
      </div>
      <div className="container flex justify-between items-center py-4">
        <Link href="">
          <Image src="assets/images/RealMais.svg" width={170} height={80} alt="Rede Real+" />
        </Link>
        <MenuDesktop />
        <MenuMobile />
      </div>
    </header>
  );
}
