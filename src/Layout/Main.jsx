import { Outlet, useLocation } from 'react-router-dom';
import Header from './../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import Contact from '../Components/Contact';

const Main = () => {
    const location = useLocation();
    
    // Define an array of routes where you want to hide the Contact component
    const hideContactRoutes = [
        '/adminDashboard/adminHome', 
        '/adminDashboard/allUsers', 
        '/adminDashboard/allOrders', 
        '/adminDashboard/allPrescriptions', 
        '/adminDashboard/sexualWellnessItems',
        '/adminDashboard/birthControlItems',
        '/adminDashboard/vitaminsAndSupplementsItems',
        '/adminDashboard/medicalDevicesItems',
        '/adminDashboard/personalCareItems',
        '/adminDashboard/healthAndWellnessItems',
        '/adminDashboard/babyCareItems',
        '/adminDashboard/allMessages',
        '/userDashboard/userHome',
        '/userDashboard/myCart',
        '/userDashboard/orderList',
        '/userDashboard/prescriptions',
        '/userDashboard/orderConfirm',
        '/userDashboard/messages',
        '/login',
        '/register'
    ];
    return (
        <div>
            <Header></Header>
            <div className='mt-16'>
                <Outlet></Outlet>
            </div>
            {/* Conditionally render Contact based on the current route */}
            {!hideContactRoutes.includes(location.pathname) && <Contact />}
            <Footer></Footer>
        </div>
    );
};

export default Main;