import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className="my-24 max-w-screen-xl mx-auto">
            <SectionTitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map(review => <SwiperSlide className="px-14" key={review._id}>
                        <div className="flex flex-col items-center space-y-4">
                            <FaQuoteLeft className="text-2xl md:text-5xl" />
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonials;