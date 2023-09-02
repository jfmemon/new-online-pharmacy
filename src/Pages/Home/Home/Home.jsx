import { Helmet } from "react-helmet-async";
import Carousel from '../Carousel/Carousel';
import FirstGrid from "../FirstGrid/FirstGrid";

const Home = () => {
    return (
        <div className="w-full">
            <Helmet>
                <title>SHEFA</title>
            </Helmet>
            <FirstGrid></FirstGrid>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;