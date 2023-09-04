import { Helmet } from "react-helmet-async";
import Carousel from '../Carousel/Carousel';
import FirstGrid from "../FirstGrid/FirstGrid";
import ShopByCondition from "../ShopByCondition/ShopByCondition";

const Home = () => {
    return (
        <div className="w-full">
            <Helmet>
                <title>SHEFA</title>
            </Helmet>
            <FirstGrid></FirstGrid>
            <Carousel></Carousel>
            <ShopByCondition></ShopByCondition>
        </div>
    );
};

export default Home;