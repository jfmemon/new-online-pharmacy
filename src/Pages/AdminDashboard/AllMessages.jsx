import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import useAllMessages from '../../Hooks/useAllMessages';
import emptyImage from '../../assets/empty_cart.svg'

const AllMessages = () => {
    const [allContacts, refetch] = useAllMessages();

    const handleDelete = (item) => {
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
                fetch(`https://online-pharmacy-server.vercel.app/allContacts/${item._id}`, {
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
        <div className="mt-5 w-full">
            {
                allContacts.length == 0 ? <div className='w-full flex flex-col gap-3 justify-center items-center p-5'>
                    <img className='w-96 py-3' src={emptyImage} alt="" />
                    <p className='text-rose-600 text-2xl font-semibold py-3 text-center'>You don't have any message..!</p>
                </div> :
                    <div>
                        <h3 className="text-2xl font-semibold text-indigo-500 py-3 pl-6">
                            Total messages: {allContacts.length}
                        </h3>
                        <div className='grid min-h-[140px] w-full place-items-center overflow-x-scroll lg:overflow-hidden rounded-lg p-6'>
                            <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-full w-full lg:overflow-hidden overflow-scroll'>
                                <table className='w-full min-w-max table-auto text-left'>
                                    <thead>
                                        <tr className='bg-gray-800 text-white'>
                                            <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>No.</th>
                                            <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Name</th>
                                            <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Email</th>
                                            <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Subject</th>
                                            <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Message</th>
                                            <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allContacts.map((item, idx) => <tr key={item._id} className='hover:bg-slate-200'>
                                                <td className='py-3 px-8 border-b border-blue-gray-50'>{idx + 1}</td>
                                                <td className='py-3 px-8 border-b border-blue-gray-50'>{item.user.displayName}</td>
                                                <td className='py-3 px-8 border-b border-blue-gray-50'>{item.user.email}</td>
                                                <td className='py-3 px-8 border-b border-blue-gray-50'>{item.subject}</td>
                                                <td className='py-3 px-8 border-b border-blue-gray-50'>{item.message}</td>
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

export default AllMessages;