
const MenuItem = ({ image, recipe, name, price }) => {
    return (
        <div className="">
            <div className="flex items-center justify-around gap-6">
                {/* image */}
                <div>
                    <img className="w-32 rounded-[0px_200px_200px_200px]" src={image} alt="" />
                </div>
                {/* content */}
                <div>
                    <h2 className="text-xl">{name}-------------------</h2>
                    <p className="text-gray-600">{recipe}</p>
                </div>
                {/* price */}
                <div>
                    <p className="text-xl text-[#BB8506]">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;