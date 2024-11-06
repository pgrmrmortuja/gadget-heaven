import React from 'react';
import { useLoaderData, useParams, useOutletContext } from 'react-router-dom';
import wishImg from '../../assets/wishlist.png'
import cartImg from '../../assets/cart2.png'

const PdcDetails = () => {

    const { product_id } = useParams();
    const id = parseInt(product_id);
    const data = useLoaderData();

    // Ensure data is an array and find the gadget
    const gadget = Array.isArray(data) ? data.find(gadget => gadget.product_id === id) : null;

    // Handle case where gadget is not found
    if (!gadget) {
        return <div>Product not found</div>;
    }

    const { product_id: currentBookId, product_title, product_image, price, availability, Specification } = gadget;


    const { addToCart, addToWishlist } = useOutletContext();







    return (
        <section className=" py-8 w-11/12 mx-auto">
            {/* Header Section */}
            <div className=" bg-purple-500 text-white text-center pb-60 pt-16 mb-8">
                <h2 className="text-3xl font-bold">Product Details</h2>
                <p className=" mt-2">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                </p>

            </div>


            {/* Product Card Container */}
            <div className='border p-4 w-full md:w-4/6 md:ml-48 -mt-56'>
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 w-full">
                    {/* Product Image Placeholder */}
                    <div className="w-full md:w-1/3  bg-gray-300 rounded-lg h-60 mb-4 relative overflow-hidden">
                        <img className='absolute inset-0 w-full  object-cover' src={product_image} alt="" />
                    </div>

                    {/* Product Information */}
                    <div className="flex-1">
                        {/* Product Title and Price */}
                        <h3 className="text-2xl font-semibold"> {product_title} </h3>
                        <p className="text-xl font-bold text-gray-700 mt-2">Price: ${price}</p>

                        {/* Stock Status */}
                        <span className="inline-block mt-2 px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">In Stock</span>

                        {/* Product Description */}
                        <p className="text-gray-600 mt-4">
                            Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.
                        </p>

                        {/* Specifications */}
                        <div className="mt-4">
                            <h4 className="font-semibold">Specification:</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                {
                                    Specification.map(single =>
                                        <li>{single}</li>
                                    )
                                }
                            </ul>
                        </div>

                        {/* Rating and Buttons */}
                        <div className="flex items-center mt-4 space-x-4">
                            {/* Rating Stars */}
                            <div className="flex items-center space-x-1">
                                <span className="text-yellow-400 text-xl">★</span>
                                <span className="text-yellow-400 text-xl">★</span>
                                <span className="text-yellow-400 text-xl">★</span>
                                <span className="text-yellow-400 text-xl">★</span>
                                <span className="text-gray-300 text-xl">★</span>
                                <span className="text-gray-600 text-sm ml-1">(4.8)</span>
                            </div>

                            {/* Buttons */}
                            <button onClick={() => addToCart(gadget)} className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 9h13a1 1 0 001-1v-9H7zm5-5v6m4-6v6M9 21h6" />
                                </svg> */}
                                <img className='mr-1' src={cartImg} alt="" />
                                Add To Cart
                            </button>
                            <button onClick={() => addToWishlist(gadget)} className="p-2 text-gray-600 bg-white rounded-full hover:bg-gray-300 transition duration-300">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg> */}

                                <img src={wishImg} alt="" />
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

// PdcDetails.propTypes = {}

export default PdcDetails;
