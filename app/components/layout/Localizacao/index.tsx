'use client'
import { FaMapLocationDot } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Localizacao() {
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
    <section id="localizacao" className="py-12 scroll-mt-8">
      <div ref={ref} className="container grid grid-cols-2 gap-8 items-center">
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
              Av. Teixeira e Souza, 473 - Vila Nova - Cabo Frio - Rio de Janeiro
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={rightBlockVariants}
          initial="hidden"
          animate={controls}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.8499068011306!2d-42.022656!3d-22.8820023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9704cb6baeedd1%3A0xcb7eb509f4f6441f!2sAv.%20Teixeira%20e%20Souza%2C%20473%20-%20Centro%2C%20Cabo%20Frio%20-%20RJ%2C%2028907-410!5e0!3m2!1spt-BR!2sbr!4v1727381227721!5m2!1spt-BR!2sbr"
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
