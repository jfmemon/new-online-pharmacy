import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const AllOrders = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: orders = [], refetch } = useQuery(['orders'], async () => {
        const res = await axiosSecure.get("/allOrders");
        return res.data;
    })

    const handleDeleteOrder = (order) => {
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
                fetch(`http://localhost:5000/orders/${order._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'This item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='py-5'>
            <div className='px-6 py-4'>
                <h3 className='text-2xl font-semibold'>Total orders: <span className='text-rose-500'>{orders.length}</span></h3>
            </div>
            {
                orders.map((order, idx) => <div className='relative border-2 border-indigo-500 p-4 rounded-md bg-slate-100 m-4'>
                    <p className='font-semibold py-1 text-center'>Order no: <span className='text-rose-600 font-bold'>{idx + 1}</span></p>
                    <p className='font-semibold py-1 text-center'>Customer name: <span className='text-rose-600 font-bold'>{order.name}</span></p>
                    <p className='font-semibold py-1 text-center'>Phone number: <span className='text-rose-600 font-bold'>{order.phoneNumber}</span></p>
                    <p className='font-semibold py-1 text-center'>User email: <span className='text-rose-600 font-bold'>{order.userEmail}</span></p>
                    <p className='font-semibold py-1 text-center'>Customer email: <span className='text-rose-600 font-bold'>{order.email}</span></p>
                    <p className='font-semibold py-1 text-center'>Delivery address: <span className='text-rose-600 font-bold'>{order.address}</span></p>
                    <p className='font-semibold py-1 text-center'>Item quantity: <span className='text-rose-600 font-bold'>{order.itemQuantity}</span></p>
                    <p className='font-semibold py-1 text-center'>Total cost: <span className='text-rose-600 font-bold'>{order.cost}</span> tk</p>
                    <p className='pl-8 text-xl font-semibold'>Items-</p>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        order.items?.map((item, idx) => <tr key={item._id} className='hover:bg-slate-200'>
                                            <td className='py-3 px-8 border-b border-blue-gray-50'>{idx + 1}</td>
                                            <td className='py-3 px-8 border-b border-blue-gray-50'>
                                                <img className='w-10' src={item.img} alt="" />
                                            </td>
                                            <td className='py-3 px-8 border-b border-blue-gray-50'>{item.title}</td>
                                            <td className='py-3 px-8 border-b border-blue-gray-50 text-center'>{item.addedQuantity}</td>
                                            <td className='py-3 px-8 border-b border-blue-gray-50 text-center'>{item.totalPrice} &#2547;</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button className='absolute top-3 right-5' onClick={() => handleDeleteOrder(order)}>
                        <span className='text-2xl hover:text-rose-500'><FontAwesomeIcon icon={faTrashCan} /></span>
                    </button>

                </div>)
            }
        </div>
    );
};

export default AllOrders;