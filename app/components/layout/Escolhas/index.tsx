'use client'; 
import { ReactElement } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeadset, FaLeaf, FaTruck } from "react-icons/fa6";

export function Escolhas() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) {
    controls.start("visible");
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-11">
      <h2 className="text-5xl text-center font-bold logo-color-blue">Por que nos escolher?</h2>
      <motion.div
        className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        ref={ref} 
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <CardEscolha
          title={"Atendimento"}
          icon={<FaHeadset size={50} />}
          text={
            "Nossa equipe de especialistas está sempre pronta para oferecer orientações precisas e atendimento rápido, garantindo que você receba exatamente o que precisa."
          }
          variants={itemVariants}
        />
        <CardEscolha
          title={"Qualidade Garantida"}
          icon={<FaCheckCircle size={50} />}
          text={
            "Trabalhamos com baterias de alta durabilidade e desempenho, oferecendo as melhores opções para garantir a performance ideal do seu veículo."
          }
          variants={itemVariants}
        />
        <CardEscolha
          title={"Entrega Rápida"}
          icon={<FaTruck size={50} />}
          text={
            "Com nossa logística eficiente, você pode contar com entregas rápidas e seguras, evitando atrasos que possam comprometer sua rotina."
          }
          variants={itemVariants}
        />
        <CardEscolha
          title={"Soluções Sustentáveis"}
          icon={<FaLeaf size={50} />}
          text={
            "Comprometidos com o meio ambiente, oferecemos soluções que respeitam o ciclo de vida das baterias, promovendo a reciclagem responsável."
          }
          variants={itemVariants}
        />
      </motion.div>
    </section>
  );
}

interface CardEscolhaProps {
  title: string;
  icon: ReactElement;
  text: string;
  variants: Variants; 
}

function CardEscolha({ title, icon, text, variants }: CardEscolhaProps) {
  return (
    <motion.div
      className="flex flex-col gap-2 text-center items-center logo-color-blue"
      variants={variants}
    >
      <div className="logo-color-orange">{icon}</div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}
