import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useCart from '../../Hooks/useCart';
import Swal from 'sweetalert2';

const OrderConfirm = () => {
    const { user } = useContext(AuthContext);
    const [cart] = useCart();
    const totalPrice = cart.reduce((accumulator, currentValue) => currentValue.totalPrice + accumulator, 0);

    const handleHotelBookings = (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.number.value;
        const presentAddress = form.address.value;
        // console.log(fullName, email, phoneNumber, presentAddress, cart.length, totalPrice);

        if (user && user.email) {
            const orderedItem = { items: cart, name: fullName, email: email, phoneNumber: phoneNumber, address: presentAddress, itemQuantity: cart.length, cost: totalPrice, userEmail: user.email };
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to place this order?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, place this order!'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch('http://localhost:5000/orders', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(orderedItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                form.reset();
                                Swal.fire(
                                    'Confirmed!',
                                    'Your order has been placed. You will get your medicine in 3 days. Thank you for buying from us.',
                                    'success'
                                )
                            }
                        })
                }
            })

        }

    }


    return (
        <div className='mt-5 w-full'>
            <h3 className='text-2xl font-semibold text-center text-indigo-500 py-3'>Confirm your order</h3>
            <p className='text-center'>To place your order, please give us some information!</p>
            <form onSubmit={handleHotelBookings} className="">
                <div className='grid md:grid-cols-2 sm:grid-cols-1 p-5'>
                    <div className='flex flex-col gap-3'>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Full name</span>
                            </label>
                            <input name='name' type="text" placeholder='Eg: Ismail Haniyeh' className="input input-bordered w-[90%] bg-gray-200" required />
                        </div>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder='Eg: ismailhaniyeh@gmail.com' className="input input-bordered w-[90%] bg-gray-200" required />
                        </div>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input name='number' type="number" placeholder='+880' className="input input-bordered w-[90%] bg-gray-200" required />
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Present address</span>
                            </label>
                            <input name='address' type="text" placeholder='Eg: house/road or vill, post code, p.s, district, division.' className="input input-bordered w-[90%] bg-gray-200" required />
                        </div>
                    </div>
                </div>
                <div className='my-5 flex justify-center items-center gap-10'>
                    <h3 className='text-xl'>Total selected item: <span className='2xl font-semibold text-indigo-500'>{cart.length}</span></h3>
                    <h3 className='text-xl'>Total cost: <span className='2xl font-semibold text-indigo-500'>{totalPrice}</span> tk</h3>
                </div>
                <div className="form-control my-6">
                    <button className="btn btn-warning w-1/4 ml-auto mr-auto">Confirm order</button>
                </div>
            </form>

        </div>
    );
};

export default OrderConfirm;