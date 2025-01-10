import React, { useState, useEffect } from "react";
import { FiHome, FiCalendar, FiUsers, FiLogOut, FiMail } from "react-icons/fi";
import { MdMenu, MdClose } from "react-icons/md";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totals, setTotals] = useState({ ministries: 0, services: 0, contacts: 0, events: 0 });
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const fetchTotals = async () => {
      setLoading(true);
      try {
        const endpoints = [
          "http://localhost:4040/ministries/count",
          "http://localhost:4040/service/count",
          "http://localhost:4040/contacts/count",
          "http://localhost:4040/events/count", // Added endpoint for total events
        ];

        const responses = await Promise.all(endpoints.map(url => fetch(url)));
        const data = await Promise.all(
          responses.map(res => (res.ok ? res.json() : { total: 0 }))
        );

        setTotals({
          ministries: data[0]?.total || 0,
          services: data[1]?.total || 0,
          contacts: data[2]?.total || 0,
          events: data[3]?.total || 0, // Set events count
        });
      } catch (error) {
        console.error("Error fetching totals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTotals();
  }, []);

  const menuItems = [
    { href: "/admin/dashboard", icon: <FiHome />, label: "Dashboard" },
    { href: "/admin/event", icon: <FiCalendar />, label: "Events" },
    { href: "/admin/ministries", icon: <FiUsers />, label: "Ministries" },
    { href: "/admin/services", icon: <FiCalendar />, label: "Services" },
    { href: "/admin/contacts", icon: <FiMail />, label: "Contact" },
    { href: "/admin", icon: <FiLogOut />, label: "Logout" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-blue-900 text-white w-64 z-50 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-6 flex items-center justify-between md:justify-center">
          <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          <button onClick={toggleSidebar} className="text-white text-2xl md:hidden">
            <MdClose />
          </button>
        </div>
        <nav className="mt-6">
          <ul className="space-y-4">
            {menuItems.map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center px-4 py-2 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  {item.icon}
                  <span className="ml-4">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64">
        {/* Navbar */}
        <header className="bg-blue-900 text-white p-4 flex items-center justify-between md:justify-end fixed top-0 left-0 w-full z-40">
          <button onClick={toggleSidebar} className="text-white text-2xl md:hidden">
            <MdMenu />
          </button>
          <h1 className="hidden md:block text-2xl font-semibold">Church Admin Dashboard</h1>
        </header>

        {/* Content */}
        <main className="pt-16 p-6">
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Total Ministries", count: totals.ministries, link: "/admin/ministries" },
              { title: "Total Services", count: totals.services, link: "/admin/services" },
              { title: "Total Contacts", count: totals.contacts, link: "/admin/contacts" },
              { title: "Total Events", count: totals.events, link: "/admin/event" }, // Added Total Events card
            ].map(item => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                {loading ? (
                  <p className="text-gray-600">Loading...</p>
                ) : (
                  <h3 className="text-3xl font-bold text-blue-900">{item.count}</h3>
                )}
                <p className="text-gray-600 mt-4">Manage all {item.title.toLowerCase()}.</p>
                <a
                  href={item.link}
                  className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View {item.title.split(" ")[1]}
                </a>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
