import { SelectUnidade } from "@/components/SelectUnidade";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
        <div>
          <Image
            src={"/assets/images/realmais.svg"}
            width={400}
            height={204}
            alt="Logo RealMais"
          />
        </div>
        <p className="text-center text-gray-700 text-base max-w-md">
          Seja bem-vindo(a) à RealMais! Para continuar, selecione a unidade desejada no menu abaixo.
        </p>
        <SelectUnidade/>
      </div>
  );
}
