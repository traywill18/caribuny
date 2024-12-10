import Navbar from "./components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-tr from-yellow-400 via-orange-400 to-red-500 flex flex-col items-center justify-center px-6">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
            Welcome to the Caribbean Unity Club
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8">
            Celebrating culture, unity, and diversity through vibrant events, traditions, and connections.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { href: "/Vibes", label: "Island Vibes Playlist", bg: "bg-green-500" },
              { href: "/Map", label: "Map of the Caribbean", bg: "bg-yellow-400" },
              { href: "/Parties", label: "Carnival, Parades & Fetes", bg: "bg-blue-400" },
            ].map((button) => (
              <Link
                key={button.href}
                href={button.href}
                className={`${button.bg} text-white font-bold px-6 py-3 rounded-full hover:bg-opacity-80 transition duration-300`}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>



               {/* Recipe Button */}
               <div className="text-center mt-16">
            <Link
              href="/recipes"
              className="bg-purple-600 text-white font-bold px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300"
            >
              Explore Caribbean Recipes
            </Link>
          </div>
      

        {/* Footer */}
        <footer className="mt-60 text-white text-center text-sm">
          &copy; {new Date().getFullYear()} Caribbean Unity Club. All rights reserved.
        </footer>
      </main>
    </>
  );
}
