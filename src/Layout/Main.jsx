import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const Main = () => {
    return (
        <div>
            <div className="min-h-[calc(100vh-250px)]">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;