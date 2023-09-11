import React, { useEffect, useState } from 'react';
import '../../../index.css';
import ShopByConditionMenu from '../ShopByConditionMenu/ShopByConditionMenu';

const ShopByCondition = () => {
    const [condition, setCondition] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/shopByCondition")
            .then(res => res.json())
            .then(data => {
                setCondition(data);
            })
    }, []);


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

                {/* <Link>
                    <div className='group'>
                        <img className='md:w-64 w-40' src={img1} alt="" />
                        <div className='text-center group-hover:underline'>Cough, Cold & Flue</div>
                    </div>
                </Link>
                <Link>
                    <div className='group'>
                        <img className='md:w-64 w-40' src={img2} alt="" />
                        <div className='text-center group-hover:underline'>Fever & Pain</div>
                    </div>
                </Link>
                <Link>
                    <div className='group'>
                        <img className='md:w-64 w-40' src={img3} alt="" />
                        <div className='text-center group-hover:underline'>Diabetes</div>
                    </div>
                </Link>
                <Link>
                    <div className='group'>
                        <img className='md:w-64 w-40' src={img4} alt="" />
                        <div className='text-center group-hover:underline'>Eye & Ear</div>
                    </div>
                </Link>
                <Link>
                    <div className='group'>
                        <img className='md:w-64 w-40' src={img5} alt="" />
                        <div className='text-center group-hover:underline'>Digestive Health</div>
                    </div>
                </Link>
                <Link>
                    <div className='group'>
                        <img className='md:w-64 w-40' src={img6} alt="" />
                        <div className='text-center group-hover:underline'>Allergy & Asthma</div>
                    </div>
                </Link>
                <Link>
                    <div className='group'>
                        <img className='md:w-64 w-40' src={img7} alt="" />
                        <div className='text-center group-hover:underline'>Blood Pressure & Heart <br /> Disease</div>
                    </div>
                </Link>
                <Link>
                    <div className='group'>
                        <img className='md:w-64 w-40' src={img8} alt="" />
                        <div className='text-center group-hover:underline'>Skin & Hair Condition</div>
                    </div>
                </Link>
                <Link>
                    <div className='group'>
                        <img className='md:w-64 w-40' src={img9} alt="" />
                        <div className='text-center group-hover:underline'>Infection</div>
                    </div>
                </Link>
                <Link>
                    <div className='group'>
                        <img className='md:w-64 w-40' src={img10} alt="" />
                        <div className='text-center group-hover:underline'>Neurological Condition</div>
                    </div>
                </Link>
                <Link>
                    <div className='group'>
                        <img className='md:w-64 w-40' src={img11} alt="" />
                        <div className='text-center group-hover:underline'>All Medicine</div>
                    </div>
                </Link> */}
            </div>
        </section>
    );
};

export default ShopByCondition;