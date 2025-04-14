import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover></Cover>
        </div>
    );
};

export default Menu;