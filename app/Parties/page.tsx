import React from 'react';
import { fetchEventbriteEvents, Event } from '../../lib/eventbrite';

export default async function PartiesPage() {
  let events: Event[] = [];

  try {
    events = await fetchEventbriteEvents();
    console.log(events); // Debug the fetched events
  } catch (error) {
    console.error('Error loading events:', error);
  }

  return (
    <div>
      <h1>All Events</h1>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <ul>
          {events.map((event: Event) => (
            <li key={event.id} className="border p-4 rounded-lg mb-4">
              <h2 className="text-lg font-bold">{event.name.text}</h2>
              <p>{event.description.text || 'No description available.'}</p>
              <p>
                <strong>Start:</strong>{' '}
                {new Date(event.start.local).toLocaleString()}
              </p>
              <p>
                <strong>End:</strong>{' '}
                {new Date(event.end.local).toLocaleString()}
              </p>
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Event
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
