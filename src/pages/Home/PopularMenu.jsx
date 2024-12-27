import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import { Link } from "react-router-dom";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item=> item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])

    console.log(menu)
    return (
        <div>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={"Check it out"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 max-w-screen-xl mx-auto">
                {
                    menu.map(item => <MenuItem key={item._id} image={item.image} name={item.name} recipe={item.recipe} price={item.price}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={"/menu"}><button className="text-xl font-medium border-b-4 rounded-lg hover:bg-black hover:text-white  uppercase border-black py-4 px-7">View Full  Menu</button></Link>
            </div>
        </div>
    );
};

export default PopularMenu;