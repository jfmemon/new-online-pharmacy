import React, { useContext, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthProvider';
import useCart from '../../../Hooks/useCart';

const MedicalDevicesProductDetails = () => {
    const loadedMedicalDevicesProduct = useLoaderData();
    const { _id, img, title, quantity, price, details, brand } = loadedMedicalDevicesProduct;
    const { user } = useContext(AuthContext);
    const [addedQuantity, setAddedQuantity] = useState(1);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleIncrease = () => {
        setAddedQuantity(addedQuantity + 1);
    }

    const handleDecrease = () => {
        if (addedQuantity > 1) {
            setAddedQuantity(addedQuantity - 1);
        }
    }

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = { itemId: _id, img, title, quantity, price, details, brand, addedQuantity: addedQuantity, totalPrice: price * addedQuantity, userEmail: user.email };

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
        <div className='mt-16 '>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 p-5 shadow-lg m-5 md:w-3/4 mx-auto text-gray-600'>
                <div className='p-5'>
                    <img className='ml-auto' src={img} alt="" />
                </div>
                <div className='p-5 border-2 my-auto'>
                    <h3 className='text-xl font-bold'>{title}</h3>
                    <small>{brand}</small><br /><br />
                    <p className='font-semibold'>{quantity}</p>
                    <p className='font-semibold text-2xl' style={{ color: '#f57224' }}>{price * addedQuantity} &#2547;</p><br /><br />
                    <div className='w-40 border h-8 mb-2 flex justify-between items-center'>
                        <button onClick={handleDecrease} disabled={addedQuantity === 1} className='mx-auto disabled:cursor-not-allowed'><FontAwesomeIcon icon={faMinus} /></button>
                        <p className='mx-auto font-bold'>{addedQuantity}</p>
                        <button onClick={handleIncrease} className='mx-auto'><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <button onClick={handleAddToCart} className='text-center border w-40 md:py-1 py-1 border-warning font-semibold text-sm cursor-pointer text-warning hover:bg-warning hover:text-white uppercase'>ADD TO CART</button>
                </div>
            </div>
            <div className='border-2 mt-5 mb-10 md:w-3/4 mx-auto px-5 py-4 gap-5 text-gray-600'>
                <h3 className='text-2xl font-bold mb-2'>Description</h3>
                <p className='my-2'><span className='font-bold'>Product details:</span> {details}</p>
            </div>
        </div>
    );
};

export default MedicalDevicesProductDetails;