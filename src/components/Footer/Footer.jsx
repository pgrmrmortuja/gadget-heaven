import React from 'react';

const Footer = () => {
  return (
    <footer className="w-11/12 mx-auto bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center md:text-left">
        {/* Footer Heading and Tagline */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Gadget Heaven</h2>
          <p className="text-gray-500 mt-2">Leading the way in cutting-edge technology and innovation.</p>
          
        </div>


        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-8 md:space-y-0">
          {/* Services Column */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-gray-800">Product Support</a></li>
              <li><a href="#" className="hover:text-gray-800">Order Tracking</a></li>
              <li><a href="#" className="hover:text-gray-800">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-gray-800">Returns</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="hover:text-gray-800">Careers</a></li>
              <li><a href="#" className="hover:text-gray-800">Contact</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-gray-800">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
