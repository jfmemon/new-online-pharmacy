// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import '../../../index.css';

import img1 from '../../../assets/Carousel-images/shopByCategory.jpg';
import img2 from '../../../assets/Carousel-images/sexualWellness.jpg';
import img3 from '../../../assets/Carousel-images/birthControl.jpg';
import img4 from '../../../assets/Carousel-images/vitamins.jpg';
import img5 from '../../../assets/Carousel-images/medicalDevice.jpg';
import img6 from '../../../assets/Carousel-images/personalCare.jpg';
import img7 from '../../../assets/Carousel-images/healthAndWellness.jpg';
import img8 from '../../../assets/Carousel-images/babyCare.jpg';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div>
            <div className='flex justify-center md:pt-10 pt-5'>
                <div className="divider md:w-[300px] w-60 mb-0 md:mb-5">Shop by category</div>
            </div>
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
                className='md:container my-10 flex flex-col group'
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
                    <div className="overlay">
                        <img className='w-full h-96 md:rounded-lg' src={img1} alt="slide_image" />
                        <div className="content">
                            <h3 className='text-3xl font-bold text-white mb-12 uppercase'>Shop By Condition</h3>
                            <Link to='/category/shopByCondition' className='btn btn-outline btn-warning uppercase'>See more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overlay">
                        <img className='w-full h-96 md:rounded-lg' src={img2} alt="slide_image" />
                        <div className="content">
                            <h3 className='text-3xl font-bold text-white mb-12 uppercase'>Sexual Wellness</h3>
                            <Link to='/category/sexualWellness' className='btn btn-outline btn-warning uppercase'>See more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overlay">
                        <img className='w-full h-96 md:rounded-lg' src={img3} alt="slide_image" />
                        <div className="content">
                            <h3 className='text-3xl font-bold text-white mb-12 uppercase'>Birth Control</h3>
                            <Link to='/category/birthControl' className='btn btn-outline btn-warning uppercase'>See more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overlay">
                        <img className='w-full h-96 md:rounded-lg' src={img4} alt="slide_image" />
                        <div className="content">
                            <h3 className='text-3xl font-bold text-white mb-12 uppercase'>Vitamins and supplements</h3>
                            <Link to='/category/vitaminsAndSupplements' className='btn btn-outline btn-warning uppercase'>See more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overlay">
                        <img className='w-full h-96 md:rounded-lg' src={img5} alt="slide_image" />
                        <div className="content">
                            <h3 className='text-3xl font-bold text-white mb-12 uppercase'>Medical devices</h3>
                            <Link to='/category/medicalDevices' className='btn btn-outline btn-warning uppercase'>See more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overlay">
                        <img className='w-full h-96 md:rounded-lg' src={img6} alt="slide_image" />
                        <div className="content">
                            <h3 className='text-3xl font-bold text-white mb-12 uppercase'>Personal care</h3>
                            <Link to='/category/personalCare' className='btn btn-outline btn-warning uppercase'>See more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overlay">
                        <img className='w-full h-96 md:rounded-lg' src={img7} alt="slide_image" />
                        <div className="content">
                            <h3 className='text-3xl font-bold text-white mb-12 uppercase'>Health and wellness</h3>
                            <Link to='/category/healthAndWellness' className='btn btn-outline btn-warning uppercase'>See more</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overlay">
                        <img className='w-full h-96 md:rounded-lg' src={img8} alt="slide_image" />
                        <div className="content">
                            <h3 className='text-3xl font-bold text-white mb-12 uppercase'>Baby care</h3>
                            <Link to='/category/babyCare' className='btn btn-outline btn-warning uppercase'>See more</Link>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="slider-controler invisible group-hover:visible">
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