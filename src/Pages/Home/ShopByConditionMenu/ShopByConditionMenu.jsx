import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShopByConditionMenu = ({ menu }) => {
    const navigate = useNavigate();
    // console.log(menu);
    const { _id, name, image, products, urlPath } = menu;

    const handleGetProducts = (e) => {
        e.preventDefault();
        navigate(`/category/shopByCondition/${urlPath}`, { state: { products: products } })
    }

    return (
        <div className='group cursor-pointer' onClick={handleGetProducts}>
            <img className='md:w-64 w-40' src={image} alt="" />
            <div className='text-center group-hover:underline'>{name}</div>
        </div>
    );
};

export default ShopByConditionMenu;