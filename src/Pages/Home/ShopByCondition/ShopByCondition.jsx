import '../../../index.css';
import ShopByConditionMenu from '../ShopByConditionMenu/ShopByConditionMenu';
import useCondition from '../../../Hooks/useCondition';

const ShopByCondition = () => {
    const [condition] = useCondition();

    return (
        <section>
            <div className='flex justify-center'>
                <div className="divider md:w-[300px] w-60 mb-5">Shop by condition</div>
            </div>
            <div className='flex justify-center flex-wrap gap-5 md:gap-2 mb-10'>
                {
                    condition.map(menu => <ShopByConditionMenu
                        key={menu._id}
                        menu={menu}
                    ></ShopByConditionMenu>)
                }
            </div>
        </section>
    );
};

export default ShopByCondition;