import React, { useState } from 'react';
import Carts from './Carts';
import Wishlists from './Wishlists';
import { useOutletContext } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Dashboard = () => {

    const { cartItems, wishlistItems, removeFromCart, removeFromWishlist, addToCart } = useOutletContext();

    const [showCart, setShowCart] = useState(true);

    // Function to clear cart items
    const clearCartItems = () => {
        // Clear the cart items in the parent component
        cartItems.splice(0, cartItems.length); // Clear array in place
    };

    return (

        <div>
            <div className="bg-purple-500 text-white text-center py-10 px-6 rounded-lg shadow-lg mx-auto w-11/12">
                <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
                <p className="text-sm mb-6">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="flex items-center justify-center gap-4">
                    <button onClick={() => setShowCart(true)}
                        className={`font-semibold py-2 px-6 rounded-full ${showCart ? 'bg-white text-purple-500' : 'text-white border border-white'} hover:bg-purple-100`}
                    >
                        Cart
                    </button>

                    <button onClick={() => setShowCart(false)}
                        className={`font-semibold py-2 px-6 rounded-full ${!showCart ? 'bg-white text-purple-500' : 'text-white border border-white'} hover:bg-purple-100`}
                    >
                        Wishlist
                    </button>
                </div>

            </div>
            {showCart ? (
                <Carts cartItems={cartItems} removeFromCart={removeFromCart}  clearCartItems={clearCartItems}></Carts>
            ) : (
                <Wishlists wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} addToCart={addToCart}></Wishlists>
            )}
        </div>

    );
};

// Dashboard.propTypes = {}

export default Dashboard;
