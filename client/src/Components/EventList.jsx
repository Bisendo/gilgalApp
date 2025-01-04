import React from 'react';

const EventList = ({ handleSelectEvent }) => {
  // Example static events data (replace with real data in production)
  const events = [
    { id: 1, title: 'Sunday Service', date: '2025-01-07', location: 'Church Hall' },
    { id: 2, title: 'Youth Conference', date: '2025-02-20', location: 'Main Auditorium' },
    { id: 3, title: 'Christmas Celebration', date: '2025-12-25', location: 'Church Grounds' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="text-left bg-gray-200">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td className="px-4 py-2">{event.title}</td>
              <td className="px-4 py-2">{event.date}</td>
              <td className="px-4 py-2">{event.location}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleSelectEvent(event)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
