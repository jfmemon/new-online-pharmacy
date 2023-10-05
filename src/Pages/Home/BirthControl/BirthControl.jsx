import { useContext } from 'react';
import useBirthControl from '../../../Hooks/useBirthControl';
import { Navigation, Pagination } from 'swiper/modules';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';
import { Swiper, SwiperSlide } from 'swiper/react';
import Swal from 'sweetalert2';

const BirthControl = () => {
    const [birthControl] = useBirthControl();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    const handleAddToCart = (product) => {
        const { _id, img, title, quantity, price, details, brand } = product;

        if (user && user.email) {
            const cartItem = { itemId: _id, img, title, quantity, price, details, brand, addedQuantity: quantity, totalPrice: price, userEmail: user.email };

            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            icon: 'success',
                            position: 'top',
                            title: 'Medicine added to the cart successfully.',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order this medicine.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            })
        }
    }

    return (
        <div className='md:mx-10 p-5'>
            <div className='flex justify-center mt-10 mb-7'>
                <Link to="/category/birthControl">
                    <div className="divider md:w-[300px] w-60 mb-5 text-indigo-500 font-semibold hover:font-bold">Birth Control</div>
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
                    birthControl.map(product => <SwiperSlide
                        key={product._id}
                    >
                        <div className="card h-96 card-compact bg-base-100 drop-shadow-lg p-2 rounded-none">
                            <figure><img className='md:w-40 md:h-40' src={product.img} alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h2 className='font-semibold text-sky-600'>{product.title}</h2>
                                <small className='text-gray-600 font-semibold'>{product.quantity}</small>
                                <p className='font-semibold text-2xl' style={{ color: '#f57224' }}>{product.price} &#2547;</p>
                            </div>
                            <Link to={`/category/birthControl/${product._id}`}>
                                <button className='text-center mb-1 border w-full md:py-1 py-1 border-accent font-semibold text-sm cursor-pointer text-accent hover:bg-accent hover:text-white uppercase'>See Details</button>
                            </Link>
                            <button onClick={() => handleAddToCart(product)} className='text-center border w-full md:py-1 py-1 border-warning font-semibold text-sm cursor-pointer text-warning hover:bg-warning hover:text-white uppercase'>ADD TO CART</button>
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

export default BirthControl;