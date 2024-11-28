import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    console.log(menu)
    return (
        <div>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={"Check it out"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 max-w-screen-xl mx-auto">
                {
                    menu.filter(i=>i.category === 'popular').map(item => <MenuItem key={item._id} image={item.image} name={item.name} recipe={item.recipe} price={item.price}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;