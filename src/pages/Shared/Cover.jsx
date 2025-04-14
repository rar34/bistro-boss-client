
const Cover = ({img, title, subTitle}) => {
    return (
        <div
            className="hero min-h-[800px]"
            style={{
                backgroundImage: `url("${img}")`,
            }}>
            <div className="bg-black bg-opacity-65 p-10 md:px-80 rounded md:py-32">
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl uppercase font-fontCinzen font-semibold">{title}</h1>
                        <p className="mb-5 uppercase">
                            {subTitle}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cover;