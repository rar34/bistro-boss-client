import Banner from "./Banner";
import BBoss from "./BBoss";
import CallUs from "./CallUs";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Recomends from "./Recomends";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <BBoss />
            <PopularMenu />
            <CallUs />
            <Recomends />
        </div>
    );
};

export default Home;