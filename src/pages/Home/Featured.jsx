import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeaturedImg from "../../assets/home/featured.jpg"
import { Link } from "react-router-dom";
import "./featured.css"

const Featured = () => {
    return (
        <div className="bgImg py-20 text-white">
            <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
            <div className="flex flex-col justify-center items-center my-24 max-w-screen-xl mx-auto md:flex-row gap-6">
                <div className="flex-1">
                    <img className="" src={FeaturedImg} alt="" />
                </div>
                <div className="flex-1">
                    <p className="text-2xl">December 14, 2024</p>
                    <p className="text-2xl">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed impedit doloribus ut nam vel, error fugit deserunt voluptas! Ipsum doloremque recusandae, aspernatur animi dolores cum quia magnam sit. Veniam necessitatibus accusamus eaque consequatur cumque ratione corrupti placeat illum ea obcaecati! Vitae quia nemo ab necessitatibus! Enim dicta quaerat nesciunt necessitatibus?</p>
                    <Link to={"/"}><button className="text-xl font-medium border-b-2 rounded-lg  uppercase border-black py-3 px-5">Read More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;