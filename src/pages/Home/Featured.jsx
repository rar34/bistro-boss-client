import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeaturedImg from "../../assets/home/featured.jpg"
import { Link } from "react-router-dom";
import "./featured.css"

const Featured = () => {
    return (
        <div className="bgImg text-white my-24">
            <div className="bg-black bg-opacity-65 bg-fixed pt-20">
                <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
                <div className="md:flex gap-6 justify-center items-center py-20 px-36">
                    <div className="">
                        <img className="" src={FeaturedImg} alt="" />
                    </div>
                    <div className="">
                        <p className="text-2xl">December 14, 2024</p>
                        <p className="text-2xl">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed impedit doloribus ut nam vel, error fugit deserunt voluptas! Ipsum doloremque recusandae, aspernatur animi dolores cum quia magnam sit. Veniam necessitatibus accusamus eaque consequatur cumque ratione corrupti placeat illum ea obcaecati! Vitae quia nemo ab necessitatibus! Enim dicta quaerat nesciunt necessitatibus?</p>
                        <Link to={"/"}><button className="text-xl font-medium border-b-2 hover:bg-black hover:text-white rounded-lg  uppercase border-black py-3 px-5">Read More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;