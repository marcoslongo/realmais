import Image from "next/image";

export function HighlightSection() {
  return (
    <div className="bg-[#ff6600] w-full py-4 overflow-x-hidden">
      <div className="animate-marquee flex gap-10 items-center">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="flex gap-2 items-center text-white flex-shrink-0"
          >
            <Image
              src={'/assets/images/bateria.svg'}
              width={30}
              height={30}
              alt="Ícone de bateria"
            />
            <p className="font-semibold text-lg whitespace-nowrap">
              Sua bateria em 50 minutos!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
