import React from 'react';
import { Link } from 'react-router-dom';
import '../../../index.css';

import img1 from '../../../assets/ShopByConditionImages/image1.jpg'
import img2 from '../../../assets/ShopByConditionImages/image2.jpg'
import img3 from '../../../assets/ShopByConditionImages/image3.jpg'
import img4 from '../../../assets/ShopByConditionImages/image4.jpg'
import img5 from '../../../assets/ShopByConditionImages/image5.jpg'
import img6 from '../../../assets/ShopByConditionImages/image6.jpg'
import img7 from '../../../assets/ShopByConditionImages/image7.jpg'
import img8 from '../../../assets/ShopByConditionImages/image8.jpg'
import img9 from '../../../assets/ShopByConditionImages/image9.jpg'
import img10 from '../../../assets/ShopByConditionImages/image10.jpg'
import img11 from '../../../assets/ShopByConditionImages/image11.jpg'

const ShopByCondition = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div className="divider md:w-[300px] w-60 mb-5">Shop by condition</div>
            </div>
            <div className='flex justify-center flex-wrap gap-5 md:gap-2 mb-10'>
                <Link>
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
                </Link>
            </div>
        </div>
    );
};

export default ShopByCondition;