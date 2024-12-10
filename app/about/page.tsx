"use client"; // Only for App Router
import React from "react";

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-teal-400 via-green-400 to-blue-400 flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-white shadow-lg rounded-lg">
        {/* Left Column */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-md">
          <h1 className="text-3xl text-white font-extrabold mb-6 text-center">
            The Story of the Caribbean Unity Club
          </h1>
          <p className="text-lg text-white mb-4">
            Once upon a time in the lively halls of Bronx Community College, destiny brought together two spirited souls: Aryanna Chiraunjilal, proudly hailing from the land of waterfalls, Guyana, 
            and Trai Williams, bringing the vibes straight from Jamaica. It all started with a simple yet grand idea—why not create a club to celebrate the vibrant cultures of the Caribbean? Picture this: 
            dance sessions, deep discussions, and a good dose of friendly rivalry over which island had the best food and music (spoiler: it&apos;s all of them).
          </p>
          <p className="text-lg text-white mb-4">
            Aryanna, or &quot;Ari&quot; as her friends lovingly call her, and Trai spent hours plotting and scheming. But life, as it often does, threw them a curveball. 
            For one reason or another (fate? bad timing? too many doubles?), they never got around to starting the club at Bronx Community College. And honestly?
            That might’ve been the best thing that ever happened to them.
          </p>
          <p className="text-lg text-white mb-4">
            Fast forward to Lehman College, where the dream found new life. By their second semester, the dynamic duo got serious about making it happen. First order of business? The name. 
            They started with &quot;Caribbean Student Association,&quot; which, let&rsquo;s be honest, sounded about as exciting as a lecture on tax law. Trai couldn&rsquo;t let his legacy be tied to something so... bland.
          </p>
          <p className="text-lg text-white mb-4">
            Enter Aryanna, the idea queen. &quot;What about &apos;Caribbean Unity&apos;?&quot; she suggested, swapping out &quot;Association&quot; for something that actually sounded fun and welcoming. Trai loved it (after all, 
            the guy knows a good thing when he hears it). They nixed &quot;Student&quot; altogether to keep it fresh, bold, and universal. And just like that, Caribbean Unity Club was born—a name as memorable as a soca chorus.
          </p>
          <p className="text-lg text-white">
            Fast forward again, and Caribbean Unity Club has grown into one of Lehman College&apos;s most beloved clubs. With its infectious energy, iconic logo, and a calendar packed with events that range from
            dance-offs to cultural deep dives, it&rsquo;s no wonder people flock to it like it&apos;s Carnival. Under the leadership of their nine-member dream team of e-board members, the club has become the ultimate hub 
            for community, laughter, and unforgettable vibes.
          </p>
        </div>

        {/* Right Column */}
        <div className="bg-yellow-300 p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
            About the Caribbean Unity Club
          </h2>
          <div className="bg-yellow-200 p-4 rounded-lg shadow-inner">
            <p className="text-lg text-gray-800 mb-4">
              The Caribbean Unity Club is a vibrant and inclusive community that celebrates the rich and diverse cultures of the Caribbean.
              Our mission is to promote unity, cultural awareness, and shared experiences among students of Caribbean heritage and those
              who appreciate Caribbean traditions. Through events, meetings, and collaborations, we showcase the music, food, and history
              that define the Caribbean region.
            </p>
            <p className="text-lg text-gray-800">
              The club provides a welcoming space for students to connect, learn, and celebrate their identities while fostering friendships
              and building cross-cultural understanding within the wider campus community. Whether you&apos;re from the Caribbean or simply curious
              about its culture, the Caribbean Unity Club is your gateway to embracing and experiencing the heart of the Caribbean.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
