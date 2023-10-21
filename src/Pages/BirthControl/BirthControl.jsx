import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useBirthControl from '../../Hooks/useBirthControl';

const BirthControl = () => {
    const [birthControl] = useBirthControl();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [,refetch] = useCart();

    const handleAddToCart = (product) => {
        const { _id, img, title, quantity, price, details, brand } = product;

        if (user && user.email) {
            const cartItem = { itemId: _id, img, title, quantity, price, details, brand, addedQuantity: quantity, totalPrice: price, userEmail: user.email };

            fetch("https://online-pharmacy-server.vercel.app/carts", {
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
        <div className='p-5'>
            <div className='pt-2 pb-3'>
                <h3 className='text-xl font-semibold md:pl-2 pl-3 my-2 text-indigo-500'>Birth Control</h3>
                <small className='md:pl-2 pl-3 text-gray-500'>{birthControl?.length} items found in Birth Control</small>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 justify-center md:my-10'>
                {
                    birthControl.map(items =>
                        <div
                            key={items._id}
                            className="card card-compact bg-white shadow-2xl p-2 rounded-none">
                            <figure><img className='md:w-40 md:h-40' src={items.img} alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h2 className='font-semibold text-sky-600'>{items.title}</h2>
                                <small className='text-gray-600 font-semibold'>{items.quantity}</small>
                                <p className='font-semibold text-2xl' style={{ color: '#f57224' }}>{items.price} &#2547;</p>
                            </div>
                            <Link to={`/category/birthControl/${items._id}`}>
                                <button className='text-center mb-1 border w-full md:py-1 py-1 border-accent font-semibold text-sm cursor-pointer text-accent hover:bg-accent hover:text-white uppercase'>See Details</button>
                            </Link>
                            <button onClick={() => handleAddToCart(items)} className='text-center border w-full md:py-1 py-1 border-warning font-semibold text-sm cursor-pointer text-warning hover:bg-warning hover:text-white uppercase'>ADD TO CART</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default BirthControl;