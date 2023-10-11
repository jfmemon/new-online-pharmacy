import React from 'react';
import useCart from '../../Hooks/useCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import emptyImage from '../../assets/empty_cart.svg'

const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((accumulator, currentValue) => currentValue.totalPrice + accumulator, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            {
                cart.length == 0 ? <div className='w-full flex flex-col gap-3 items-center p-5'>
                    <img className='w-96 py-3' src={emptyImage} alt="" />
                    <p className='text-rose-600 text-2xl font-semibold py-3 text-center'>You have not added any medicine to the cart yet!</p>
                    <Link to="/" className='btn btn-primary py-3 text-white'>Add some medicine</Link>
                </div> :
                    <div className='relative'>
                        <div className='flex justify-evenly md:gap-8 gap-2 md:text-xl font-semibold pt-8'>
                            <h3>Total items: <span className='text-indigo-500'>{cart?.length}</span></h3>
                            <h3>Total price: <span className='text-indigo-500'>{totalPrice} &#2547;</span></h3>
                            <Link to="/userDashboard/orderConfirm">
                                <button className='btn btn-warning btn-sm text-white'>Buy</button>
                            </Link>
                        </div>

                        {/* This is fully responsive table */}
                        <div className='grid min-h-[140px] w-full place-items-center overflow-x-scroll lg:overflow-hidden rounded-lg p-6'>
                            <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-full w-full lg:overflow-hidden overflow-scroll'>
                                <table className='w-full min-w-max table-auto text-left'>
                                    <thead>
                                        <tr className='bg-gray-800 text-white'>
                                            <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>No.</th>
                                            <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Image</th>
                                            <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Name</th>
                                            <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Quantity</th>
                                            <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Price</th>
                                            <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((item, idx) => <tr key={item._id} className='hover:bg-slate-200'>
                                                <td className='py-2 px-8 border-b border-blue-gray-50'>{idx + 1}</td>
                                                <td className='py-2 px-8 border-b border-blue-gray-50'>
                                                    <img className='w-10' src={item.img} alt="" />
                                                </td>
                                                <td className='py-2 px-8 border-b border-blue-gray-50'>{item.title}</td>
                                                <td className='py-2 px-8 border-b border-blue-gray-50 text-center'>{item.addedQuantity}</td>
                                                <td className='py-2 px-8 border-b border-blue-gray-50 text-center'>{item.totalPrice} &#2547;</td>
                                                <td className='py-2 px-8 border-b border-blue-gray-50'>
                                                    <button onClick={() => handleDelete(item)} className='btn btn-md bg-red-500 text-white text-[18px] hover:text-red-600' title='Delete this item!'><FontAwesomeIcon icon={faTrashCan} /></button>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyCart;