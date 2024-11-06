import React from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const Gadget = ({ gadget }) => {

    const {product_id, product_title, product_image, price } = gadget;





    return (
        <div className="bg-white border rounded-lg shadow-md p-4">
            <div className="h-60 bg-gray-200 rounded-lg mb-4 w-full relative overflow-hidden">
                <img className='absolute inset-0 w-full  object-cover' src={product_image} alt="" />
            </div>
            <h3 className="text-lg font-semibold mb-1">
                {product_title}
            </h3>
            <p className="text-gray-500 mb-4">Price: ${price}</p>

            <Link to={`/gadgets/${product_id}`}>
                <button className="w-full py-2 text-purple-600 border border-purple-600 rounded-lg">View Details</button>
            </Link>

        </div>
    )
}

// Gadget.propTypes = {}

export default Gadget