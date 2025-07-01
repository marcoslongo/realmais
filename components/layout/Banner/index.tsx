'use client';

import { motion } from "framer-motion";
import { Video } from "./Video";
import { HighlightSection } from "./Highlight";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { Slider } from "./Slider";

interface BannerProps {
  titulo: string;
  subtitulo: string;
  texto: string;
  informativo: string;
  whatsapp: string;
}

export function Banner({ titulo, subtitulo, texto, informativo, whatsapp }: BannerProps) {

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
      <section className="relative items-center flex h-[800px] md:h-[600px] overflow-hidden">
        <div className="absolute w-full h-full top-0 z-30 opacity-100 md:opacity-70 block bg-[#000056]" />
        <div className="container relative z-30 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-3 items-center">
          <motion.div className="flex flex-col gap-5" {...textFromLeft}>
            <div>
              <h1 className="font-bold text-3xl md:text-5xl text-center md:text-start text-white">
                <span dangerouslySetInnerHTML={{ __html: titulo }} />
                <br />
                <span className="text-xl">{subtitulo}</span>
              </h1>
            </div>
            <div>
              <div className="md:text-lg text-white text-center md:text-start flex flex-col gap-1">
                <div dangerouslySetInnerHTML={{ __html: texto }} />
                <span className="font-bold text-lg md:text-2xl logo-color-orange">
                  {informativo}
                </span>
              </div>
            </div>
            <motion.div className="flex justify-center md:justify-start" whileHover={{ scale: 1.05 }}>
              <Link
                className="bg-[#05CE38] rounded-full flex gap-2 text-white py-3 px-6 items-center justify-center font-bold text-lg hover:scale-105 transition shadow hover:shadow-md"
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
              >
                <FaWhatsapp size={28} />
                Peça sua Bateria
              </Link>
            </motion.div>
          </motion.div>
          <motion.div {...imageFromRight}>
            <Slider />
          </motion.div>
        </div>
        <Video />
        <div className="absolute w-full h-full top-0 z-10 block bg-[#000056]" />
      </section>
      <HighlightSection />
    </>
  );
}
