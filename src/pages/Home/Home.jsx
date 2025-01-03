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