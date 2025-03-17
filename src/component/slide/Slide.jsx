import React from 'react'
import styles from './Slide.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

export const Slide = ()=>{
    console.log('スライドコンポーネント')
    return(
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
            >
                <SwiperSlide>
                    <div className={styles.slideContent}><img src='/img/spring.jpeg' alt='春'/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slideContent}><img src='/img/summer.jpeg' alt='夏'/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slideContent}><img src='/img/fall.jpeg' alt='秋'/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slideContent}><img src='/img/winter.jpeg' alt='冬'/></div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}