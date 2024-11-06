import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import sortImg from '../../assets/sort.png'


const Carts = ({ cartItems, removeFromCart, clearCartItems }) => {
    const [sortedItems, setSortedItems] = useState(cartItems);
    const [isSorted, setIsSorted] = useState(false);
    const [totalCost, setTotalCost] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Calculate the total cost whenever cartItems or sortedItems changes
        const cost = sortedItems.reduce((acc, item) => acc + item.price, 0);
        setTotalCost(cost);
    }, [sortedItems]);

    const handleSortByPrice = () => {
        // Sort by price in descending order if not already sorted, otherwise reset to original order
        const items = isSorted ? cartItems : [...cartItems].sort((a, b) => b.price - a.price);
        setSortedItems(items);
        setIsSorted(!isSorted); // Toggle sorting state
    };

    const handleRemoveFromCart = (productId) => {
        // Call the removeFromCart function
        removeFromCart(productId);
        // Update the sortedItems and totalCost after removing an item
        const updatedItems = sortedItems.filter(item => item.product_id !== productId);
        setSortedItems(updatedItems);
    };

    const handlePurchase = () => {
        setIsModalOpen(true); // Opens the modal
        // Do not clear sortedItems or totalCost here
    };


    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
        clearCartItems(); // Clear the cart items in the parent component
        setSortedItems([]); // Clear items after closing modal
        setTotalCost(0); // Reset cost after closing modal
        navigate('/'); // Navigate to home page
    };


    return (
        <div className="bg-white p-6 rounded-lg w-11/12 mx-auto">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold text-gray-800">Cart</h1>

                <div className="flex items-center justify-end gap-4 mb-6">
                    {/* Display Total Cost */}
                    <div className="text-xl font-semibold text-gray-800">Total cost: ${totalCost.toFixed(2)}</div>

                    
                        {/* Buttons for Sorting and Purchase */}
                        <button
                            onClick={handleSortByPrice}
                            className="flex items-center border border-purple-500 text-purple-500 font-semibold py-2 px-4 rounded-full hover:bg-purple-100"
                        >
                            Sort by Price
                            <img src={sortImg} alt="" />
                        </button>
                        
                    

                    <button
                        onClick={handlePurchase}
                        className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-purple-600"
                    >
                        Purchase
                    </button>
                </div>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
                {sortedItems.map(item => (
                    <div key={item.product_id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div className="flex items-center">
                            <img src={item.product_image} alt={item.product_title} className="w-16 h-16 bg-gray-300 rounded mr-4" />
                            <div>
                                <h2 className="text-lg font-medium text-gray-800">{item.product_title}</h2>
                                <div className="text-lg font-semibold text-gray-800 mt-1">Price: ${item.price}</div>
                            </div>
                        </div>
                        <button onClick={() => handleRemoveFromCart(item.product_id)} className="text-red-500 text-2xl font-semibold hover:text-red-700">×</button>
                    </div>
                ))}
            </div>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} total={totalCost} onClose={handleCloseModal} />
        </div>
    );
};

export default Carts;
