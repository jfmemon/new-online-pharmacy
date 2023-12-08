import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ShopByConditionMenu = ({ menu }) => {
    const { _id, name, image } = menu;
    console.log(menu)

    return (
        <Link to={`/category/shopByCondition/${_id}`}>
            <div className='group cursor-pointer'>
                <img className='md:w-64 w-40' src={image} alt="" />
                <div className='text-center group-hover:underline'>{name}</div>
            </div>
        </Link>
    );
};

export default ShopByConditionMenu;