import Banner from "./Banner";
import BBoss from "./BBoss";
import CallUs from "./CallUs";
import Category from "./Category";
import PopularMenu from "./PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <BBoss />
            <PopularMenu />
            <CallUs />
        </div>
    );
};

export default Home;