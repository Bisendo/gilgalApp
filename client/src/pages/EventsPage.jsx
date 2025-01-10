import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API requests
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Navbar from "../Components/Navibar"; // Import Navbar
import { Link } from "react-router-dom";

const EventsPage = () => {
  const [events, setEvents] = useState([]); // State to store events data
  const [loading, setLoading] = useState(true); // Loading state
  const videoId = "B9SpPMSHvmM"; // YouTube video ID

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:4040/events"); // Replace with your API endpoint
        setEvents(response.data); // Set the events data to the state
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchEvents(); // Fetch the events data on component mount
  }, []); // Empty array ensures this only runs once when the component is mounted

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options); // Format to "Day Month Year"
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message until data is fetched
  }

  return (
    <div className="bg-gray-50">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Hero Section with YouTube Thumbnail */}
      <section
        className="relative bg-cover bg-center h-96 rounded-lg mt-20"
        style={{
          backgroundImage: `url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "15px",
        }}
      >
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-lg"></div>
        </a>
        {/* Gradient overlay */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">
            Upcoming Events
          </h1>
          <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Join us for exciting and life-changing events.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 gap-4">
            <a
              href="/about"
              className="px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-full shadow-lg transform hover:scale-110 transition duration-300 animate__animated animate__zoomIn"
            >
              Learn More About Us
            </a>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg font-semibold bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center space-x-2 transform hover:scale-110 transition duration-300 animate__animated animate__zoomIn"
            >
              <FaYoutube size={20} />
              <span>Watch on YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Upcoming Events
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Don't miss out on the amazing events we have planned. From worship
          services to community outreach, there's something for everyone!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Map through events and display each one dynamically */}
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              {/* Ensure the image URL is correct */}
              <img
                src={
                  event.image
                    ? `http://localhost:4040/uploads/${event.image}`
                    : "/path/to/placeholder-image.jpg"
                } // Fallback placeholder image if no image
                alt={event.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <p className="text-gray-500 mb-4 text-xl font-semibold">
                {formatDate(event.date)}
              </p>{" "}
              {/* Display formatted date */}
              <a
                href={`/event-details/${event.id}`} // Link to the individual event details page
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                View More
              </a>
            </div>
          ))}
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
                We are a church committed to serving our community and growing
                in faith. Join us for our services and events.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul>
                <li>
                  <a
                    href="/about"
                    className="text-white hover:text-white text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/ministries"
                    className="text-white hover:text-white text-sm"
                  >
                    Our Ministries
                  </a>
                </li>
                <li>
                  <a
                    href="/events"
                    className="text-white hover:text-white text-sm"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-white hover:text-white text-sm"
                  >
                    Contact
                  </a>
                </li>
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
                <a
                  href="https://web.facebook.com/gilgalrevival.church"
                  className="text-white hover:text-white"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-white hover:text-white"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-white hover:text-white"
                >
                  <FaTwitter size={24} />
                </a>
                <Link
                  to="https://www.youtube.com/@gilgalrevivalchurch9305"
                  className="text-white hover:text-white"
                >
                  <FaYoutube size={24} />
                </Link>
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
