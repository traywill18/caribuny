"use client";

import { useEffect, useState } from "react";

interface Event {
  id: string;
  name: { text: string };
  description: { text: string };
  url: string;
  start: { local: string };
  end: { local: string };
}

export default function PartiesPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data: Event[] = await response.json();
        console.log("Events data:", data);
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 to-orange-300">
        <p className="text-lg text-gray-700 font-bold">Loading events...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-100 to-pink-200 py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center text-purple-600 mb-10 drop-shadow-md">
        Upcoming Events
      </h1>
      {Array.isArray(events) && events.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <li
              key={event.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {event.name.text}
              </h2>
              <p className="text-gray-600 mb-4">{event.description.text}</p>
              <p className="text-gray-700">
                <strong>Start:</strong>{" "}
                {new Date(event.start.local).toLocaleString()}
              </p>
              <p className="text-gray-700">
                <strong>End:</strong>{" "}
                {new Date(event.end.local).toLocaleString()}
              </p>
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-700 font-medium">
          No events found or an error occurred.
        </p>
      )}
    </div>
  );
}
