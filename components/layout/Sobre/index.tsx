'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { BsLightningFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './carousel.module.css';

interface SobreProps {
  texto: string;
  whatsapp: string;
  images?: string[];
}

export function Sobre({ texto, whatsapp, images }: SobreProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const textFromRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 }
  };

  const imageFromLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 }
  };

  return (
    <section id="sobre" className="scroll-mt-64">
      <div ref={ref} className="container grid grid-cols-1 md:grid-cols-2 items-center my-20 gap-8">
        <motion.div
          className="relative h-full"
          variants={imageFromLeft}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            className="relative w-full h-[280px] md:h-[400px] rounded-2xl"
          >
            {(images && images.length > 0 ? images : ['/assets/images/temp.webp']).map((image, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

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
          <div dangerouslySetInnerHTML={{ __html: texto }} />
          <div className="flex mt-2">
            <Link
              className="bg-[#05CE38] rounded-full flex gap-2 text-white py-3 px-6 items-center justify-center font-bold text-lg hover:scale-105 transition shadow hover:shadow-md"
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
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
