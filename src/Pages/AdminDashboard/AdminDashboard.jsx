import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col lg:flex-row md:justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="drawer-button mr-auto pl-1 lg:hidden"><FontAwesomeIcon icon={faBars} /><span className='ml-1'>Menu</span></label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <div className='mt-12 lg:mt-[-10px] flex justify-between items-center'>
                        <h3 className='py-2 lg:mt-0 text-2xl text-indigo-500'>Admin dashboard</h3>
                        <label className='text-xl text-red-500 font-bold lg:invisible' htmlFor="my-drawer-2" ><FontAwesomeIcon icon={faXmark} /></label>
                    </div>
                    <li><NavLink to="/adminDashboard/adminHome">Admin home</NavLink></li>
                    <li><NavLink to="/adminDashboard/allUsers">All users</NavLink></li>
                    <li><NavLink to="/adminDashboard/allPrescriptions">All prescriptions</NavLink></li>
                    <li><NavLink to="/adminDashboard/sexualWellnessItems">Sexual wellness</NavLink></li>
                    <li><NavLink to="/adminDashboard/birthControlItems">Birth control</NavLink></li>
                    <li><NavLink to="/adminDashboard/vitaminsAndSupplementsItems">Vitamins and supplements</NavLink></li>
                    <li><NavLink to="/adminDashboard/medicalDevicesItems">Medical devices</NavLink></li>
                    <li><NavLink to="/adminDashboard/personalCareItems">Personal care</NavLink></li>
                    <li><NavLink to="/adminDashboard/healthAndWellnessItems">Health And wellness</NavLink></li>
                    <li><NavLink to="/adminDashboard/babyCareItems">Baby care</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;