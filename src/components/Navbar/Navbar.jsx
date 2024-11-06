import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cartImg from '../../assets/CartImg.png'

const Navbar = ({ cartItems }) => {
  const location = useLocation();

  // Determine the background color based on the route
  const isDefaultRoute = location.pathname === '/';

  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const linkClass = ({ isActive }) =>
    isActive ? 'text-green-600 font-bold text-xl ' : 'hover:text-gray-300 font-bold text-xl';

  const links = (
    <>
      <NavLink to="/" className={linkClass}>Home</NavLink>
      <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
      <NavLink to="/about" className={linkClass}>About Us</NavLink>
    </>
  );

  const mobLinkClass = ({ isActive }) =>
    isActive ? 'bg-purple-600 text-white font-bold' : 'hover:bg-purple-600 font-bold';

  const mobLinks = (
    <>
      <NavLink to="/" className={mobLinkClass}>Home</NavLink>
      <NavLink to="/dashboard" className={mobLinkClass}>Dashboard</NavLink>
      <NavLink to="/about" className={mobLinkClass}>About Us</NavLink>
    </>
  );

  return (
    <div className='w-11/12 mx-auto'>
      {/* Navbar Section */}
      <nav
        className={`py-4 px-6 md:px-12 flex justify-between items-center ${isDefaultRoute ? 'bg-purple-500 text-white' : 'bg-white text-black'
          }`}
      >
        {/* Logo */}
        <div className="text-xl font-bold">
          Gadget Heaven
        </div>

        {/* Menu Links - Hidden on mobile, shown on medium and larger screens */}
        <div className="hidden md:flex space-x-6">
          {links}
        </div>

        {/* Icons - visible on all screen sizes */}
        <div className="flex items-center space-x-4">
          {/* Cart Button with Conditional Item Count */}
          <button aria-label="Cart" className="relative p-2 rounded-full bg-white text-purple-500 hover:bg-gray-200">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 9h13a1 1 0 001-1v-9H7zm5-5v6m4-6v6M9 21h6" />
            </svg> */}
            <img src={cartImg} alt="" />
            {/* Show count only if cartItems has items */}
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>
          <button aria-label="Wishlist" className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-200">
            {/* Wishlist Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 016.364 0l.318.318.318-.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-8.682a4.5 4.5 0 010-6.364z" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button (only visible on small screens) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown (Hidden by default) */}
      {isMobileMenuOpen && (
        <div className={`${isDefaultRoute ? 'bg-purple-500 text-white' : 'bg-white text-purple-500'} md:hidden`}>
          {mobLinks}
        </div>
      )}
    </div>
  );
};

export default Navbar;
