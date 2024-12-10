import React from 'react';

const EventsPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-green-300 via-slate-200 to-teal-500">
      <header className="py-6">
        <h1 className="text-6xl text-white text-center font-extrabold">
          CARIBBEAN UNITY EVENTS
        </h1>
      </header>

      <div className="px-6 py-10">
        <h2 className="text-3xl text-white font-black mb-4">
          Our Events: Bringing Culture and Community to Life 🌴✨
        </h2>
        <p className="text-lg text-white font-medium leading-relaxed">
          The Caribbean Unity Club takes pride in hosting a diverse range of events that celebrate the richness of
          Caribbean culture, foster community, and provide unforgettable experiences for students. Each event is
          carefully curated to blend tradition, fun, and education, ensuring there's something for everyone to enjoy.
        </p>
      </div>

      {/* Event Rectangles in a Row */}
      <section className="px-6 py-10 flex justify-center gap-5">
        {/* First Event Rectangle */}
        <div className="relative w-80 h-48 rounded-lg overflow-hidden shadow-lg group">
          <img
            src="/Y2K.png" 
            alt="Event Preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-2xl font-bold">2024 Spring Events</h3>
          </div>
        </div>

        {/* Second Event Rectangle */}
        <div className="relative w-80 h-48 rounded-lg overflow-hidden shadow-lg group">
          <img
            src="/Game Day.jpg" 
            alt="Event Preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-2xl font-bold">2024 Fall Events</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventsPage;
