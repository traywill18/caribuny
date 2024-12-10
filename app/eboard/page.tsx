"use client";

import React from "react";
import Image from "next/image";

const EBoard = () => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-green-950 via-blue-950 to-neutral-950">
      <h1 className="text-3xl text-white font-extrabold text-center pt-10">
        THE EXECUTIVE BOARD OF THE CARIBBEAN UNITY CLUB
      </h1>

      <h4 className = "text-3xl text-white font-extrabold text-center pt-20">
      Meet the E-Board
      </h4>
      
      <div className="bg-gradient-to-r from-green-500 via-orange-500 to-pink-500 p-6 rounded-lg shadow-md mt-8 mx-4">
        <p className = "text-lg text-white font-semibold text-left pt-25">
          The Caribbean Unity Club is proudly led by a dynamic team of 9 E-Board members who work tirelessly to provide an exceptional college experience for all members. 
          With their diverse talents, backgrounds, and a shared passion for unity, the E-Board ensures that every event, meeting, and initiative reflects the vibrant culture of the Caribbean while fostering a sense of belonging and pride among students.
          </p>
        </div>

      {/* President Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-md mt-8 mx-4">
        <h2 className="text-3xl text-white font-extrabold mb-4">President (Prezzi)</h2>

        <div className="flex items-center gap-6">
          {/* President's Image with Border */}
          <div className="relative rounded-full p-3 bg-gradient-to-tr from-black via-green-500 to-yellow-500">
            <Image
              src="/Trai.jpg" // Ensure the image path is correct
              alt="Picture of the Current President"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>

          {/* Text Section */}
          <div>
            <p className="text-white text-lg">
             NAME : Trai Williams.
            </p>
            <p className="text-white text-lg">
             YEAR OF STUDY: Junior.
            </p>
            <p className="text-white text-lg">
             MAJOR : Compuer Science.
            </p>
            <p className="text-white text-lg">
              PROGRAMS/CLUBS ASSOCIATION/S: Caribbean Unity (Caribuny), ColorStackxComputer Science Club, U.M.L.P Crear Futuros, Lehman NABA.
            </p>
            <p className="text-white text-lg">
              GRADUATION YEAR: Spring 2025.
            </p>
            <p className="text-white text-lg">
              FAVOURITE FOOD: Fry Fish and Bammy (on a Good Day)
            </p>
            <p className="text-white text-lg">
              FAVOURITE MUSIC GENRE/S: Dancehall, Soca, Bouyon, Rap, Rnb
            </p>
            <p className="text-white text-lg">
              PASSION: Love to play hand drums. Specifically the Djembe drums.
            </p>
            <p className="text-white text-lg">
              FAVOURITE QUOTE: "MI MUMMA!!" "BUNDAWG!!"
            </p>
           
           
          </div>
          

        </div>
      </div>

      <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-6 rounded-lg shadow-md mt-8 mx-4">
        <h2 className="text-3xl text-white font-extrabold mb-4">Vice President (Twinkle Toes)</h2>
        <div className="flex items-center gap-6">
          {/* President's Image with Border */}
          <div className="relative rounded-full p-3 bg-gradient-to-tr from-green-400 via-yellow-400 via-red-400 via-black via-white">
            <Image
              src="/Ari.jpg" // Ensure the image path is correct
              alt="Picture of the Current Vice President"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>

          {/* Text Section */}
          <div>
            <p className="text-white text-lg">
             NAME : Aryanna "Ari" Chiraunjilal.
            </p>
            <p className="text-white text-lg">
             YEAR OF STUDY: Lower Senior.
            </p>
            <p className="text-white text-lg">
             MAJOR : Health Serivce Administration.
            </p>
            <p className="text-white text-lg">
              PROGRAMS/CLUBS ASSOCIATION/S: Caribbean Unity(Caribuny), U.M.L.P Crear Futuros, ACE.
            </p>
            <p className="text-white text-lg">
              GRADUATION YEAR: Spring 2025.
            </p>
            <p className="text-white text-lg">
              FAVOURITE FOOD: Chicken Curry with Dhal and Roti.
            </p>
            <p className="text-white text-lg">
              FAVOURITE MUSIC GENRE: Dancehall, Bollywood, Chutney Soca.
            </p>
            <p className="text-white text-lg">
              PASSION : Love to dance Traditional cultural dance.
            </p>
            <p className="text-white text-lg">
              FAVOURITE QUOTE: "OH MI MUMMA MAWN!!!"
            </p>
        </div>
        
      </div>
      
    </div>
    <div className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 p-6 rounded-lg shadow-md mt-8 mx-4">
        <h2 className="text-3xl text-white font-extrabold mb-4">Public Relation Manager (Yapperman)</h2>
        <div className="flex items-center gap-6">
          {/* President's Image with Border */}
          <div className="relative rounded-full p-3 bg-gradient-to-tr from-red-600 via-blue-600 to-white">
            <Image
              src="/Gabriel.jpg" // Ensure the image path is correct
              alt="Picture of the Current Public Relation Manager"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-white text-lg">
             NAME : Gabriel "Gabe" Bencosme.
            </p>
            <p className="text-white text-lg">
             YEAR OF STUDY: Upper Junior.
            </p>
            <p className="text-white text-lg">
             MAJOR : Latin America & Caribbean Studies.
            </p>
            <p className="text-white text-lg">
              PROGRAMS/CLUBS ASSOCIATION/S: Caribbean Unity (Caribuny), U.M.L.P, Crear Futuros, ACE, Arts & Humanities.
            </p>
            <p className="text-white text-lg">
              GRADUATION YEAR: Fall 2025.
            </p>
            <p className="text-white text-lg">
              FAVOURITE FOOD: Mangu with Cheese and Avocado .
            </p>
            <p className="text-white text-lg">
              FAVOURITE MUSIC GENRE: 90's - 2000's Hip Hop, Bachata, Rnb, Merengue, Caribbean Salsa, Reggaetón, Reggae, 90's Pop.
            </p>
            <p className="text-white text-lg">
              PASSION : Fitness workouts, Long walks, Creating Haikus, Traveling to new places, Making songs and Performing in Karaoke.
            </p>
            <p className="text-white text-lg">
              FAVOURITE QUOTE: “If you ever meet a Dominican, you are destined to marry that Dominican, no te hagas que tú sabes que andamos con pila de saoco manito”
            </p>
        </div>
          </div>
          </div>
    </main>
  );
};

export default EBoard;
