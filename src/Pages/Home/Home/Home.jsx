import { Helmet } from "react-helmet-async";
import Carousel from '../Carousel/Carousel';

const Home = () => {
    return (
        <div className="mt-16 w-full">
            <Helmet>
                <title>SHEFA</title>
            </Helmet>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;