import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Navbar from './Navibar';
import givingImage from '../assets/images/giving-image.jpg'; // Import image for the background

const Giving = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [donationOption, setDonationOption] = useState(''); // State to track selected donation option

  // Function to open the modal with the selected donation option
  const openModal = (option) => {
    setDonationOption(option);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  const renderModalContent = () => {
    switch (donationOption) {
      case 'online':
        return (
          <div>
            <h4 className="font-semibold">1. Visit our Online Giving Platform</h4>
            <p className="text-gray-600">Go to our website and navigate to the "Give Now" section.</p>
            <h4 className="font-semibold">2. Choose Your Donation Amount</h4>
            <p className="text-gray-600">Select the amount you wish to donate and proceed to payment.</p>
            <h4 className="font-semibold">3. Complete Payment</h4>
            <p className="text-gray-600">Enter your payment details and submit the donation securely.</p>
          </div>
        );
      case 'bank':
        return (
          <div>
            <h4 className="font-semibold">1. Request Bank Details</h4>
            <p className="text-gray-600">Contact us to get our bank account details for the transfer.</p>
            <h4 className="font-semibold">2. Initiate Bank Transfer</h4>
            <p className="text-gray-600">Use your bank's online or in-person services to transfer funds.</p>
            <h4 className="font-semibold">3. Confirm Your Donation</h4>
            <p className="text-gray-600">Once the transfer is complete, let us know so we can confirm your donation.</p>
          </div>
        );
      case 'cash':
        return (
          <div>
            <h4 className="font-semibold">1. Visit Us During Service Hours</h4>
            <p className="text-gray-600">Come to our church office or service during specified hours.</p>
            <h4 className="font-semibold">2. Make the Donation</h4>
            <p className="text-gray-600">Hand your cash donation to our staff or designated volunteer.</p>
            <h4 className="font-semibold">3. Receive a Receipt</h4>
            <p className="text-gray-600">We will issue a receipt for your donation for your records.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50">
         <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="mt-24"> {/* Adjusted margin to separate Navbar and Hero section */}

      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${givingImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-5xl font-bold mb-4">Give to Support the Ministry</h1>
          <p className="text-xl mb-8">Your generosity helps us to continue serving the community and spreading the gospel.</p>
        </div>
      </section>
      </div>

      {/* Giving Options Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">How You Can Give</h2>
        <p className="text-lg text-gray-600 mb-8">
          There are many ways you can contribute to the ministry. Choose the option that works best for you!
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Option 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Online Giving</h3>
            <p className="text-gray-600 mb-4">
              Donate directly to our church using our secure online giving platform. It's quick and easy.
            </p>
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              onClick={() => openModal('online')} // Open modal with "online" option
            >
              Give Now
            </button>
          </div>

          {/* Option 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Bank Transfer</h3>
            <p className="text-gray-600 mb-4">
              You can also make a donation directly to our bank account. Contact us for more details.
            </p>
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              onClick={() => openModal('bank')} // Open modal with "bank" option
            >
              Contact Us
            </button>
          </div>

          {/* Option 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cash Donation</h3>
            <p className="text-gray-600 mb-4">
              Visit us in person to make a cash donation during service hours.
            </p>
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              onClick={() => openModal('cash')} // Open modal with "cash" option
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Modal (Popup) for giving details */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-white p-8 rounded-lg w-96 max-w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Giving Instructions</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your willingness to support our ministry. Please follow the steps below based on your chosen method:
            </p>
            {renderModalContent()}
            <div className="mt-6 flex justify-end">
              <button
                className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700"
                onClick={closeModal} // Close the modal when clicked
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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

export default Giving;
