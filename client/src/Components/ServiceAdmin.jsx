import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const AdminServicePage = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    image: null,
  });

  // Fetch services from the backend API
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

  // Handle creating a new service
  const handleCreateService = () => {
    setIsCreating(true);
  };

  // Handle selecting a service
  const handleSelectService = (service) => {
    setSelectedService(service);
    setIsCreating(false);
  };

  // Handle closing service details
  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  // Handle input changes for the new service form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setNewService({ ...newService, image: file });
  };

  // Handle service deletion
  const handleDeleteService = async (id) => {
    try {
      await axios.delete(`http://localhost:4040/service/${id}`);
      setServices(services.filter(service => service.id !== id)); // Remove deleted service from the state
      alert("Are you sure  want to delete")
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  // Handle service creation (POST)
  const handleSubmitService = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("title", newService.title);
    formData.append("description", newService.description);
    formData.append("image", newService.image);  // Image file instead of URL
    
    try {
      const response = await axios.post("http://localhost:4040/service", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type for file upload
        },
      });
      console.log("Service Created:", response.data);
      
      // Handle success: clear form or show success message
      setIsCreating(false);
      setNewService({ title: "", description: "", image: null });

      // Add the new service to the state with imageUrl
      setServices([...services, response.data]);
    } catch (error) {
      console.error("Error creating service:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex justify-between items-center p-6 bg-blue-800 text-white">
        <div className="flex items-center">
          <Link to="/admin/dashboard" className="flex items-center text-white hover:text-gray-300 transition-colors">
            <FiArrowLeft className="mr-2 text-xl" />
            <span className="hidden sm:block">Back to Dashboard</span>
          </Link>
        </div>
        <h1 className="text-2xl font-semibold">Manage Services</h1>
        <button
          onClick={handleCreateService}
          className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Create New Service
        </button>
      </div>

      {isCreating ? (
        <form onSubmit={handleSubmitService} className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Create New Service</h2>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-800">Service Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newService.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-800">Description</label>
            <textarea
              id="description"
              name="description"
              value={newService.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-800">Service Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Create Service
          </button>
        </form>
      ) : (
        <div className="space-y-4 p-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              {service.imageUrl && (
                <img src={`http://localhost:4040${service.imageUrl}`} alt={service.title} className="mt-4 w-full h-auto" />
              )}
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => handleSelectService(service)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleDeleteService(service.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <button onClick={handleCloseDetails} className="text-gray-600 hover:text-gray-800 mb-4">Close</button>
            <h2 className="text-2xl font-semibold mb-4">{selectedService.title}</h2>
            <p className="text-gray-700 mb-4">{selectedService.description}</p>
            {selectedService.image && (
              <img src={`http://localhost:4040${selectedService.image}`} alt={selectedService.title} className="mt-4 w-full h-auto" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminServicePage;
