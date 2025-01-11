import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navibar";
import { FaPlay, FaStop } from "react-icons/fa"; // Import Icons


const Home = () => {
  const [services, setServices] = useState([]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoId = "B9SpPMSHvmM";
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
  const iframeRef = useRef(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:4040/service");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  const toggleVideoPlayback = () => {
    if (iframeRef.current) {
      setIsVideoPlaying(!isVideoPlaying);
      iframeRef.current.src = isVideoPlaying
        ? `https://www.youtube.com/embed/${videoId}`
        : videoUrl;
    }
  };

  const renderServiceCard = (service) => (
    <div
      key={service.id}
      className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition duration-300"
    >
      {service.image ? (
        <img
          src={`http://localhost:4040${service.image}`}
          alt={service.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      ) : (
        <div className="w-full h-64 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <a
        href="/events"
        className="text-blue-600 hover:text-blue-800 transition duration-300"
      >
        View More
      </a>
    </div>
  );

  return (
    <div className="bg-gray-50">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Adjust content to account for fixed navbar */}
      <div className="pt-16 mt-8">
        {/* Hero Section with Embedded YouTube Video */}
        <section className="relative h-[70vh] sm:h-screen rounded-lg shadow-lg overflow-hidden">
          <iframe
            ref={iframeRef}
            className="absolute inset-0 w-full h-full"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
          <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Welcome to Our Church
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              We are a community of believers, growing in faith, love, and purpose.
            </p>
            <button
              onClick={toggleVideoPlayback}
              className="px-8 py-4 text-lg font-semibold bg-red-600 text-white rounded-full shadow-lg flex items-center gap-2 transform hover:scale-110 transition duration-300"
            >
              {isVideoPlaying ? <FaStop /> : <FaPlay />}
              {isVideoPlaying ? "Stop Video" : "Play Video"}
            </button>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-4 bg-white text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We exist to glorify God by reaching the lost, making disciples, and serving the community.
          </p>
          <a
            href="/ministries"
            className="px-8 py-4 text-lg font-semibold bg-blue-800 text-white rounded-full shadow-lg transform hover:scale-110 transition duration-300"
          >
            Discover Our Ministries
          </a>
        </section>

        {/* Featured Services */}
        <section className="py-16 px-8 bg-gray-100 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Join Us for Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.length > 0 ? (
              services.map((service) => renderServiceCard(service))
            ) : (
              <p className="text-gray-600">No services available at the moment.</p>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
