import React from 'react';
import useCondition from '../../Hooks/useCondition';
import ShopByConditionMenu from '../Home/ShopByConditionMenu/ShopByConditionMenu';

const ShopByCondition = () => {
    const [conditionalItem] = useCondition();
    return (
        <div>
            <div className='flex justify-center'>
                <div className="divider md:w-[300px] w-60 mt-7">Shop by condition</div>
            </div>
            <div className='flex justify-center flex-wrap gap-5 md:gap-2 mb-10'>
                {
                    conditionalItem.map(menu => <ShopByConditionMenu
                        key={menu._id}
                        menu={menu}
                    ></ShopByConditionMenu>)
                }
            </div>
        </div>
    );
};

export default ShopByCondition;