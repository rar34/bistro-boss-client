import bgImg from '../../assets/home/chef-service.jpg'


const BBoss = () => {
    return (
        <div
            className="hero my-24 max-w-screen-xl mx-auto"
            style={{
                backgroundImage: `url(${bgImg})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content p-10 md:p-16 text-center">
                <div className="bg-white text-black p-10">
                    <h1 className="mb-5 text-5xl font-fontCinzen uppercase"><span className='text-6xl'>B</span>istro <span className='text-6xl'>B</span>oss</h1>
                    <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BBoss;