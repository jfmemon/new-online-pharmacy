import React from 'react';
import useCart from '../../Hooks/useCart';
import useOrders from '../../Hooks/useOrders';
import usePrescription from '../../Hooks/usePrescription';

const UserHome = () => {
    const [cart] = useCart();
    const [orders] = useOrders();
    const [prescription] = usePrescription();

    return (
        <div className='lg:px-10 w-full'>
            <h3 className='text-2xl pt-5 pl-5 font-semibold text-pink-400'>Welcome to user home</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
                <div className='w-full h-28 p-3 rounded-lg bg-emerald-200 relative'>
                    <h3 className='text-xl font-semibold text-white'>Total cart item</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{cart.length}</h3>
                </div>
                <div className='w-full h-28 p-3 rounded-lg bg-rose-400 relative'>
                    <h3 className='text-xl font-semibold text-white'>Total order</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{orders.length}</h3>
                </div>
                <div className='w-full h-28 p-3 rounded-lg bg-lime-300 relative'>
                    <h3 className='text-xl font-semibold text-white'>Total prescription order</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{prescription.length}</h3>
                </div>
            </div>
        </div>
    );
};

export default UserHome;