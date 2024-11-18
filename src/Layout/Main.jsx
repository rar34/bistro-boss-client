import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-250px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;