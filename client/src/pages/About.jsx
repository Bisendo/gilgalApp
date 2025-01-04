import React from 'react';
import Navbar from '../Components/Navibar'; // Import Navbar
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Import images
import pastorJohnImg from '../assets/images/one.jpg'; 
import pastorJaneImg from '../assets/images/seven.jpg'; 

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <Navbar />
        </div>
      {/* Main Content */}
      <div className="pt-16 mt-8"> {/* Add padding to account for fixed Navbar */}
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center h-96 rounded-lg" 
          style={{ backgroundImage: `url(${pastorJohnImg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl mb-8">Get to know more about our mission, vision, and values.</p>
          </div>
        </section>

        {/* Our Leadership Section */}
        <section className="py-16 px-6 text-center bg-white">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our Leadership</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our leadership team is dedicated to guiding our church with wisdom, integrity, and passion for God's work.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Leadership Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
              <img 
                src={pastorJohnImg} 
                alt="Pastor John Doe" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pastor John Doe</h3>
              <p className="text-gray-600">Lead Pastor</p>
              <p className="text-gray-500 mt-4">
                Pastor John has been leading the church with dedication and faith for over 10 years. His passion for teaching the word of God is evident in every sermon he preaches.
              </p>
            </div>

            {/* Leadership Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
              <img 
                src={pastorJaneImg} 
                alt="Pastor Jane Smith" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pastor Jane Smith</h3>
              <p className="text-gray-600">Associate Pastor</p>
              <p className="text-gray-500 mt-4">
                Pastor Jane is committed to discipleship and works closely with the youth ministry. She has a heart for mentoring and nurturing the next generation of leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-700 text-white py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h4 className="text-xl font-semibold mb-4">About Us</h4>
                <p className="text-white text-sm">
                  We are a church committed to serving our community and growing in faith. Join us for our services and events.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <ul>
                  <li><a href="/about" className="text-white hover:text-gray-200 text-sm">About Us</a></li>
                  <li><a href="/ministries" className="text-white hover:text-gray-200 text-sm">Our Ministries</a></li>
                  <li><a href="/events" className="text-white hover:text-gray-200 text-sm">Events</a></li>
                  <li><a href="/contact" className="text-white hover:text-gray-200 text-sm">Contact</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                <p className="text-white text-sm">
                  Email: info@church.com <br />
                  Phone: +123 456 7890
                </p>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" className="text-white hover:text-gray-200">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://instagram.com" className="text-white hover:text-gray-200">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://twitter.com" className="text-white hover:text-gray-200">
                    <FaTwitter size={24} />
                  </a>
                  <a href="https://linkedin.com" className="text-white hover:text-gray-200">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-white mt-8">
              <p>&copy; 2025 Your Church Name. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
