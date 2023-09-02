import React from 'react';

import img1 from '../../../assets/First-grid-images/image1.jpg';
import img2 from '../../../assets/First-grid-images/image2.jpg';
import img3 from '../../../assets/First-grid-images/image3.jpg';
import { Link } from 'react-router-dom';

const FirstGrid = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='relative'>
                <div className='firstImage'>
                    <img className='h-[340px] w-full opacity-75' src={img1} alt="" srcset="" />
                </div>
                <div className='absolute top-32 md:left-10 left-3 text-center'>
                    <h3 className='text-2xl text-yellow-200'>বাংলাদেশের যেকোন প্রান্তে</h3>
                    <h3 className='text-3xl bg-slate-400 p-3 font-semibold text-white rounded my-2'>ঔষধ পেতে অর্ডার করুন</h3>
                    <h3 className='text-2xl text-teal-400 font-semibold'>শেফা-তে</h3>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='relative'>
                    <img className='h-40 w-full' src={img2} alt="" srcset="" />
                    <Link to='/prescription' className='btn btn-sm border-warning bg-inherit hover:bg-warning hover:text-white text-warning absolute top-28 md:left-5 left-4'>Click Here</Link>
                </div>
                <div className='relative'>
                    <img className='h-40 w-full' src={img3} alt="" srcset="" />
                    <Link to='/medicalDevices' className='btn btn-sm border-warning bg-inherit hover:bg-warning hover:text-white text-warning absolute top-28 md:left-5 left-4'>View All</Link>
                </div>
            </div>
        </div>
    );
};

export default FirstGrid;