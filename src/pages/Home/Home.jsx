import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BBoss from "./BBoss";
import CallUs from "./CallUs";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Recomends from "./Recomends";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <BBoss />
            <PopularMenu />
            <CallUs />
            <Recomends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;