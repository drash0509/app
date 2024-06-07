import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div className="flex space-x-4">
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/add-product" className="text-white">Add Product</Link>
          <Link to="/show-product" className="text-white">Show Product</Link>
          <Link to="/account" className="text-white">Account</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
