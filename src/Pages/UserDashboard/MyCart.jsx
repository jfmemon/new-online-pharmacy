import React from 'react';
import useCart from '../../Hooks/useCart';

const MyCart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((accumulator, currentValue) => currentValue.totalPrice + accumulator, 0);

    return (
        <div className='relative'>
            <div className='flex justify-evenly md:gap-8 gap-2 md:text-2xl font-semibold py-5'>
                <h3>Total items: <span className='text-indigo-500'>{cart?.length}</span></h3>
                <h3>Total price: <span className='text-indigo-500'>{totalPrice} &#2547;</span></h3>
                <button className='btn btn-warning btn-sm text-white'>Buy</button>
            </div>

            {/*This is a fully responsive table*/}
            <div className='grid min-h-[140px] w-full place-items-center overflow-x-scroll lg:overflow-hidden rounded-lg p-6'>
                <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-full w-full overflow-scroll'>
                    <table className='w-full min-w-max table-auto text-left'>
                        <thead>
                            <tr>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>No.</th>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>Image</th>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>Name</th>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>Quantity</th>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>Price</th>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-4 border-b border-blue-gray-50'>hello</td>
                                <td className='p-4 border-b border-blue-gray-50'>gellow</td>
                                <td className='p-4 border-b border-blue-gray-50'>pello</td>
                                <td className='p-4 border-b border-blue-gray-50'>nellow</td>
                                <td className='p-4 border-b border-blue-gray-50'>chello</td>
                                <td className='p-4 border-b border-blue-gray-50'>hedom</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>;


        </div>
    );
};

export default MyCart;