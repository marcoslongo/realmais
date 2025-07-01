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
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const smokeVariants = {
    animate: {
      x: [-20, 20, -20],
      y: [-30, -60, -30],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 0.8, 1],
      opacity: [0.3, 0.6, 0.2, 0.4],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const smokeVariants2 = {
    animate: {
      x: [30, -30, 30],
      y: [-20, -80, -20],
      rotate: [360, 180, 0],
      scale: [0.8, 1.3, 0.9, 1.1],
      opacity: [0.2, 0.5, 0.1, 0.3],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    }
  };

  const smokeVariants3 = {
    animate: {
      x: [-10, 40, -10],
      y: [-40, -70, -40],
      rotate: [0, 270, 360],
      scale: [1.1, 0.9, 1.4, 1],
      opacity: [0.4, 0.2, 0.6, 0.3],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 5
      }
    }
  };

  const floatingParticles = {
    animate: {
      y: [-100, -20, -100],
      x: [-10, 10, -10],
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <section className="relative items-center flex h-[800px] md:h-[600px] overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#000056] via-[#000078] to-[#00004a] z-10" />
        
        {/* Animated smoke effects */}
        <div className="absolute inset-0 z-20 overflow-hidden">
          {/* Large smoke clouds */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(200,200,255,0.05) 50%, transparent 100%)'
            }}
            variants={smokeVariants}
            animate="animate"
          />
          
          <motion.div
            className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full filter blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(150,150,255,0.04) 50%, transparent 100%)'
            }}
            variants={smokeVariants2}
            animate="animate"
          />
          
          <motion.div
            className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full filter blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(180,180,255,0.06) 50%, transparent 100%)'
            }}
            variants={smokeVariants3}
            animate="animate"
          />

          {/* Medium smoke clouds */}
          <motion.div
            className="absolute top-3/4 right-1/2 w-48 h-48 rounded-full filter blur-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(220,220,255,0.03) 70%, transparent 100%)'
            }}
            variants={smokeVariants}
            animate="animate"
            transition={{ delay: 3 }}
          />

          <motion.div
            className="absolute top-1/6 right-1/6 w-56 h-56 rounded-full filter blur-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(190,190,255,0.04) 60%, transparent 100%)'
            }}
            variants={smokeVariants2}
            animate="animate"
            transition={{ delay: 6 }}
          />

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/20"
              style={{
                left: `${15 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              variants={floatingParticles}
              animate="animate"
              transition={{ delay: i * 0.5 }}
            />
          ))}

          {/* Wispy smoke trails */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 800px 600px at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%),
                radial-gradient(ellipse 600px 400px at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%),
                radial-gradient(ellipse 400px 300px at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)
              `
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Content overlay */}
        <div className="absolute w-full h-full top-0 z-25 bg-gradient-to-r from-[#000056]/80 via-[#000056]/60 to-transparent" />
        
        <motion.div 
          className="container relative z-30 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-3 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex flex-col gap-5" variants={textFromLeft}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="font-bold text-3xl md:text-5xl text-center md:text-start text-white drop-shadow-lg">
                <span dangerouslySetInnerHTML={{ __html: titulo }} />
                <br />
                <span className="text-xl">{subtitulo}</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="md:text-lg text-white text-center md:text-start flex flex-col gap-1 drop-shadow">
                <div dangerouslySetInnerHTML={{ __html: texto }} />
                <span className="font-bold text-lg md:text-2xl logo-color-orange">
                  {informativo}
                </span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className="bg-[#05CE38] rounded-full flex gap-2 text-white py-3 px-6 items-center justify-center font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#04b832]"
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaWhatsapp size={28} />
                </motion.div>
                Peça sua Bateria
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div variants={imageFromRight}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <Slider />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <HighlightSection />
    </>
  );
}