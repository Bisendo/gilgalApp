import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Import images (you can replace these with actual event images)
import event1Image from '../assets/images/one.jpg';
import event2Image from '../assets/images/two.jpg';
import event3Image from '../assets/images/three.jpg';
import Navbar from '../Components/Navibar'; // Import Navbar

const EventsPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 rounded-lg mt-20" // Added margin-top to create space between Navbar and the image
        style={{ backgroundImage: `url(${event1Image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">
            Upcoming Events
          </h1>
          <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Join us for exciting and life-changing events.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Upcoming Events</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Don't miss out on the amazing events we have planned. From worship services to community outreach, there's something for everyone!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <img
              src={event1Image}
              alt="Event 1"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Worship Night</h3>
            <p className="text-gray-600 mb-4">
              Experience a night of powerful worship and fellowship. Bring your friends and family!
            </p>
            <p className="text-gray-500 mb-4">Date: January 10, 2025</p>
            <a
              href="/event-details"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              View More
            </a>
          </div>

          {/* Event 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <img
              src={event2Image}
              alt="Event 2"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Bible Study Fellowship</h3>
            <p className="text-gray-600 mb-4">
              Join our weekly Bible study for a deep dive into God's word. Strengthen your faith!
            </p>
            <p className="text-gray-500 mb-4">Date: January 15, 2025</p>
            <a
              href="/event-details"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              View More
            </a>
          </div>

          {/* Event 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <img
              src={event3Image}
              alt="Event 3"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community Outreach</h3>
            <p className="text-gray-600 mb-4">
              We're heading out to serve the community with love and care. Join us in making a difference!
            </p>
            <p className="text-gray-500 mb-4">Date: January 20, 2025</p>
            <a
              href="/event-details"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              View More
            </a>
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
                <li><a href="/about" className="text-white hover:text-white text-sm">About Us</a></li>
                <li><a href="/ministries" className="text-white hover:text-white text-sm">Our Ministries</a></li>
                <li><a href="/events" className="text-white hover:text-white text-sm">Events</a></li>
                <li><a href="/contact" className="text-white hover:text-white text-sm">Contact</a></li>
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
                <a href="https://facebook.com" className="text-white hover:text-white">
                  <FaFacebook size={24} />
                </a>
                <a href="https://instagram.com" className="text-white hover:text-white">
                  <FaInstagram size={24} />
                </a>
                <a href="https://twitter.com" className="text-white hover:text-white">
                  <FaTwitter size={24} />
                </a>
                <a href="https://linkedin.com" className="text-white hover:text-white">
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
  );
};

export default EventsPage;
