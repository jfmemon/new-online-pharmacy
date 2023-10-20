import { useState } from 'react';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faChartArea, faRightFromBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import useCart from '../../../Hooks/useCart';
import profilePicture from '../../../assets/user.png'


import img1 from '../../../assets/Category-logos/shopByCondition.png';
import img2 from '../../../assets/Category-logos/sexualWellness.png';
import img3 from '../../../assets/Category-logos/birthControl.png';
import img4 from '../../../assets/Category-logos/vitaminsSupplement.png';
import img5 from '../../../assets/Category-logos/medicalDevice.png';
import img6 from '../../../assets/Category-logos/personalCare.png';
import img7 from '../../../assets/Category-logos/healthAndWellness.png';
import img8 from '../../../assets/Category-logos/babyCare.png';
import useAdmin from '../../../Hooks/useAdmin';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    const [open, setOpen] = useState(false);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const closeDropdown = () => {
        setOpen(false);
    }

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Logout successful..!',
                    position: 'top',
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
                    text: `${error}`,
                    position: 'top'
                })
            })
    }

    return (
        <div className="navbar fixed top-0 left-0 z-20" style={{ backgroundColor: "#76D7C4" }}>
            <div className="navbar-start w-1/4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-square hover:border-zinc-50" onClick={() => setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    {
                        open && (
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52 gap-3">
                                <li>
                                    <Link to='/uploadPrescription' className='rounded-none' onClick={closeDropdown}>
                                        <span className='text-teal-500 items-center mt-2'><ion-icon name="cloud-upload" size="small"></ion-icon></span>
                                        <p>Upload prescription</p>
                                    </Link>
                                </li>
                                <div className="divider my-0 h-[1px]"></div>
                                <li><Link onClick={closeDropdown} to="/category/shopByCondition" className='rounded-none'><img className='w-5' src={img1} alt="Shop by condition" /> Shop by condition</Link></li>
                                <li><Link onClick={closeDropdown} to="/category/sexualWellness" className='rounded-none'><img className='w-5' src={img2} alt="Sexual wellness" /> Sexual wellness</Link></li>
                                <li><Link onClick={closeDropdown} to="/category/birthControl" className='rounded-none'><img className='w-5' src={img3} alt="Birth control" /> Birth control</Link></li>
                                <li><Link onClick={closeDropdown} to="/category/vitaminsAndSupplements" className='rounded-none'><img className='w-5' src={img4} alt="Vitamins and supplements" /> Vitamins and supplements</Link></li>
                                <li><Link onClick={closeDropdown} to="/category/medicalDevices" className='rounded-none'><img className='w-5' src={img5} alt="Medical devices" /> Medical devices</Link></li>
                                <li><Link onClick={closeDropdown} to="/category/personalCare" className='rounded-none'><img className='w-5' src={img6} alt="Personal care" /> Personal care</Link></li>
                                <li><Link onClick={closeDropdown} to="/category/healthAndWellness" className='rounded-none'><img className='w-5' src={img7} alt="Health and wellness" /> Health and wellness</Link></li>
                                <li><Link onClick={closeDropdown} to="/category/babyCare" className='rounded-none'><img className='w-5' src={img8} alt="Baby care" /> Baby care</Link></li>
                            </ul>
                        )
                    }
                </div>
                <Link to='/' className="btn btn-ghost pl-0 md:px-5 normal-case text-xl text-white font-bold hover:border-zinc-50"><FaHandHoldingMedical></FaHandHoldingMedical> SHEFA</Link>
            </div>
            <div className="navbar-center invisible lg:visible md:w-2/4 w-1/4">
                <div className='relative'>
                    <input type="text" placeholder="Search for health products" className="input input-sm input-bordered w-[680px] py-4 rounded-2xl" />
                    <div className='absolute right-0 top-1 px-2 py-1 bg-white mr-1 rounded-lg'>
                        <Link to='/' className='flex items-center text-cyan-500'><ion-icon name="search"></ion-icon></Link>
                    </div>
                </div>
            </div>
            <div className="navbar-end md:w-1/4 w-1/2 md:gap-5 gap-2 md:mr-3 mr-2">
                {
                    user ?
                        <>
                            <div className='lg:w-24 w-[80px] md:w-96 md:h-9 h-7 rounded-full flex items-center justify-between lg:mr-0 md:mr-6 mr-6'>
                                {
                                    user.photoURL ? <img className=' md:h-7 lg:w-9 lg:h-9 h-7 rounded-full' src={user?.photoURL} alt='' /> :
                                        <img className='md:h-7 lg:w-9 lg:h-9 h-7 rounded-full' src={profilePicture} alt="" />
                                    // <span className='text-2xl text-white'><FontAwesomeIcon icon={faUser} /></span>
                                }

                                <small className='pl-2 md:pl-2 lg:pl-0 text-white w-1/2 font-semibold leading-none'>{user.displayName}</small>
                            </div>
                            <span className='text-white text-xl btn btn-ghost md:px-3 px-3 hover:border-zinc-50 lg:ml-4 ml-5' title='Logout' onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} /></span>
                        </> :
                        <>
                            <Link to="/login"><span className='text-white text-xl mx-2 btn btn-ghost p-3 hover:border-zinc-50' title='Login/Sign Up'><FontAwesomeIcon icon={faUserPlus} /></span></Link>
                        </>
                }
                {
                    isAdmin ? <>
                        <div className="dropdown dropdown-end flex justify-center">
                            <label className="btn btn-ghost text-white px-[15px] hover:border-zinc-50" title='See dashboard' onClick={() => setOpen(!open)}>
                                <Link to="/adminDashboard/adminHome" className="indicator">
                                    <span className='text-xl'><FontAwesomeIcon icon={faChartArea} /></span>
                                </Link>
                            </label>
                        </div>
                    </> :
                        <><div className="dropdown dropdown-end flex justify-center">
                            <label className="btn btn-ghost text-white px-[15px] hover:border-zinc-50" title='See cart list' onClick={() => setOpen(!open)}>
                                <Link to="/userDashboard/userHome" className="indicator">
                                    <span className='text-xl'><FontAwesomeIcon icon={faCartShopping} /></span>
                                    <span className="badge badge-sm indicator-item text-gray-600">{cart?.length}</span>
                                </Link>
                            </label>
                        </div>
                        </>
                }
            </div>
        </div>
    );
}
export default Header;