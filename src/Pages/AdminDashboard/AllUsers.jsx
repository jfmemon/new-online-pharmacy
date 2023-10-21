import { faTrashCan, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Swal from 'sweetalert2';
import userImage from '../../assets/user.png'
import useAllUsers from '../../Hooks/useAllUsers';

const AllUsers = () => {
    const [users, refetch] = useAllUsers();

    const handleMakeAdmin = user => {
        fetch(`https://online-pharmacy-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `${user.name} is an admin now.`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    const handleDeleteUser = (user) => {
        if (user.role !== 'admin') {
            // Only admin users can delete other users
            fetch(`https://online-pharmacy-server.vercel.app/users/delete/${user._id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        refetch();
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: `${user.name} has been deleted.`,
                            showConfirmButton: false,
                            timer: 1000,
                        });
                    }
                });
        } else {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Admin users cannot be deleted.',
                showConfirmButton: false,
                timer: 1000,
            });
        }
    };


    return (
        <div>
            <div className='px-6 py-4'>
                <h3 className='text-2xl font-semibold'>Total users: <span className='text-rose-500'>{users.length}</span></h3>
            </div>
            <div className='grid min-h-[140px] w-full place-users-center overflow-x-scroll lg:overflow-hidden rounded-lg p-6'>
                <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-full w-full lg:overflow-hidden overflow-scroll'>
                    <table className='w-full min-w-max table-auto text-left'>
                        <thead>
                            <tr className='bg-gray-800 text-white'>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>No.</th>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Image</th>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Name</th>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Email</th>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Password</th>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Role</th>
                                <th className='border-b border-blue-gray-100 bg-blue-gray-50 py-4 px-8'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, idx) => <tr key={user._id} className='hover:bg-slate-200'>
                                    <td className='py-2 px-8 border-b border-blue-gray-50'>{idx + 1}</td>
                                    <td className='py-2 px-8 border-b border-blue-gray-50'>
                                        {
                                            user.photoURL ? <img className='w-10 h-10 rounded-lg' src={user.photoURL} alt="" /> :
                                                <img className='w-10 h-10 rounded-lg' src={userImage} alt="" />
                                        }
                                    </td>
                                    <td className='py-2 px-8 border-b border-blue-gray-50'>{user.name}</td>
                                    <td className='py-2 px-8 border-b border-blue-gray-50 text-center'>{user.email}</td>
                                    <td className='py-2 px-8 border-b border-blue-gray-50 text-center'>{user.password}</td>
                                    <td className='py-2 px-8 border-b border-blue-gray-50'>
                                        {
                                            user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className='btn btn-md bg-red-500 text-white text-[15px] hover:text-red-600' title='Make admin!'><FontAwesomeIcon icon={faUserPlus} /></button>
                                        }
                                    </td>
                                    <td className='py-2 px-8 border-b border-blue-gray-50'>
                                        <button onClick={() => handleDeleteUser(user)} className='btn btn-md bg-red-500 text-white text-[18px] hover:text-red-600' title='Delete this user!'><FontAwesomeIcon icon={faTrashCan} /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;