import React from "react";
import heroImg from "../assets/image/one.jpg";

function Hero() {
  return (
    <section className="bg-yellow-50 py-12 mt-20 md:pt-24">
      {/* Matching container with Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-8">
          
          {/* Left Side Text Content */}
          <div className="flex-1 text-center md:text-left space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Trusted Partner <br /> in{" "}
              <span className="text-yellow-600">Legal & Secure <br /></span>
              <span className="text-yellow-600">Trading</span>
            </h1>
            <p className="text-gray-700 max-w-lg mx-auto md:mx-0">
              Learn, Earn & Grow with transparency. Master the stock market <br />
              with expert guidance from qualified CAs and build a solid foundation in legal, secure trading practices.
            </p>
            
            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start text-sm">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-lg shadow transition">
                📘 Explore Courses
              </button>
              <button className="bg-white border hover:bg-yellow-500 border-gray-300 text-gray-800 px-5 py-2 rounded-lg shadow transition">
                📝 Book Consultancy
              </button>
              <button className="bg-white border border-gray-300 hover:bg-yellow-500 text-gray-800 px-5 py-2 rounded-lg shadow transition">
                🎥 Join Webinar
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src={heroImg}
              alt="Trading Secure"
              className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
