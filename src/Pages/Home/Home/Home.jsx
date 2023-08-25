import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="mt-16 w-full">
            <Helmet>
                <title>SHEFA</title>
            </Helmet>
            <h3>This is home.</h3>
        </div>
    );
};

export default Home;