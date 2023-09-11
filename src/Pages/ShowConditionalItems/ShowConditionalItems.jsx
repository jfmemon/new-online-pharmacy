import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';

const ShowConditionalItems = () => {
    const location = useLocation();
    console.log(location.state);

    const productItems = location.state.products;

    
    // console.log(productItems);

    return (
        <div>
            <h3>This is conditional item page.</h3>
            <div>
                {
                    productItems.map(items => <h3>{items.title}</h3>)
                }
            </div>
        </div>
    );
};

export default ShowConditionalItems;