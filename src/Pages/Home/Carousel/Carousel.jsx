// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import img1 from '../../../assets/Carousel-images/shopByCategory.jpg';
import img2 from '../../../assets/Carousel-images/sexualWellness.jpg';
import img3 from '../../../assets/Carousel-images/birthControl.jpg';
import img4 from '../../../assets/Carousel-images/vitamins.jpg';
import img5 from '../../../assets/Carousel-images/medicalDevice.jpg';
import img6 from '../../../assets/Carousel-images/personalCare.jpg';
import img7 from '../../../assets/Carousel-images/healthAndWellness.jpg';
import img8 from '../../../assets/Carousel-images/babyCare.jpg';

const Carousel = () => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='container my-24 flex flex-col'
                breakpoints={{
                    0: {
                        spaceBetween: 50,
                        slidesPerView: 1,
                    },
                    480: {
                        spaceBetween: 50,
                        slidesPerView: 2
                    },
                    768: {
                        spaceBetween: 50,
                        slidesPerView: 2
                    },
                    1024: {
                        spaceBetween: 50,
                        slidesPerView: 3
                    },
                    1280: {
                        spaceBetween: 50,
                        slidesPerView: 3
                    }
                }}
            >
                <SwiperSlide>
                    <img className='w-full h-96 rounded-lg' src={img1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 rounded-lg' src={img2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 rounded-lg' src={img3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 rounded-lg' src={img4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 rounded-lg' src={img5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 rounded-lg' src={img6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 rounded-lg' src={img7} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 rounded-lg' src={img8} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default Carousel;