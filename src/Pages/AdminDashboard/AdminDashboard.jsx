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
                    <li><NavLink to="/adminDashboard/allUsers">All Users</NavLink></li>
                    {/* <li><NavLink to="/userDashboard/myCart">My cart<span className="badge badge-sm indicator-item text-gray-600 font-bold">{cart?.length}</span></NavLink></li> */}
                    
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;