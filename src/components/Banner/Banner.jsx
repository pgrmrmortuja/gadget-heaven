import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../../assets/banner.jpg';

const Banner = () => {

    const navigate = useNavigate();



    return (
        <section className="relative mx-auto w-11/12 bg-purple-500 text-white text-center  mb-64 pb-60 pt-16">
            <div className='p-5'>
                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-bold mb-7">
                    Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
                </h1>
                {/* Subheading */}
                <p className="text-lg md:text-xl mb-6">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the
                    coolest accessories, we have it all!
                </p>
                {/* Call to Action Button */}
                <button
                    onClick={() => navigate('dashboard')}
                    className="inline-block bg-white text-purple-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-200 mb-9"
                >
                    Shop Now
                </button>
            </div>


            {/* Image Section (Center Image) */}

            <div className="absolute border w-full md:w-1/2 lg:w-4/6 bg-gray-100 p-4 bg-transparent backdrop-blur-xl mb-20 -mt-1 md:ml-48 ">
                {/* Image Container with Rounded Corners */}
                {/* mx-80 md:w-3/5 lg:w-1/2*/}
                <img src={bannerImg} className="w-full rounded-lg shadow-lg" />
            </div>

        </section>
    );
};

// Banner.propTypes = {}

export default Banner;
