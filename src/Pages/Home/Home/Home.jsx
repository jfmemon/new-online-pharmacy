import { Helmet } from "react-helmet-async";
import Carousel from '../Carousel/Carousel';
import FirstGrid from "../FirstGrid/FirstGrid";
import ShopByCondition from "../ShopByCondition/ShopByCondition";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SexualWellness from "../SexualWellness/SexualWellness";
import BirthControl from "../BirthControl/BirthControl";
import VitaminsAndSupplements from "../VitaminsAndSupplements/VitaminsAndSupplements";
import MedicalDevices from "../MedicalDevices/MedicalDevices";
import PersonalCare from "../PersonalCare/PersonalCare";
import HealthAndWellness from "../HealthAndWellness/HealthAndWellness";
import BabyCare from "../BabyCare/BabyCare";

const Home = () => {
    return (
        <div className="w-full">
            <Helmet>
                <title>SHEFA</title>
            </Helmet>
            <div className="w-full mt-16 mb-4 lg:my-[-24px] visible lg:invisible">
                <div className="relative">
                    <input type="text" placeholder="Search for health products" className="input input-md input-bordered w-full py-4 rounded-none bg-slate-100" />
                    <div className='absolute right-0 top-3 px-2 py-1 bg-white mr-4 rounded-lg'>
                        <Link to='/' className='flex items-center text-cyan-500'><FontAwesomeIcon icon={faSearch} /> </Link>
                    </div>
                </div>
            </div>
            <FirstGrid></FirstGrid>
            <Carousel></Carousel>
            <ShopByCondition></ShopByCondition>
            <SexualWellness></SexualWellness>
            <BirthControl></BirthControl>
            <VitaminsAndSupplements></VitaminsAndSupplements>
            <MedicalDevices></MedicalDevices>
            <PersonalCare></PersonalCare>
            <HealthAndWellness></HealthAndWellness>
            <BabyCare></BabyCare>
        </div>
    );
};

export default Home;