import React from 'react';

const ShowItemsByCard = ({ items }) => {
    const { img, title, quantity, price } = items;
    // console.log(items);
    return (
        <div className="card card-compact bg-base-100 shadow-2xl p-2 rounded-none">
            <figure><img className='md:w-40 md:h-40' src={img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className='font-semibold'>{title}</h2>
                <small>{quantity}</small>
                <p className='font-bold'>{price} &#2547;</p>
            </div>
            <div className='text-center border w-full md:py-1 border-warning font-semibold text-sm cursor-pointer text-warning hover:bg-warning hover:text-white'>ADD TO CART</div>
        </div>
    );
};

export default ShowItemsByCard;