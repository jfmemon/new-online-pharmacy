import React from 'react';
import useSexualWellness from '../../Hooks/useSexualWellness';
import { Link } from 'react-router-dom';

const SexualWellnessItems = () => {
    const [sexualWellness, refetch] = useSexualWellness();
    return (
        <div>
            <div>
                <h3 className='py-4 pl-2 text-2xl font-semibold'>Total items: <span className='text-rose-500'>{sexualWellness.length}</span></h3>
            </div>
            <button onClick={() => handleAddNew(items)} className='ml-2 text-center border px-2 md:py-1 py-1 border-primary font-semibold text-sm cursor-pointer text-primary hover:bg-primary hover:text-white uppercase'>Add new</button>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 justify-center md:my-10'>
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
                            <button onClick={() => handleDelete(items)} className='text-center border w-full md:py-1 py-1 border-warning font-semibold text-sm cursor-pointer text-warning hover:bg-warning hover:text-white uppercase'>Delete</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default SexualWellnessItems;