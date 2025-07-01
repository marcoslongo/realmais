"use client";

import { SelectUnidade } from "@/components/SelectUnidade";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.2, 0.3, 0.2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, rgba(2,1,89,0.05) 100%)'}}>
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl"
          style={{backgroundColor: 'rgba(2,1,89,0.15)'}}
          variants={pulseVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl"
          style={{backgroundColor: 'rgba(254,109,2,0.1)'}}
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 0.2 }}
        />
        <motion.div 
          className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl"
          style={{backgroundColor: 'rgba(2,1,89,0.1)'}}
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 0.4 }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full opacity-60"
          style={{backgroundColor: '#020159'}}
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full opacity-40"
          style={{backgroundColor: '#fe6d02'}}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.3 }}
        />
        <motion.div 
          className="absolute top-1/2 left-3/4 w-1 h-1 rounded-full opacity-80"
          style={{backgroundColor: '#020159'}}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full opacity-50"
          style={{backgroundColor: '#fe6d02'}}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.7 }}
        />
      </div>

      <motion.div 
        className="relative z-10 w-full h-screen flex flex-col items-center justify-center gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="group relative"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute -inset-4 rounded-2xl blur-lg opacity-25"
            style={{background: 'linear-gradient(45deg, #020159, #fe6d02)'}}
            whileHover={{ opacity: 0.35 }}
            transition={{ duration: 0.5 }}
          />
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/60" style={{boxShadow: '0 25px 50px -12px rgba(2,1,89,0.15), 0 0 0 1px rgba(254,109,2,0.1)'}}>
            <Image
              src={"/assets/images/realmais.svg"}
              width={400}
              height={204}
              alt="Logo RealMais"
              className="drop-shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div 
          className="text-center space-y-4 max-w-2xl"
          variants={itemVariants}
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{background: 'linear-gradient(135deg, #020159 0%, #fe6d02 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Seja bem-vindo(a) à RealMais!
          </h1>
          <p className="text-lg md:text-xl leading-relaxed font-medium" style={{color: '#020159'}}>
            Para continuar sua jornada, selecione a unidade desejada no menu abaixo e descubra todas as possibilidades que preparamos para você.
          </p>
        </motion.div>

        <motion.div 
          className="w-full max-w-md relative"
          variants={itemVariants}
        >
          <div className="absolute -inset-1 rounded-xl blur opacity-30"></div>
          <div className="relative rounded-xl p-1 shadow-xl">
            <SelectUnidade/>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-current opacity-30" style={{color: 'rgba(2,1,89,0.08)'}}>
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}