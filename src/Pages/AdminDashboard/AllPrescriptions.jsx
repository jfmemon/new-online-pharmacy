import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import emptyOrder from '../../assets/empty_order.svg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const AllPrescriptions = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: prescriptions = [], refetch } = useQuery(['prescriptions'], async () => {
        const res = await axiosSecure.get("/prescriptions");
        return res.data;
    })

    const handleDeleteOrder = order => {
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
                fetch(`http://localhost:5000/prescriptions/${order._id}`, {
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
        <div>
            <div className='w-full p-5'>
                <h3 className='text-xl text-indigo-500 font-semibold lg:py-3 px-5'>You have {prescriptions.length} orders from prescriptions</h3>
                <div className='flex flex-col gap-5 p-3'>
                    {
                        prescriptions.map((order, idx) => <div className='relative border-2 border-indigo-500 p-5 rounded-md bg-slate-100'>
                            <img className='w-64 mx-auto p-3' src={order.prescriptionImage} alt="" />
                            <p className='font-semibold py-1 text-center'>Order no: <span className='text-rose-600 font-bold'>{idx + 1}</span></p>
                            <p className='font-semibold py-1 text-center'>Customer name: <span className='text-rose-600 font-bold'>{order.fullName}</span></p>
                            <p className='font-semibold py-1 text-center'>Phone number: <span className='text-rose-600 font-bold'>{order.phoneNumber}</span></p>
                            <p className='font-semibold py-1 text-center'>Email: <span className='text-rose-600 font-bold'>{order.email}</span></p>
                            <p className='font-semibold py-1 text-center'>Delivery address: <span className='text-rose-600 font-bold'>{order.deliveryAddress}</span></p>
                            <button className='absolute top-3 right-5' onClick={() => handleDeleteOrder(order)}>
                                <span className='text-2xl hover:text-rose-500'><FontAwesomeIcon icon={faTrashCan} /></span>
                            </button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllPrescriptions;