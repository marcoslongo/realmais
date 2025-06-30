'use client'
import { FaMapLocationDot } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface LocalizacaoProps{
  endereco: string;
  localMap: string;
}

export function Localizacao({endereco, localMap}:LocalizacaoProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) {
    controls.start("visible");
  }

  const leftBlockVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightBlockVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="localizacao" className="py-12 scroll-mt-64">
      <div ref={ref} className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="flex flex-col justify-center items-center"
          variants={leftBlockVariants}
          initial="hidden"
          animate={controls}
        >
          <span className="logo-color-orange">
            <FaMapLocationDot size={70} />
          </span>
          <div className="logo-color-blue text-center flex flex-col gap-2">
            <h2 className="text-base">Onde Estamos?</h2>
            <h3 className="text-5xl font-bold">Endereço</h3>
            <p className="text-lg">
              {endereco}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={rightBlockVariants}
          initial="hidden"
          animate={controls}
        >
          <iframe
            src={localMap}
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
