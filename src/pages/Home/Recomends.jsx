import SectionTitle from "../../components/SectionTitle/SectionTitle";
import cardImg from "../../assets/home/slide1.jpg"

const Recomends = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-[#F3F3F3]">
                    <figure>
                        <img className="w-[400px] rounded-lg h-72"
                            src={cardImg}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Caeser Salad</h2>
                        <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="px-7 py-4 border-b-2 border-[#BB8506] text-[#BB8506] text-xl font-medium uppercase bg-[#E8E8E8] rounded-lg">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#F3F3F3]">
                    <figure>
                        <img className="w-[400px] rounded-lg h-72"
                            src={cardImg}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Caeser Salad</h2>
                        <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="px-7 py-4 border-b-2 border-[#BB8506] text-[#BB8506] text-xl font-medium uppercase bg-[#E8E8E8] rounded-lg">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#F3F3F3]">
                    <figure>
                        <img className="w-[400px] rounded-lg h-72"
                            src={cardImg}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Caeser Salad</h2>
                        <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="px-7 py-4 border-b-2 border-[#BB8506] text-[#BB8506] text-xl font-medium uppercase bg-[#E8E8E8] rounded-lg">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recomends;