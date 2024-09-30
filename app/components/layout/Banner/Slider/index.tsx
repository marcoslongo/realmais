import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';
import styles from './carousel.module.css'; 

export function Slider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      speed={2000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[ Autoplay]}
      className={styles.swiperContainer}
    >
      <SwiperSlide className={styles.slide}>
        <Image
          src={'/assets/images/01.webp'}
          alt=''
          layout="fill"
          objectFit="contain"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image
          src={'/assets/images/02.webp'}
          alt=''
          layout="fill"
          objectFit="contain"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image
          src={'/assets/images/03.webp'}
          alt=''
          layout="fill"
          objectFit="contain"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image
          src={'/assets/images/04.webp'}
          alt=''
          layout="fill"
          objectFit="contain"
        />
      </SwiperSlide>
    </Swiper>
  );
};
