import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../index.css';
import useCart from '../../Hooks/useCart';

const UserDashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <h3 className=' py-3 text-2xl text-indigo-500'>User dashboard</h3>
                    <li><NavLink to="/userDashboard/myCart">My cart<span className="badge badge-sm indicator-item text-gray-600 font-bold">{cart?.length}</span></NavLink></li>
                    <li><NavLink to="/userDashboard/orderList">Order list</NavLink></li>
                    <li><NavLink to="/userDashboard/paymentHistory">Payment history</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default UserDashboard;