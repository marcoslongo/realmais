'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { Video } from "./Video";
import { HighlightSection } from "./Highlight";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export function Banner() {
  const textFromLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  };

  const imageFromRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <>
      <section className="relative items-center flex h-[600px] overflow-hidden">
        <div className="absolute w-full h-full top-0 z-20 opacity-70 block bg-[#000056]" />
        <div className="container relative z-30 grid grid-cols-2 gap-3 items-center">
          <motion.div className="flex flex-col gap-5" {...textFromLeft}>
            <div>
              <h1 className="font-bold text-5xl text-white">
                Bem-vindo à <span className="logo-color-orange">Rede Baterias Real Mais</span>
                <br />
                <span className="text-xl">Seu Especialista em Baterias Automotivas em Cabo Frio!</span>
              </h1>
            </div>
            <div>
              <p className="text-lg text-white">
                Oferecemos as melhores soluções em baterias automotivas para você. <br />
                Oferecemos uma linha completa de baterias para veículos leves e pesados, garantindo a energia que você precisa para qualquer jornada.
              </p>
            </div>
            <motion.div className="flex" whileHover={{ scale: 1.05 }}>
              <Link
                className="bg-[#05CE38] rounded-full flex gap-2 text-white py-3 px-6 items-center justify-center font-bold text-lg hover:scale-105 transition shadow hover:shadow-md"
                href={''}
              >
                <FaWhatsapp size={28} />
                Peça sua Bateria
              </Link>
            </motion.div>
          </motion.div>
          <motion.div {...imageFromRight}>
            <Image
              width={700}
              height={400}
              alt=""
              src={'/assets/images/banner-image.png'}
            />
          </motion.div>
        </div>
        <Video />
      </section>
      <HighlightSection />
    </>
  );
}
