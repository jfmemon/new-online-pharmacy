import React, { useContext } from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../Hooks/useCart';

const ShowItemsByCard = ({ items }) => {
    const { _id, img, title, quantity, price, details, brand } = items;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(items);

    const handleAddToCart = () => {
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

    const handleDetails = () => {
        localStorage.setItem('items', JSON.stringify(items));
        navigate(`/medicineDetails/${title}`);

        // navigate(`/medicineDetails/${title}`, { state: { _id, img, title, quantity, price, details, brand } });
    }

    return (
        <div className="card card-compact bg-base-100 shadow-2xl p-2 rounded-none">
            <figure><img className='md:w-40 md:h-40' src={img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className='font-semibold text-sky-600'>{title}</h2>
                <small className='text-gray-600 font-semibold'>{quantity}</small>
                <p className='font-semibold text-2xl' style={{ color: '#f57224' }}>{price} &#2547;</p>
            </div>
            <button onClick={handleDetails} className='text-center mb-1 border w-full md:py-1 py-1 border-accent font-semibold text-sm cursor-pointer text-accent hover:bg-accent hover:text-white uppercase'>See Details</button>
            <button onClick={handleAddToCart} className='text-center border w-full md:py-1 py-1 border-warning font-semibold text-sm cursor-pointer text-warning hover:bg-warning hover:text-white uppercase'>ADD TO CART</button>
        </div>
    );
};

export default ShowItemsByCard;