import { Button } from "@/components/ui/button";
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaWhatsapp } from "react-icons/fa6";

interface MenuDesktopProps {
  whatsapp: string;
}

export function MenuMobile({ whatsapp }: MenuDesktopProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex md:hidden" asChild>
        <Button className="logo-color-blue border-none pr-0" variant="outline">
          <RiMenu3Line size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="grid gap-4 py-4">
          <nav className="flex flex-col gap-6">
            <ul className="flex flex-col gap-5">
              <ItemMenu href="#sobre" onClick={handleItemClick}>
                Sobre nós
              </ItemMenu>
              <ItemMenu href="#localizacao" onClick={handleItemClick}>
                Localização
              </ItemMenu>
              <ItemMenu href="#contato" onClick={handleItemClick}>
                Contato
              </ItemMenu>
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
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface ItemMenuProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function ItemMenu({ href, children, onClick }: ItemMenuProps) {
  return (
    <li>
      <Link
        className="text-lg font-semibold hover:logo-color-orange transition"
        href={href}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}
