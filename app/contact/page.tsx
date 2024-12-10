import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-teal-500 to-blue-700 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl">
        <div className="flex flex-col md:flex-row">
          {/* Left section */}
          <div className="md:w-1/2 bg-teal-600 text-white p-8 flex flex-col justify-center rounded-t-lg md:rounded-tr-none md:rounded-l-lg">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

            <div className="flex items-center relative rounded-full p-3">
              <Image
                src="/Caribuny_logo.png" // Ensure the image path is correct
                alt="Caribbean Unity Logo"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
            <p className="text-lg mt-6">
              We’d love to hear from you! Whether you have questions, feedback, or ideas to share, feel free to drop us a message.
            </p>
            <div className="mt-6 space-y-4">
              <p className="flex items-center gap-2">
                <span className="font-semibold">📍 Address:</span>
                <a
                  href="https://www.google.com/maps/place/250+Bedford+Park+Blvd+W,+Bronx,+NY+10468"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-teal-300"
                >
                  250 Bedford Park Blvd
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">📧 Email:</span>
                <a
                  href="mailto:caribunyleh@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-teal-300"
                >
                  caribunyleh@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">📸 Instagram:</span>
                <a
                  href="https://www.instagram.com/caribunyleh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-teal-300"
                >
                  @caribunyleh
                </a>
              </p>
            </div>
          </div>

          {/* Right section */}
          <div className="md:w-1/2 p-8">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5} // Changed from "5" to 5
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
