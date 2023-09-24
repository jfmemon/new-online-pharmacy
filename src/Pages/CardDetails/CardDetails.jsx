import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const CardDetails = () => {
    const location = useLocation();
    const { _id, img, title, quantity, price, details, brand } = location.state;
    const [newPrice, setNewPrice] = useState(1);

    const handleIncrease = () => {
        setNewPrice(newPrice + 1);
    }

    const handleDecrease = () => {
        if (newPrice > 1) {
            setNewPrice(newPrice - 1);
        }
    }

    return (
        <div className='mt-20 '>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 p-5 shadow-lg m-5 md:w-3/4 mx-auto text-gray-600'>
                <div className='p-5'>
                    <img className='ml-auto' src={img} alt="" />
                </div>
                <div className='p-5 border-2 my-auto'>
                    <h3 className='text-xl font-bold'>{title}</h3>
                    <small>{brand}</small><br /><br />
                    <p className='font-semibold'>{quantity}</p>
                    <p className='font-semibold'>{price * newPrice} &#2547;</p><br /><br />
                    <div className='w-40 border h-8 mb-2 flex justify-between items-center'>
                        <button onClick={handleDecrease} className='mx-auto'><FontAwesomeIcon icon={faMinus} /></button>
                        <p className='mx-auto font-bold'>{newPrice}</p>
                        <button onClick={handleIncrease} className='mx-auto'><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <button className='text-center border w-40 md:py-1 border-warning font-semibold text-sm cursor-pointer text-warning hover:bg-warning hover:text-white uppercase'>ADD TO CART</button>
                </div>
            </div>
            <div className='border-2 mt-5 mb-10 md:w-3/4 mx-auto px-5 py-4 gap-5 text-gray-600'>
                <h3 className='text-2xl font-bold mb-2'>Description</h3>
                <p className='my-2'><span className='font-bold'>Indication:</span> {details.indication}</p>
                <p className='my-2'><span className='font-bold'>Dosage & Administration:</span> {details.
                    dosageAdministration}</p>
                <p><span className='font-bold'>Preparation:</span> {details.preparation}</p>
            </div>
        </div>
    );
};

export default CardDetails;