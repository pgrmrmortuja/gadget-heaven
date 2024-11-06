import React from 'react';
// import PropTypes from 'prop-types';

const Wishlists = ({ wishlistItems, removeFromWishlist, addToCart }) => {
    return (
        <div className="bg-white p-6 rounded-lg mx-auto w-11/12">
            {/* Header Section */}
            <h1 className="text-xl font-semibold text-gray-800 mb-6">Wishlist</h1>

            {/* Wishlist Items */}
            <div className="space-y-4">
                {/* Item 1 */}
                {wishlistItems.map(item => (
                    <div key={item.product_id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-5">
                            <img src={item.product_image} alt={item.product_title} className="w-20 h-24 bg-gray-300 rounded mr-4" />
                            <div className='flex flex-col items-center justify-center'>
                                <h2 className="text-lg font-medium text-gray-800">{item.product_title}</h2>
                                <div className="text-lg font-semibold text-gray-800 mt-1 mb-2">Price: ${item.price}</div>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-purple-600"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <button onClick={() => removeFromWishlist(item.product_id)} className="text-red-500 text-2xl font-semibold hover:text-red-700">×</button>

                    </div>
                ))}


            </div>
        </div>
    );
};

// Wishlist.propTypes = {}

export default Wishlists;




{/* <div className="flex flex-col items-end space-y-2">
                        <button
                            className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-purple-600"
                        >
                            Add to Cart
                        </button>
                        <button className="text-red-500 text-2xl font-semibold hover:text-red-700">×</button>
                    </div> */}