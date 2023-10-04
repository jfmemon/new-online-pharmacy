import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const SexualWellnessProducts = ({ item }) => {
    const { name, _id, urlPath, products } = item;
    console.log(item);


    const handleDetails = () => {

    }

    const handleAddToCart = () => {

    }

    return (
        <div className='md:mx-10 p-5'>
            <div className='flex justify-center mt-10 mb-7'>
                <Link to="/category/sexualWellness">
                    <div className="divider md:w-[300px] w-60 mb-5">{name}</div>
                </Link>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={25}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
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
                        slidesPerView: 3
                    },
                    1024: {
                        spaceBetween: 50,
                        slidesPerView: 4
                    },
                    1280: {
                        spaceBetween: 50,
                        slidesPerView: 4
                    }
                }}
                className="md:container"
            >
                {
                    products.map(product => <SwiperSlide>
                        <div className="card card-compact bg-base-100 drop-shadow-xl p-2 rounded-none border-2">
                            <figure><img className='md:w-40 md:h-40' src={product.img} alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h2 className='font-semibold text-sky-600'>{product.title}</h2>
                                <small className='text-gray-600 font-semibold'>{product.quantity}</small>
                                <p className='font-semibold text-2xl' style={{ color: '#f57224' }}>{product.price} &#2547;</p>
                            </div>
                            <button onClick={handleDetails} className='text-center mb-1 border w-full md:py-1 py-1 border-accent font-semibold text-sm cursor-pointer text-accent hover:bg-accent hover:text-white uppercase'>See Details</button>
                            <button onClick={handleAddToCart} className='text-center border w-full md:py-1 py-1 border-warning font-semibold text-sm cursor-pointer text-warning hover:bg-warning hover:text-white uppercase'>ADD TO CART</button>
                        </div>
                    </SwiperSlide>)
                }
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default SexualWellnessProducts;


