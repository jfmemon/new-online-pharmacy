import { useContext, useState } from 'react';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { Link, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Swal from 'sweetalert2';

import img1 from '../../../assets/Category-logos/shopByCondition.png';
import img2 from '../../../assets/Category-logos/sexualWellness.png';
import img3 from '../../../assets/Category-logos/birthControl.png';
import img4 from '../../../assets/Category-logos/vitaminsSupplement.png';
import img5 from '../../../assets/Category-logos/medicalDevice.png';
import img6 from '../../../assets/Category-logos/personalCare.png';
import img7 from '../../../assets/Category-logos/healthAndWellness.png';
import img8 from '../../../assets/Category-logos/babyCare.png';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    // const [cartOpen, setCartOpen] = useState(false);

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Logout successful..!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error}`
                })
            })
    }

    return (
        <div className="navbar fixed top-0 left-0 z-20" style={{ backgroundColor: "#76D7C4" }}>
            <div className="navbar-start w-1/3">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-square" onClick={() => setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    {
                        open && (
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52 gap-3">
                                <li><Link><img className='w-5' src={img1} alt="Shop by condition" /> Shop by condition</Link></li>
                                <li><Link><img className='w-5' src={img2} alt="Sexual wellness" /> Sexual wellness</Link></li>
                                <li><Link><img className='w-5' src={img3} alt="Birth control" /> Birth control</Link></li>
                                <li><Link><img className='w-5' src={img4} alt="Vitamins and supplements" /> Vitamins and supplements</Link></li>
                                <li><Link><img className='w-5' src={img5} alt="Medical devices" /> Medical devices</Link></li>
                                <li><Link><img className='w-5' src={img6} alt="Personal care" /> Personal care</Link></li>
                                <li><Link><img className='w-5' src={img7} alt="Health and wellness" /> Health and wellness</Link></li>
                                <li><Link><img className='w-5' src={img8} alt="Baby care" /> Baby care</Link></li>
                            </ul>
                        )
                    }
                </div>
                <Link to='/' className="btn btn-ghost pl-0 md:px-5 normal-case text-xl text-white font-bold"><FaHandHoldingMedical></FaHandHoldingMedical> SHEFA</Link>
            </div>
            <div className="navbar-center invisible md:visible w-1/3">
                <input type="text" placeholder="Search for health products" className="input input-sm input-bordered w-full md:w-96 " />
            </div>
            <div className="navbar-end w-1/3 md:gap-5">
                <Link to='/prescription'><span className='text-white mx-2 btn btn-ghost p-3' title='Upload prescription'><ion-icon name="cloud-upload" size="small"></ion-icon></span></Link>
                {
                    user ?
                        <><span className='text-white md:font-semibold font-normal mx-1'>{user?.displayName}</span>
                            <span className='text-white mx-2 btn btn-ghost p-3' title='Logout' onClick={handleLogout}><ion-icon name="log-out" size="small"></ion-icon></span>
                        </> :
                        <>
                            <Link to="/login"><span className='text-white mx-2 btn btn-ghost p-3' title='Login/Sign Up'><ion-icon name="person" size="small"></ion-icon></span></Link>
                        </>
                }
                <div className="dropdown dropdown-end flex justify-center">
                    <label tabIndex={0} className="btn btn-ghost text-white pl-2" title='See cart list' onClick={() => setOpen(!open)}>
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    {
                        open && (
                            <div tabIndex={0} className="mt-12 z-[1] card card-compact dropdown-content md:w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default Header;