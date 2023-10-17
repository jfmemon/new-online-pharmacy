import React from 'react';
import useSexualWellness from '../../Hooks/useSexualWellness';
import Swal from 'sweetalert2';

const SexualWellnessItems = () => {
    const [sexualWellness, refetch] = useSexualWellness();

    const handleDeleteItem = item => {
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
                fetch(`http://localhost:5000/sexualWellness/${item._id}`, {
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
            <div>
                <h3 className='py-4 pl-2 text-2xl font-semibold'>Total items: <span className='text-rose-500'>{sexualWellness.length}</span></h3>
            </div>
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className='ml-4 text-center border px-2 md:py-1 py-1 border-primary font-semibold text-sm cursor-pointer text-primary hover:bg-primary hover:text-white uppercase'>Add new</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Add Item</h3>
                    <div>
                        <form>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </dialog>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 justify-center md:my-10 p-3'>
                {
                    sexualWellness.map(items =>
                        <div
                            key={items._id}
                            className="card card-compact bg-base-100 shadow-2xl p-2 rounded-none">
                            <figure><img className='md:w-40 md:h-40' src={items.img} alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h2 className='font-semibold text-sky-600'>{items.title}</h2>
                                <small className='text-gray-600 font-semibold'>{items.quantity}</small>
                                <p className='font-semibold text-2xl' style={{ color: '#f57224' }}>{items.price} &#2547;</p>
                            </div>
                            <button onClick={() => handleDeleteItem(items)} className='text-center border w-full md:py-1 py-1 border-warning font-semibold text-sm cursor-pointer text-warning hover:bg-warning hover:text-white uppercase'>Delete</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default SexualWellnessItems;