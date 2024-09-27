'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { BsLightningFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

export function Sobre() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Variantes invertidas para animação
  const textFromRight = {
    initial: { opacity: 0, x: 100 }, // Texto vem da direita
    animate: { opacity: 1, x: 0 }
  };

  const imageFromLeft = {
    initial: { opacity: 0, x: -100 }, // Imagem vem da esquerda
    animate: { opacity: 1, x: 0 }
  };

  return (
    <section id="sobre" className="scroll-mt-16">
      <div ref={ref} className="container grid grid-cols-2 items-center my-20 gap-8">
        {/* Imagem vindo da esquerda */}
        <motion.div
          className="relative h-full shadow-lg"
          variants={imageFromLeft}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={'/assets/images/temp.webp'}
            alt=""
            objectFit="cover"
            fill
            className="rounded-lg"
          />
        </motion.div>

        {/* Texto vindo da direita */}
        <motion.div
          className="flex flex-col logo-color-blue gap-3"
          variants={textFromRight}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold logo-color-blue flex gap-2 items-center">
            Sobre Nós
            <span className="logo-color-orange"><BsLightningFill /></span>
          </h2>
          <p className="text-lg">
            Nossa missão é não apenas fornecer baterias de alta qualidade, mas também garantir que nossos clientes tenham sempre o suporte necessário para manter seus veículos em pleno funcionamento...
          </p>
          <p className="text-lg font-semibold">
            Entre em contato conosco e descubra como podemos ajudar a manter seu veículo sempre em movimento!
          </p>
          <div className="flex mt-2">
            <Link
              className="bg-[#05CE38] rounded-full flex gap-2 text-white py-3 px-6 items-center justify-center font-bold text-lg hover:scale-105 transition shadow hover:shadow-md"
              href={''}
            >
              <FaWhatsapp size={28} />
              Peça sua Bateria
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}