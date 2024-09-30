import Link from "next/link";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineContactSupport, MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";


export function Footer() {
  return (
    <footer className="bg-[#000056] py-14 border-t-4 border-[#ff6600]">
      <div className="container grid grid-cols-1 justify-center gap-8 md:gap-0 md:justify-start md:grid-cols-3">
        <div>
          <Link href={''}>
            <Image
              src={'/assets/images/negativa.svg'}
              width={200}
              height={100}
              alt=""
            />
          </Link>
          <p className="text-white">© Rede Real Mais <br /> 2024 Todos os Direitos Reservados</p>
        </div>
        <div className="flex flex-col gap-3 text-white font-bold">
          <div className="text-2xl flex items-center gap-2">
            <FaRegClock size={26} />
            <h2>Horários</h2>
          </div>
          <div className="text-lg">
            <h3>Seg a Sex 8 às 18hs</h3>
            <h3>Sábado 8 às 13hs</h3>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-white font-bold">
          <div className="text-2xl flex items-center gap-2">
            <MdOutlineContactSupport size={26} />
            <h2>Contatos</h2>
          </div>
          <div className="flex flex-col gap-2">
            <Link className="flex gap-2 hover:underline" href={'mailto:rederealmais@bateriasreal.com.br'}>
              <MdOutlineMailOutline size={26}/>
              rederealmais@bateriasreal.com.br
            </Link>
            <Link className="flex gap-2 hover:underline" href={'tel:+5511966033023'}>
              <MdOutlinePhone size={26} />
              (11) 96603-3023
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}