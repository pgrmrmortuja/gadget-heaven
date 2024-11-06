import React, { useEffect, useState } from 'react';
import Gadget from './Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Products');

    useEffect(() => {
        fetch("/gadget.json")
            .then(res => res.json())
            .then(data => setGadgets(data));
    }, []);

    // Function to filter gadgets based on the selected category
    const filterGadgets = () => {
        if (selectedCategory === 'All Products') {
            return gadgets;
        } else if (selectedCategory === 'Laptops') {
            return gadgets.filter(gadget => gadget.category === 'laptops');
        } else if (selectedCategory === 'Phones') {
            return gadgets.filter(gadget => gadget.category === 'phones');
        } else if (selectedCategory === 'Smart Watches') {
            return gadgets.filter(gadget => gadget.category === 'smart watches'); // Match the exact category
        } else {
            return []; // No data for other categories
        }
    };

    const filteredGadgets = filterGadgets();

    return (
        <div className="w-11/12 mx-auto p-4 mt-96 bg-white">
            {/* Section Heading */}
            <h2 className="text-2xl font-bold text-center mb-6">Explore Cutting-Edge Gadgets</h2>

            {/* Responsive Layout */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar (Categories) */}
                <aside className="lg:w-1/4 lg:h-96 w-full bg-white p-4 rounded-lg shadow-md">
                    <button onClick={() => setSelectedCategory('All Products')} className={`w-full py-2 mb-2 ${selectedCategory === 'All Products' ? 'text-white bg-purple-600' : 'bg-gray-200'} rounded-lg`}>
                        All Products
                    </button>
                    <button onClick={() => setSelectedCategory('Laptops')} className={`w-full py-2 mb-2 ${selectedCategory === 'Laptops' ? 'text-white bg-purple-600' : 'bg-gray-200'} rounded-lg`}>
                        Laptops
                    </button>
                    <button onClick={() => setSelectedCategory('Phones')} className={`w-full py-2 mb-2 ${selectedCategory === 'Phones' ? 'text-white bg-purple-600' : 'bg-gray-200'} rounded-lg`}>
                        Phones
                    </button>
                    <button onClick={() => setSelectedCategory('Accessories')} className={`w-full py-2 mb-2 ${selectedCategory === 'Accessories' ? 'text-white bg-purple-600' : 'bg-gray-200'} rounded-lg`}>
                        Accessories
                    </button>
                    <button onClick={() => setSelectedCategory('Smart Watches')} className={`w-full py-2 mb-2 ${selectedCategory === 'Smart Watches' ? 'text-white bg-purple-600' : 'bg-gray-200'} rounded-lg`}>
                        Smart Watches
                    </button>
                </aside>

                {/* Products Grid */}
                <div className="lg:w-3/4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGadgets.length > 0 ? (
                        filteredGadgets.map(gadget => (
                            <Gadget key={gadget.product_id} gadget={gadget} />
                        ))
                    ) : (
                        <p className="text-center text-red-600 font-bold text-2xl mt-32 ml-96">No Products Available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
