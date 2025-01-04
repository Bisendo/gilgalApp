import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navibar";
import Footer from "../Components/Footer"; // Import Footer component
// Import images
import heroImage from "../assets/images/pastor2.jpg";
import testimonial1Image from "../assets/images/pastor5.jpg";
import testimonial2Image from "../assets/images/one.jpg";

const Home = () => {
  const [services, setServices] = useState([]);

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

  return (
    <div>
      <div className="bg-gray-50">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <Navbar />
        </div>

        {/* Adjust content to account for fixed navbar */}
        <div className="pt-16 mt-8">
          {/* Hero Section with Parallax Effect */}
          <section
            className="relative bg-cover bg-center h-screen rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-lg"></div>{" "}
            {/* Gradient overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
              <h1 className="text-6xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
                Welcome to Our Church
              </h1>
              <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
                We are a community of believers, growing in faith, love, and purpose.
              </p>
              <a
                href="/about"
                className="px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-full shadow-lg transform hover:scale-110 transition duration-300 animate__animated animate__zoomIn"
              >
                Learn More About Us
              </a>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="py-16 px-4 bg-white text-center animate__animated animate__fadeIn animate__delay-2s">
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
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition duration-300"
                >
                  {/* Display service image dynamically */}
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
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 px-4 bg-white text-center animate__animated animate__fadeIn animate__delay-5s">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              What People Are Saying
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="bg-gray-200 p-6 rounded-lg max-w-xs mx-auto shadow-md hover:shadow-xl transition duration-300 animate__animated animate__fadeIn animate__delay-6s">
                <img
                  src={testimonial1Image}
                  alt="Testimonial 1"
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <p className="text-lg text-gray-600 mb-4">
                  "A wonderful church with a welcoming and loving community. I feel so blessed to be part of it!"
                </p>
                <p className="font-semibold text-gray-800">John Doe</p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg max-w-xs mx-auto shadow-md hover:shadow-xl transition duration-300 animate__animated animate__fadeIn animate__delay-6s">
                <img
                  src={testimonial2Image}
                  alt="Testimonial 2"
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <p className="text-lg text-gray-600 mb-4">
                  "The Bible study groups have helped me grow spiritually. I’ve made lifelong friends here!"
                </p>
                <p className="font-semibold text-gray-800">Jane Smith</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
