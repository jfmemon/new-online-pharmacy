import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useCart from '../../Hooks/useCart';

const OrderConfirm = () => {
    const { user } = useContext(AuthContext);
    const [cart] = useCart();

    const handleHotelBookings = () => {

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
                            <input name='name' type="text" className="input input-bordered w-[90%] bg-gray-200" />
                        </div>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" className="input input-bordered w-[90%] bg-gray-200" />
                        </div>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input name='number' type="number" className="input input-bordered w-[90%] bg-gray-200" />
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" className="input input-bordered w-[90%] bg-gray-200" />
                        </div>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" className="input input-bordered w-[90%] bg-gray-200" />
                        </div>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" className="input input-bordered w-[90%] bg-gray-200" />
                        </div>
                    </div>
                </div>
                <div className='my-5 flex justify-center items-center'>
                    <h3 className='text-xl'>Total price: <span className='2xl font-semibold text-warning'></span> tk</h3>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning w-1/4 ml-auto mr-auto">Book Now</button>
                </div>
            </form>

        </div>
    );
};

export default OrderConfirm;