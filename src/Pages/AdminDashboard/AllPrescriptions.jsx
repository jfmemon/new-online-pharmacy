import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import useAllPrescriptions from '../../Hooks/useAllPrescriptions';

const AllPrescriptions = () => {
    const [prescriptions, refetch] = useAllPrescriptions();

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
                fetch(`https://online-pharmacy-server.vercel.app/prescriptions/${order._id}`, {
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
            <h3 className='text-2xl font-semibold pt-5 px-3'>Total prescriptions: <span className='text-rose-500'>{prescriptions.length}</span></h3>
            <div className='w-full p-5'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2 p-3'>
                    {
                        prescriptions.map((order, idx) => <div className='relative border-2 border-indigo-500 p-5 rounded-md bg-slate-100'>
                            <img className='w-64 mx-auto pt-5' src={order.prescriptionImage} alt="" />
                            <p className='font-semibold py-1 text-center'>Order no: <span className='text-rose-600 font-bold'>{idx + 1}</span></p>
                            <p className='font-semibold py-1 text-center'>Customer name: <span className='text-rose-600 font-bold'>{order.fullName}</span></p>
                            <p className='font-semibold py-1 text-center'>Phone number: <span className='text-rose-600 font-bold'>{order.phoneNumber}</span></p>
                            <p className='font-semibold py-1 text-center'>Email: <span className='text-rose-600 font-bold'>{order.email}</span></p>
                            <p className='font-semibold py-1 text-center'>Delivery address: <span className='text-rose-600 font-bold'>{order.deliveryAddress}</span></p>
                            <p className='font-semibold py-1 text-center'>Payment type: <span className='text-rose-600 font-bold'>{order.paymentType}</span></p>
                            <button className='absolute top-2 right-3' onClick={() => handleDeleteOrder(order)}>
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