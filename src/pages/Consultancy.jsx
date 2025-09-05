import React from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiFilter } from "react-icons/ci";
import { FaChartLine, FaCogs, FaWallet, FaShieldAlt, FaFileInvoiceDollar, FaLightbulb, FaSearch, FaBalanceScale } from 'react-icons/fa';
// import { FaStar, FaClock, FaUserTie, FaLanguage, FaCalendarAlt } from 'react-icons/fa';
import { Star, Clock, MessageCircle, Phone, Lock } from 'lucide-react';
import { FaBook, FaUserAlt, FaTrophy } from "react-icons/fa";

import img1 from"../assets/image/image2.jpg"
import Navbar from "../components/Navbar";
import Footer from "./Footer";



const specializations = [
  { name: "Options Trading", icon: <FaChartLine />, active: true },
  { name: "Technical Analysis", icon: <FaCogs /> },
  { name: "Portfolio Management", icon: <FaWallet /> },
  { name: "Risk Assessment", icon: <FaShieldAlt /> },
  { name: "Tax Planning", icon: <FaFileInvoiceDollar /> },
  { name: "Investment Strategy", icon: <FaLightbulb /> },
  { name: "Market Research", icon: <FaSearch /> },
  { name: "Compliance/Legal", icon: <FaBalanceScale /> },
];



const Consultancy = ({ showFooter = true, fullWidth = false , compact = false }) => {
  return (

    <>
  
    <div
      className={`${
        fullWidth ? " md:ml-64 " : "max-w-7xl mx-auto"
      } px-4 sm:px-6 lg:px-8 pt-20 mb-16 space-y-8 font-sans`}
    >
      {/* ... baaki content ... */}


    <div className="">
      {/* Header + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-5">
        {/* Left Section */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-3xl md:text-2xl text-gray-900 font-sans">
          Expert Consultancy
          </h2>
          <p className="text-gray-700 text-sm">
            Get personalized guidance from qualified CAs
          </p>
          <Link
            to="/courses"
            className="text-yellow-600 text-xs font-medium hover:underline"
          >
            {/* Login required to enroll in courses */}
          </Link>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          {/* Search Box */}
          <div className="flex items-center w-full sm:w-64 border border-gray-300 rounded-lg shadow-sm px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-gray-400">
            <CiSearch className="text-gray-500 mr-2" size={20} />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full bg-transparent outline-none text-sm text-gray-800"
            />
          </div>
          {/* Filter Button */}
          <button className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg shadow transition w-full sm:w-auto">
            <CiFilter size={20} />
            <span className="text-sm font-medium">Filter</span>
          </button>
        </div>
      </div>

      {/* CTA Box */}
      {/* <div className="md:hover:bg-yellow-50 bg-yellow-100 border border-yellow-300 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition">
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-lg text-gray-900">
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
      </div> */}

{/* section  */}

     <section className="w-full  py-5">
  <h2 className="text-xl  text-gray-800 mb-8 text-left">
    Browse by Specialization
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {specializations.map((item, idx) => (
      <button
        key={idx}
        className={`flex flex-col items-center gap-3 px-4 py-3 rounded-lg shadow-sm border transition text-sm font-medium ${
          item.active
            ? "text-black"
            : "bg-white text-gray-700 hover:bg-yellow-400"
        }`}
      >
        <span className="text-lg">{item.icon}</span>
        {item.name}
      </button>
    ))}
  </div>
</section>



{/* next card  */}
  <div className=" py-5  ">
      <h1 className="text-2xl  text-gray-800 mb-6 ml-5">Available Consultants</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">


      {/* <div
  className={`bg-white rounded-lg shadow-md p-6 border border-gray-200 ${
    compact ? "w-[1595px] h-[206px]" : "w-full"
  }`}
> */}

        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start space-x-4">
            {/* Profile Image */}
            <div className="relative">
              <img 
                src={img1}
                alt="CA Rajesh Kumar"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            {/* Basic Info */}
            <div>
              <h2 className="text-xl  text-gray-900">CA Rajesh Kumar</h2>
              <p className="text-gray-600 mb-1">Options Trading & Risk Management</p>
              <p className="text-gray-500 text-sm">12 years experience</p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.9</span>
                  <span className="text-gray-500 text-sm">(156 reviews)</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">60 mins</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Availability Badge */}
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
            Available
          </span>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-700 text-sm leading-relaxed">
            With over 12 years in financial markets, I specialize in helping traders master options strategies while managing risk effectively. My approach combines technical expertise with practical market insights.
          </p>
        </div>
        
        {/* Areas of Expertise */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Areas of Expertise:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Advanced Options Strategies</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Risk Assessment & Management</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Portfolio Optimization</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Market Psychology</span>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex-1">
            {/* Languages */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Languages:</span></p>
              <p className="text-sm text-gray-700">Hindi, English</p>
            </div>
            
            {/* Meeting Options */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Meeting Options:</span></p>
              <div className="flex space-x-2">
                <MessageCircle className="w-4 h-4 text-gray-600" />
                <Phone className="w-4 h-4 text-gray-600" />
              </div>

              
            </div>
            
            {/* Next Available */}
            <div>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Next Available:</span></p>
              <p className="text-sm text-gray-700">Today 3:00 PM</p>
            </div>
          </div>
          
          {/* Price and Actions */}
          <div className="flex flex-col items-end space-y-3">
            <div className="text-right">
              <div className="text-2xl  text-gray-900">₹2,999</div>
              <div className="text-sm text-gray-500">per session</div>
            </div>
            
          



          </div>
        </div>
        
  <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 text-xs font-medium">
            View Profile
          </button>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-xs font-medium flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lock"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Book Now
          </button>
        </div>
      </div>
    </div>





{/* next card  2 */}
  <div className=" py-5  ">
      <h1 className="text-2xl  text-gray-800 mb-6 ml-5">Available Consultants</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start space-x-4">
            {/* Profile Image */}
            <div className="relative">
              <img 
                src={img1}
                alt="CA Rajesh Kumar"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            

            {/* Basic Info */}
            <div className="text-sm">
              <h2 className="text-xl  text-gray-900">CA Priya Sharma</h2>
              <p className="text-gray-600 mb-1">Technical Analysis & Chart Patterns</p>
              <p className="text-gray-500 text-sm">8 years experience</p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.9</span>
                  <span className="text-gray-500 text-sm">(89 reviews)</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">45 mins</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Availability Badge */}
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
            Available
          </span>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-700 text-sm leading-relaxed">
            I help traders develop strong technical analysis skills to identify profitable trading opportunities. My focus is on practical chart reading and developing systematic trading approaches.


          </p>
        </div>
        
        {/* Areas of Expertise */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Areas of Expertise:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Chart Pattern Recognition
</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Technical Indicators
</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Trend Analysis</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Entry/Exit Strategies
</span>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex-1">
            {/* Languages */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Languages:</span></p>
              <p className="text-sm text-gray-700">Hindi, English,Gujarati</p>
            </div>
            
            {/* Meeting Options */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Meeting Options:</span></p>
              <div className="flex space-x-2">
                <MessageCircle className="w-4 h-4 text-gray-600" />
                <Phone className="w-4 h-4 text-gray-600" />
              </div>

              
            </div>
            
            {/* Next Available */}
            <div>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Next Available:</span></p>
              <p className="text-sm text-gray-700">Today 3:00 PM</p>
            </div>
          </div>
          
          {/* Price and Actions */}
          <div className="flex flex-col items-end space-y-3">
            <div className="text-right">
              <div className="text-2xl  text-gray-900">₹2,499</div>
              <div className="text-sm text-gray-500">per session</div>
            </div>
            
          



          </div>
        </div>
        
  <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 text-xs font-medium">
            View Profile
          </button>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-xs font-medium flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lock"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Book Now
          </button>
        </div>
      </div>
    </div>


    {/* next card  3 */}
  <div className=" py-5  ">
      <h1 className="text-2xl  text-gray-800 mb-6 ml-5">Available Consultants</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start space-x-4">
            {/* Profile Image */}
            <div className="relative">
              <img 
                src={img1}
                alt="CA Rajesh Kumar"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            {/* Basic Info */}
            <div>
              <h2 className="text-xl  text-gray-900">CA Amit Patel</h2>
              <p className="text-gray-600 mb-1">Portfolio Management & Investment Planning

</p>
              <p className="text-gray-500 text-sm">15 years experience</p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.9</span>
                  <span className="text-gray-500 text-sm">(156 reviews)</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">90 mins</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Availability Badge */}
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
            Available
          </span>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-700 text-sm leading-relaxed">
I specialize in helping clients build robust investment portfolios tailored to their financial goals. My approach combines fundamental analysis with strategic asset allocation.

          </p>
        </div>
        
        {/* Areas of Expertise */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Areas of Expertise:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Portfolio Construction
</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Asset Allocation
</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Long-term Investment Strategy
</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Market Psychology</span>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex-1">
            {/* Languages */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Languages:</span></p>
              <p className="text-sm text-gray-700">Hindi, English</p>
            </div>
            
            {/* Meeting Options */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Meeting Options:</span></p>
              <div className="flex space-x-2">
                <MessageCircle className="w-4 h-4 text-gray-600" />
                <Phone className="w-4 h-4 text-gray-600" />
              </div>

              
            </div>
            
            {/* Next Available */}
            <div>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Next Available:</span></p>
              <p className="text-sm text-gray-700">Today 3:00 PM</p>
            </div>
          </div>
          
          {/* Price and Actions */}
          <div className="flex flex-col items-end space-y-3">
            <div className="text-right">
              <div className="text-2xl  text-gray-900">₹3499</div>
              <div className="text-sm text-gray-500">per session</div>
            </div>
            
          



          </div>
        </div>
        
  <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 text-xs font-medium">
            View Profile
          </button>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-xs font-medium flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lock"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Book Now
          </button>
        </div>
      </div>
    </div>


    <section className="w-full px-4 sm:px-6 lg:px-8 mt-10 mb-16 border border-gray-300 shadow-md ">
      <h2 className="text-xl pt-10 text-gray-800 mb-10 text-center ">
      How Consultancy Works

      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border py-10  border-none">
        {/* Expert Instructors */}
        <div className="flex flex-col items-center text-gray-700 gap-4  rounded-lg p-6  transition text-center">
          <FaBook className="text-5xl text-yellow-500" />
          <h3 className="text-xl ">1. Choose Expert
</h3>
          <p className="text-sm text-gray-600">
           Select from our verified CA consultants based on your specific needs and expertise required
          </p>
        </div>

        {/* Interactive Learning */}
        <div className="flex flex-col items-center text-gray-700 gap-4  rounded-lg p-6   transition text-center">
          <FaUserAlt className="text-5xl text-yellow-500" />
          <h3 className="text-xl ">2. Book Session
</h3>
          <p className="text-sm text-gray-600">
   Schedule at your convenient time and choose your preferred meeting type (video, phone, or in-person)

          </p>
        </div>

        {/* Proven Results */}
        <div className="flex flex-col items-center text-gray-700 gap-4  rounded-lg p-6   transition text-center">
          <FaTrophy className="text-5xl text-yellow-500" />
          <h3 className="text-xl ">3. Get Guidance

</h3>
          <p className="text-sm text-gray-600">
            Receive personalized advice, actionable insights, and clear next steps for your trading journey
          </p>
        </div>
      </div>
    </section>


    {/* subfooter  */}

<div className="w-full px-4 sm:px-6 lg:px-8 mt-10 mb-16 border border-gray-300 shadow-md text-center pt-10 pb-5  bg-gray-50">
  <div className=" mx-auto   p-6">
    <p className="text-center text-lg  mb-6 pb-5">Why Choose Our Consultants?</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Item 1 */}
      <div className="flex items-center gap-3 text-sm text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-check-big text-green-600 flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        <span>All consultants are verified CAs with proven track records</span>
      </div>

      {/* Item 2 */}
      <div className="flex items-center gap-3 text-sm text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-check-big text-green-600 flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        <span>Personalized advice tailored to your specific situation</span>
      </div>

      {/* Repeat Item 1 */}
      <div className="flex items-center gap-3 text-sm text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-check-big text-green-600 flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        <span>All consultants are verified CAs with proven track records</span>
      </div>

      {/* Repeat Item 2 */}
      <div className="flex items-center gap-3 text-sm text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-check-big text-green-600 flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        <span>Personalized advice tailored to your specific situation</span>
      </div>
    </div>
  </div>
</div>



    </div>
    



     
    </div>
     {showFooter && <Footer />}
       </>
  );
};

export default Consultancy ;