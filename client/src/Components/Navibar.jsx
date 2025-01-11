import { Link } from 'react-router-dom';
import { useState } from 'react';
// Import React Icons
import { FaHome, FaInfoCircle, FaUsers, FaCalendarAlt, FaPhone, FaDonate, FaUserShield } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Church Name and Icon */}
        <div className="flex items-center space-x-4">
          {/* Icon for Church Logo */}
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex justify-center items-center text-white">
            <span className="text-2xl text-blue-800 font-bold">GR</span>
          </div>
          <h1 className="text-2xl font-bold">Gilgal Revival Church</h1>
        </div>

        {/* Desktop Menu (No Icons on Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition duration-300">About</Link>
          <Link to="/ministries" className="hover:text-blue-500 transition duration-300">Ministries</Link>
          <Link to="/events" className="hover:text-blue-500 transition duration-300">Events</Link>
          <Link to="/contact" className="hover:text-blue-500 transition duration-300">Contact</Link>
          <Link to="/giving" className="hover:text-blue-500 transition duration-300">Giving</Link>
          <Link to="/admin" className="hover:text-blue-500 transition duration-300">Admin</Link> {/* Admin Link */}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (visible on small screens) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 text-white py-4 space-y-4">
          <Link to="/" className="block text-center flex items-center hover:text-blue-500">
            <FaHome className="w-5 h-5 mr-2" />
            Home
          </Link>
          <Link to="/about" className="block text-center flex items-center hover:text-blue-500">
            <FaInfoCircle className="w-5 h-5 mr-2" />
            About
          </Link>
          <Link to="/ministries" className="block text-center flex items-center hover:text-blue-500">
            <FaUsers className="w-5 h-5 mr-2" />
            Ministries
          </Link>
          <Link to="/events" className="block text-center flex items-center hover:text-blue-500">
            <FaCalendarAlt className="w-5 h-5 mr-2" />
            Events
          </Link>
          <Link to="/contact" className="block text-center flex items-center hover:text-blue-500">
            <FaPhone className="w-5 h-5 mr-2" />
            Contact
          </Link>
          <Link to="/giving" className="block text-center flex items-center hover:text-blue-500">
            <FaDonate className="w-5 h-5 mr-2" />
            Giving
          </Link>
          <Link to="/admin" className="block text-center flex items-center hover:text-blue-500">
            <FaUserShield className="w-5 h-5 mr-2" /> {/* Admin icon */}
            Admin
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
