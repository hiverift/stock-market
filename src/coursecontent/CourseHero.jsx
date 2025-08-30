import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiFilter } from "react-icons/ci";
import { FaStar, FaRegClock } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import cardImage from "../assets/image/card.jpg";

const coursesData = {
  live: [
    {
      id: 1,
      title: "Advanced Options Trading Masterclass",
      instructor: "CA Rahul Sharma",
      description:
        "Master advanced options strategies with live market analysis and hands-on practice sessions.",
      duration: "6 weeks",
      students: 245,
      rating: 4.8,
      startDate: "Sep 15, 2024",
      syllabus: [
        "Options Fundamentals & Greeks",
        "Advanced Strategies (Straddles, Strangles)",
        "Risk Management Techniques",
        "Live Market Analysis",
        "Portfolio Hedging",
      ],
      price: "₹12,999",
      image: cardImage,
      level: "Advanced",
    },
    {
      id: 2,
      title: "Technical Analysis Bootcamp",
      instructor: "CA Priya Patel",
      description:
        "Learn chart patterns, indicators, and technical analysis techniques with real-time examples.",
      duration: "4 weeks",
      students: 189,
      rating: 4.9,
      startDate: "Sep 20, 2024",
      syllabus: [
        "Chart Pattern Recognition",
        "Technical Indicators",
        "Support & Resistance",
        "Candlestick Patterns",
        "Risk Management",
      ],
      price: "₹8,999",
      image: cardImage,
      level: "Intermediate",
    },
  ],
  recorded: [
    {
      id: 3,
      title: "Stock Market Fundamentals",
      instructor: "CA Amit Kumar",
      description:
        "Complete beginner's guide to stock market investing with practical examples.",
      duration: "20 hours",
      students: 1250,
      rating: 4.7,
      startDate: "Self-Paced",
      syllabus: [
        "Introduction to Stock Markets",
        "Types of Securities",
        "Market Mechanics",
        "Trading Strategies",
        "Portfolio Basics",
        "Risk Management",
      ],
      price: "₹4,999",
      image: cardImage,
      level: "Beginner",
    },
  ],
};

function CourseHero() {
  const [activeTab, setActiveTab] = useState("live");

  return (
    <section className="bg-white mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-2xl text-gray-900 font-sans">
              Explore Our Courses
            </h2>
            <p className="text-gray-700 text-sm">
              Learn from expert CAs and master the stock market
            </p>
            <Link to="/courses" className="text-yellow-600 text-xs font-medium">
              Login required to enroll in courses
            </Link>
          </div>

          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
            <div className="flex items-center w-full sm:w-64 border border-gray-300 rounded-lg shadow-sm px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-gray-400">
              <CiSearch className="text-gray-500 mr-2" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full bg-transparent outline-none text-sm text-gray-800"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg shadow transition w-full sm:w-auto">
              <CiFilter size={20} />
              <span className="text-sm font-medium">Filter</span>
            </button>
          </div>
        </div>

        {/* CTA Box */}
        <div className="md:hover:bg-yellow-50 bg-yellow-100 border border-yellow-300 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-lg font-semibold text-gray-900">
              Ready to Start Learning?
            </h3>
            <p className="text-gray-700 text-sm">
              Create an account to enroll in courses and track your progress.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
            <Link
              to="/login"
              className="bg-white border border-gray-300 hover:bg-yellow-400 text-gray-900 px-3 py-2 rounded-lg shadow text-center transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg shadow text-center transition"
            >
              Sign Up Free
            </Link>
          </div>
        </div>

        {/* Tabs */}
       <div className="w-full">
  <div className="rounded-xl p-6">
    <div className="flex justify-around gap-2 bg-gray-200 py-2 px-2 rounded-full w-full mx-auto">
      <button
        onClick={() => setActiveTab("live")}
        className={`rounded-full text-sm font-medium transition w-[50%] py-2 ${
          activeTab === "live"
            ? "bg-white text-gray-900 shadow-sm"
            : "bg-transparent text-gray-600 hover:text-gray-800"
        }`}
      >
        Live Course
      </button>
      <button
        onClick={() => setActiveTab("recorded")}
        className={`rounded-full text-sm font-medium transition w-[50%] py-2 ${
          activeTab === "recorded"
            ? "bg-white text-gray-900 shadow-sm"
            : "bg-transparent text-gray-600 hover:text-gray-800"
        }`}
      >
        Recorded Course
      </button>
    </div>
  </div>
</div>


        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData[activeTab].map((course) => (
            <div
              key={course.id}
              className="rounded-xl shadow-md hover:shadow-lg transition flex flex-col relative min-h-[500px] overflow-hidden"
            >
              {/* Image with Text Overlay */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-44 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded">
                  {activeTab === "recorded" ? "Self-Paced" : "Live Course"}
                </div>
                <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {course.level}
                </div>
              </div>

              {/* Title & Instructor */}
              <div className="mt-3 px-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600">by {course.instructor}</p>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm mt-2 px-3 leading-snug line-clamp-2">
                {course.description}
              </p>

              {/* Meta Info */}
              <div className="flex gap-5 items-center text-xs text-gray-500 mt-2 px-3">
                <span className="flex items-center gap-1">
                  <FaRegClock /> {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <MdGroup /> {course.students}
                </span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" /> {course.rating}
                </span>
              </div>

              {/* Start Date */}
              <div className="mb-2 p-2 bg-yellow-50 rounded-lg mx-3 mt-2">
                <div className="flex items-center text-xs text-yellow-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  Starts: {course.startDate}
                </div>
              </div>

              {/* Syllabus */}
              <ul className="mt-2 text-xs text-gray-600 list-disc list-inside space-y-1 px-3">
                {course.syllabus.slice(0, 3).map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
                {course.syllabus.length > 3 && (
                  <li>+{course.syllabus.length - 3} more topics</li>
                )}
              </ul>

              <div className="mt-3 text-gray-600">
                <hr />
              </div>

              {/* Price + Buttons with extra padding for space */}
              <div className="mt-3 flex items-center justify-between gap-3 px-3 pb-4">
                <p className="text-gray-900 font-medium">{course.price}</p>
                <div className="flex gap-3">
                  <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg text-sm text-gray-800">
                    View Details
                  </button>
                  <button className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded-lg text-sm text-black">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseHero;
