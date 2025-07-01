'use client';

import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const textFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const smokeVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.4, 0.2],
      rotate: [0, 90, 180],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const smokeVariants2 = {
    animate: {
      scale: [0.9, 1.2, 0.9],
      opacity: [0.1, 0.3, 0.1],
      rotate: [180, 270, 360],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
        delay: 2
      }
    }
  };

  return (
    <>
      <section className="relative items-center flex h-[800px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000056] via-[#000078] to-[#00004a] z-10" />
        
        <div className="absolute inset-0 z-20 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)'
            }}
            variants={smokeVariants}
            animate="animate"
          />
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)'
            }}
            variants={smokeVariants2}
            animate="animate"
          />

          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/30"
              style={{
                left: `${30 + i * 20}%`,
                top: `${30 + i * 15}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}

          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(ellipse 600px 400px at 25% 75%, rgba(255,255,255,0.05) 0%, transparent 50%),
                radial-gradient(ellipse 400px 300px at 75% 25%, rgba(255,255,255,0.03) 0%, transparent 50%)
              `
            }}
          />
        </div>

        <div className="absolute w-full h-full top-0 z-25 bg-gradient-to-r from-[#000056]/70 via-[#000056]/50 to-transparent" />
        
        <motion.div 
          className="container relative z-30 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-3 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex flex-col gap-5" variants={textFromLeft}>
            <div>
              <h1 className="font-bold text-3xl md:text-5xl text-center md:text-start text-white drop-shadow-lg">
                <span dangerouslySetInnerHTML={{ __html: titulo }} />
                <br />
                <span className="text-xl">{subtitulo}</span>
              </h1>
            </div>
            
            <div>
              <div className="md:text-lg text-white text-center md:text-start flex flex-col gap-1 drop-shadow">
                <div dangerouslySetInnerHTML={{ __html: texto }} />
                <span className="font-bold text-lg md:text-2xl logo-color-orange">
                  {informativo}
                </span>
              </div>
            </div>
            
            <motion.div 
              className="flex justify-center md:justify-start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className="bg-[#05CE38] rounded-full flex gap-2 text-white py-3 px-6 items-center justify-center font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#04b832]"
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
              >
                <FaWhatsapp size={28} />
                Peça sua Bateria
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div variants={imageFromRight}>
            <Slider />
          </motion.div>
        </motion.div>
      </section>
      <HighlightSection />
    </>
  );
}