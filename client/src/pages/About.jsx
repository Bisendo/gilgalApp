import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navibar";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import pastorJohnImg from "../assets/images/pastor.jpg";
import pastorJaneImg from "../assets/images/pastor3.jpg";
import pastorImg2 from "../assets/images/pastor2.jpg"; // Additional images for background

const About = () => {
  // Array of background images
  const backgrounds = [pastorJohnImg, pastorJaneImg, pastorImg2];
  
  // State for the current background image
  const [bgImage, setBgImage] = useState(backgrounds[0]);

  // Effect to change the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prevBg) => {
        const currentIndex = backgrounds.indexOf(prevBg);
        const nextIndex = (currentIndex + 1) % backgrounds.length;
        return backgrounds[nextIndex];
      });
    }, 5000); // Change image every 5 seconds

    // Cleanup on component unmount
    return () => clearInterval(interval);
  });

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="pt-16 mt-8">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center min-h-[70vh] sm:min-h-screen flex items-center justify-center animate__animated animate__fadeIn animate__delay-1s"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Clickable Layer Linking to YouTube */}
          <a
            href="https://www.youtube.com/@gilgalrevivalchurch9305"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black opacity-0"
            aria-label="Visit our YouTube Channel"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-5xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-2s">
              About Us
            </h1>
            <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-3s">
              Dedicated to faith, community, and spiritual growth for all.
            </p>
            <div className="space-x-4">
              <a
                href="/services"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow-lg transform hover:scale-105 transition duration-300"
              >
                Join Our Services
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-400 font-semibold rounded shadow-lg transform hover:scale-105 transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Mission and Values Section */}
        <section className="py-16 px-6 text-center bg-white animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Our Mission, Vision & Values
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
            We are committed to inspiring, serving, and nurturing faith within
            our community while embracing love, compassion, and spiritual
            growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower individuals to lead a life filled with purpose and
                faith, while serving our community with integrity and
                compassion.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be a beacon of hope, love, and spiritual growth, fostering a
                supportive and inclusive community for all.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Values
              </h3>
              <p className="text-gray-600">
                We cherish love, integrity, community, service, and continuous
                growth as core values guiding every step of our faith journey.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 bg-gray-100 text-center animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {[
              {
                name: "Pastor John Doe",
                role: "Lead Pastor",
                image: pastorJohnImg,
                description:
                  "Pastor John has been leading the church with dedication and faith for over 10 years.",
              },
              {
                name: "Pastor Jane Smith",
                role: "Associate Pastor",
                image: pastorJaneImg,
                description:
                  "Pastor Jane is committed to mentoring and nurturing the next generation of leaders.",
              },
            ].map((leader) => (
              <div
                key={leader.name}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {leader.name}
                </h3>
                <p className="text-gray-600">{leader.role}</p>
                <p className="text-gray-500 mt-4">{leader.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-blue-800 text-white py-12 animate__animated animate__fadeIn animate__delay-4s">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
           
              <div>
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <ul>
                  <li>
                    <a href="/about" className="hover:text-gray-200">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/ministries" className="hover:text-gray-200">
                      Our Ministries
                    </a>
                  </li>
                  <li>
                    <a href="/events" className="hover:text-gray-200">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-gray-200">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                <p>
                  Email: info@church.com
                  <br />
                  Phone: +123 456 7890
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://web.facebook.com/gilgalrevival.church"
                    className="hover:text-gray-200"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://web.facebook.com/gilgalrevival.church"
                    className="hover:text-gray-200"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://web.facebook.com/gilgalrevival.church"
                    className="hover:text-gray-200"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="https://www.youtube.com/@gilgalrevivalchurch9305"
                    className="hover:text-gray-200"
                  >
                    <FaYoutube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
