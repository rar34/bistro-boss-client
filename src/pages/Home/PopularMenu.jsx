import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const PopularMenu = () => {

    const [menu, setMenu] = useState('');

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={"Check it out"} />
        </div>
    );
};

export default PopularMenu;