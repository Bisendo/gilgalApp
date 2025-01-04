import React, { useState } from 'react';
import { FiHome, FiCalendar, FiUsers, FiLogOut, FiMail } from 'react-icons/fi'; // Added FiMail icon
import { MdMenu, MdClose } from 'react-icons/md';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-blue-800 text-white w-64 z-50 transition-transform transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="p-6 flex items-center justify-between md:justify-center">
          <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl md:hidden"
          >
            <MdClose />
          </button>
        </div>
        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <a
                href="/admin/dashboard"
                className="flex items-center px-4 py-2 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <FiHome className="text-xl mr-4" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/admin/event"
                className="flex items-center px-4 py-2 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <FiCalendar className="text-xl mr-4" />
                Events
              </a>
            </li>
            <li>
              <a
                href="/admin/ministries"
                className="flex items-center px-4 py-2 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <FiUsers className="text-xl mr-4" />
                Ministries
              </a>
            </li>
            <li>
              <a
                href="/admin/services"
                className="flex items-center px-4 py-2 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <FiCalendar className="text-xl mr-4" />
                Services
              </a>
            </li>
            <li>
              <a
                href="/admin/contacts"
                className="flex items-center px-4 py-2 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <FiMail className="text-xl mr-4" />
                Contact
              </a>
            </li>
            <li>
              <a
                href="/logout"
                className="flex items-center px-4 py-2 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <FiLogOut className="text-xl mr-4" />
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64">
        {/* Fixed Navbar */}
        <header className="bg-blue-800 text-white p-4 flex items-center justify-between md:justify-end fixed top-0 left-0 w-full z-40">
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl md:hidden"
          >
            <MdMenu />
          </button>
          <h1 className="hidden md:block text-2xl font-semibold">Church Admin Dashboard</h1>
        </header>

        {/* Content Section */}
        <main className="pt-16 p-6">
          {/* Adjusted padding to accommodate the fixed navbar */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Total Ministries</h3>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Total :{}</h3>

              <p className="text-gray-600 mb-4">
                View and manage all Ministries .
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                View Ministries
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4"> Total Service </h3>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Total :{}</h3>

              <p className="text-gray-600 mb-4">
                View and manage all services.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                View Services
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Total Contacts</h3>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Total :{}</h3>

              <p className="text-gray-600 mb-4">
                View  and manage  all Contacts.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                View Contacts
              </button>
            </div>
          </section>

        
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
