// Root.js

import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add item to cart with a toast notification
  const addToCart = (product) => {
    if (!cartItems.find(item => item.product_id === product.product_id)) {
      setCartItems([...cartItems, product]);
      toast.success(`${product.product_title} added to cart!`);
    } else {
      toast.info(`${product.product_title} is already in the cart.`);
    }
  };

  // Function to add item to wishlist with a toast notification
  const addToWishlist = (product) => {
    if (!wishlistItems.find(item => item.product_id === product.product_id)) {
      setWishlistItems([...wishlistItems, product]);
      toast.success(`${product.product_title} added to wishlist!`);
    } else {
      toast.info(`${product.product_title} is already in the wishlist.`);
    }
  };

  // Function to remove item from cart with a toast notification
  const removeFromCart = (productId) => {
    const item = cartItems.find(item => item.product_id === productId);
    if (item) {
      setCartItems(cartItems.filter(item => item.product_id !== productId));
      toast.warn(`${item.product_title} removed from cart.`);
    }
  };

  // Function to remove item from wishlist with a toast notification
  const removeFromWishlist = (productId) => {
    const item = wishlistItems.find(item => item.product_id === productId);
    if (item) {
      setWishlistItems(wishlistItems.filter(item => item.product_id !== productId));
      toast.warn(`${item.product_title} removed from wishlist.`);
    }
  };

  return (
    <div>
      <Navbar cartItems={cartItems} /> {/* Pass cartItems to Navbar */}
      <Outlet
        context={{
          cartItems,
          wishlistItems,
          addToCart,
          addToWishlist,
          removeFromCart,
          removeFromWishlist,
        }}
      />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Footer />
    </div>
  );
};

export default Root;
