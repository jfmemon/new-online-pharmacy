import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

import '../../index.css';
import useHealthAndWellness from '../../Hooks/useHealthAndWellness';

const imageHostingToken = import.meta.env.VITE_image_upload_token;

const HealthAndWellnessItems = () => {
    const [healthAndWellness, refetch] = useHealthAndWellness();
    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;
    const [axiosSecure] = useAxiosSecure();

    const handleAddNewItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const img = form.img;
        const image = img.files;
        const name = form.title.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const priceStr = form.price.value;
        const price = parseFloat(priceStr);
        const brand = form.brand.value;

        const formData = new FormData();
        formData.append('image', image[0]);

        fetch(imageHostingURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                if (imageRes.success) {
                    const imgURL = imageRes.data.display_url;
                    const data = { img: imgURL, title: name, quantity: quantity, details: details, price: price, brand: brand };
                    console.log(data);
                    axiosSecure.post('/healthAndWellness', data)
                        .then(data => {
                            if (data.data.insertedId) {
                                Swal.fire({
                                    target: document.getElementById('my_modal_1'),
                                    position: 'center',
                                    icon: 'success',
                                    title: 'New item added successfully.',
                                    showConfirmButton: false,
                                    timer: 1500,
                                    customClass: {
                                        container: 'my-swal'
                                    }
                                })
                                refetch();
                                form.reset();
                            }
                        })
                }
            })

    }

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
                fetch(`http://localhost:5000/healthAndWellness/${item._id}`, {
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
        <div className='px-10'>
            <div>
                <h3 className='py-4 pl-2 text-2xl font-semibold'>Total items: <span className='text-rose-500'>{healthAndWellness.length}</span></h3>
            </div>
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className='ml-4 text-center border px-2 md:py-1 py-1 border-primary font-semibold text-sm cursor-pointer text-primary hover:bg-primary hover:text-white uppercase'>Add new item</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-10/12 max-w-5xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-xl py-2 text-indigo-500 text-center pl-4">... Add new item ...</h3>
                    <div>
                        <form className='flex flex-col justify-center' onSubmit={handleAddNewItem}>
                            <div className='p-3 grid grid-cols-1 md:grid-cols-2 gap-2'>
                                <div>
                                    <label className="label">Medicine title</label>
                                    <input type="text" name='title' placeholder="Medicine title" className="input input-bordered input-secondary w-full max-w-xs m-1 bg-slate-50" required />
                                </div>
                                <div>
                                    <label className="label">Medicine quantity</label>
                                    <input type="text" name='quantity' placeholder="Medicine quantity" className="input input-bordered input-secondary w-full max-w-xs m-1 bg-slate-50" required />
                                </div>
                                <div>
                                    <label className="label">Medicine price</label>
                                    <input type="number" name='price' placeholder="Price" className="input input-bordered input-secondary w-full max-w-xs m-1 bg-slate-50" required />
                                </div>
                                <div>
                                    <label className="label">Brand name</label>
                                    <input type="text" name='brand' placeholder="Brand name" className="input input-bordered input-secondary w-full max-w-xs m-1 bg-slate-50" required />
                                </div>
                                <div>
                                    <label className="label">Medicine details</label>
                                    <textarea type="text" name='details' placeholder="Medicine details" className="textarea textarea-bordered textarea-secondary textarea-md w-full max-w-xs m-1 bg-slate-50" required />
                                </div>
                                <div className='py-5 pl-2'>
                                    <label className="label">Choose image</label>
                                    <input type="file" name='img' accept="image/png, image/jpeg, image/jpg" required />
                                </div>
                            </div>
                            <button type="submit" className='btn btn-outline btn-warning my-2 w-24 mx-auto hover:text-white'>Add</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 justify-center md:my-10 p-3'>
                {
                    healthAndWellness.map(items =>
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

export default HealthAndWellnessItems;