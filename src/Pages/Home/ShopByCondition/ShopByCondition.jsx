import React from 'react';
import '../../../index.css';
import ShopByConditionMenu from '../ShopByConditionMenu/ShopByConditionMenu';
import useCondition from '../../../Hooks/useCondition';
import { Link } from 'react-router-dom';

const ShopByCondition = () => {
    const [conditionalItem] = useCondition();

    return (
        <section>
            <div className='flex justify-center'>
                <Link to="/category/shopByCondition">
                    <div className="divider md:w-[300px] w-60 mb-5 text-indigo-500 font-semibold hover:font-bold">Shop by condition</div>
                </Link>
            </div>
            <div className='flex justify-center flex-wrap gap-5 md:gap-2 mb-10'>
                {
                    conditionalItem.map(menu => <ShopByConditionMenu
                        key={menu._id}
                        menu={menu}
                    ></ShopByConditionMenu>)
                }
            </div>
        </section>
    );
};

export default ShopByCondition;