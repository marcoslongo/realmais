'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Form } from "./Form";

export function Contato() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  if (inView) {
    controls.start("visible");
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <section
      id="contato"
      ref={ref}
      className="relative h-[600px] overflow-hidden flex flex-col justify-center scroll-mt-64"
    >
      <div className="absolute w-full h-full top-0 z-20 opacity-100 md:opacity-70 block bg-[#000056]"></div>

      <motion.div
        className="container text-center relative z-30 mb-8 w-full md:w-1/2 flex flex-col gap-4"
        variants={titleVariants}
        initial="hidden"
        animate={controls}
      >
        <h2 className="text-5xl text-white font-bold">Contato</h2>
        <p className="text-white">
          Não fique na mão! Ligue agora para a Rede RealMais e tenha o melhor
          serviço e atendimento.
        </p>
      </motion.div>

      <motion.div
        className="container relative z-30 flex items-center justify-center"
        variants={formVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="w-full md:w-1/2">
          <Form />
        </div>
      </motion.div>
      <div className="absolute w-full h-full top-0 z-10 block bg-[#000056]" />
    </section>
  );
}
