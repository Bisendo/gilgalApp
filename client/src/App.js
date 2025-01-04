import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navibar';
import Home from './pages/Home';
import About from './pages/About';
import MinistriesPage from './pages/MinistriesPage';
import EventsPage from './pages/EventsPage';
import Contact from './pages/Contact';
import Giving from './Components/Giving';
import Dashboard from './Components/AdminDashboard';
import AdminLogin from './Components/AdminLogin';
import AdminEventPage from './Components/AdminEventPage';
import AdminMinistriesPage from './Components/AdminMinistries';
import ContactAdmin from './Components/ContactAdmin';
import AdminService from './Components/ServiceAdmin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100"> {/* Background color for full screen */}
        {/* <Navbar /> */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ministries" element={<MinistriesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Giving" element={<Giving />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/event" element={<AdminEventPage />} />
            <Route path="/admin/ministries" element = {<AdminMinistriesPage/>}/>
            <Route path="/admin/contacts" element = {<ContactAdmin/>}/>            
            <Route path="/admin/services" element = {<AdminService/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
