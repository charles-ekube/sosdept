

"use client";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Background Slider */}
      <div className={styles.sliderContainer}>
        <Swiper
          spaceBetween={30}
          effect="fade"
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Overlay Content */}
      <div className={styles.overlay}>
        <main className={styles.mainContent}>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            Empathy-driven brands that evolve with you
          </div>

          <div className={styles.footerCenter}>
            <div>Full website</div>
            <div>Coming soon</div>
          </div>

          <div className={styles.footerRight}>
            <div className={styles.companyName}>The SOS Department</div>
            <div className={styles.email}>hello@sosdept.com</div>
            <div className={styles.capabilities}>Capabilities Deck ↗</div>
          </div>
        </footer>
      </div>
    </div>
  );
}