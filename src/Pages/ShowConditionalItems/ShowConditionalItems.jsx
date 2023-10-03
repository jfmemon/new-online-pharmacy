import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowItemsByCard from './ShowItemsByCard';

const ShowConditionalItems = () => {
    const loadedItem = useLoaderData();

    const productItems = loadedItem.products;
    const name = loadedItem.name;

    console.log(productItems);

    return (
        <div className='p-5'>
            <div className='pt-2 pb-3'>
                <h3 className='text-xl font-semibold md:pl-2 pl-3 my-2'>{name}</h3>
                <small className='md:pl-2 pl-3 text-gray-500'>{productItems?.length} items found in {name}</small>
            </div>
            <div className='grid md:grid-cols-5 grid-cols-1 gap-5 justify-center md:my-10'>
                {
                    productItems.map(items => <ShowItemsByCard
                        key={items._id}
                        items={items}
                    ></ShowItemsByCard>)
                }
            </div>
        </div>
    );
};

export default ShowConditionalItems;