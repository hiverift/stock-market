// import React from 'react';
import { FaLock, FaPause,FaChartLine ,FaCogs ,FaWallet , FaShieldAlt ,FaFileInvoiceDollar ,FaLightbulb ,FaSearch ,FaBalanceScale,FaBook ,FaUserAlt ,FaTrophy ,} from 'react-icons/fa';
import { useState } from 'react';
// import React, { useState } from 'react';
import { Calendar, Clock, Users, Video, ChevronDown } from 'lucide-react';
import Footer from './Footer';

const Webinars = () => {
    const [activeTab, setActiveTab] = useState("upcoming");




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


     const webinars = [
    {
      id: 1,
      type: 'Free',
      level: 'All Levels',
      title: 'Market Analysis Weekly - Q3 2024 Review',
      instructor: 'by CA Rajesh Kumar & CA Priya Sharma',
      description: 'Comprehensive analysis of Q3 market trends, sector performance, and upcoming opportunities for the next quarter.',
      date: 'Today',
      time: '7:00 PM',
      registered: '1240 registered',
      duration: '90 minutes',
      topics: ['Market Trends', 'Sector Analysis', 'Q&A Session', '+1 more'],
      agenda: [
        'Market Overview & Key Highlights',
        'Sector-wise Performance Analysis',
        'Upcoming IPOs and Investment Opportunities',
        '+2 more topics'
      ],
      price: 'Free',
      priceValue: null
    },
    {
      id: 2,
      type: 'Paid',
      level: 'Advanced',
      title: 'Advanced Options Strategies Masterclass',
      instructor: 'by CA Amit Patel',
      description: 'Deep dive into advanced options strategies including straddles, strangles, and iron condors with live market examples.',
      date: 'Tomorrow',
      time: '6:00 PM',
      registered: '89 registered',
      duration: '120 minutes',
      topics: ['Options Strategies', 'Risk Management', 'Live Trading', '+1 more'],
      agenda: [
        'Advanced Options Theory',
        'Complex Strategy Implementation',
        'Risk Assessment Techniques',
        '+2 more topics'
      ],
      price: '₹999',
      priceValue: 999
    },
    {
      id: 3,
      type: 'Free',
      level: 'Beginner',
      title: 'Introduction to Stock Market Basics',
      instructor: 'by CA Neha Singh',
      description: 'Perfect for beginners looking to understand fundamental concepts of stock market investing and trading.',
      date: 'Monday',
      time: '7:30 PM',
      registered: '567 registered',
      duration: '75 minutes',
      topics: ['Market Basics', 'Investment Types', 'Portfolio Building', '+1 more'],
      agenda: [
        'Stock Market Fundamentals',
        'Types of Investments',
        'Building Your First Portfolio',
        '+2 more topics'
      ],
      price: 'Free',
      priceValue: null
    }
  ];
    
  return (
    <div className="pt-24"> {/* Push below navbar */}
      <div className="text-white text-center text-lg font-semibold mx-auto px-4 sm:px-6 lg:px-8 space-y-4 max-w-7xl">
        <div className="maindiv flex justify-between items-center border border-red-600 py-6 px-4 rounded-md shadow-sm bg-red-50">
          <div className="text-black text-left">
            <p className="font-semibold">Live Now: Market Opening Analysis</p>
            <p className="text-xs text-gray-600">892 people watching</p>
          </div>

      <button className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white font-medium py-1.5 px-3 rounded-md shadow-sm text-sm transition duration-200">
  <FaLock className="text-xs" />
  <FaPause className="text-xs" />
  <span>Join Live</span>
</button>

        </div>





          <div className="rounded-xl p-6">
      <div className="flex justify-around gap-2 bg-gray-200 py-2 px-2 rounded-full w-full mx-auto ">
        {/* Upcoming */}
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`rounded-full text-sm font-medium transition w-[33%]  ${
            activeTab === "upcoming"
              ? "bg-white text-gray-900 shadow-sm"
              : "bg-transparent text-gray-600 hover:text-gray-800"
          }`}
        >
          Upcoming
        </button>

        {/* Live */}
        <button
          onClick={() => setActiveTab("live")}
          className={`rounded-full text-sm font-medium transition w-[33%]  ${
            activeTab === "live"
              ? "bg-white text-gray-900 shadow-sm"
              : "bg-transparent text-gray-600 hover:text-gray-800"
          }`}
        >
          Live
        </button>

        {/* Recorded */}
        <button
          onClick={() => setActiveTab("recorded")}
          className={`rounded-full text-sm font-medium transition w-[33%]  ${
            activeTab === "recorded"
              ? "bg-white text-gray-900 shadow-sm"
              : "bg-transparent text-gray-600 hover:text-gray-800"
          }`}
        >
          Recorded
        </button>
      </div>
    </div>



    
   


       <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Upcoming Webinars</h1>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
          3 Available
        </span>
      </div>
      
{/* Webinar Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
  {webinars.map((webinar, index) => (
    <div
      key={webinar.id}
      className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden ${
        index === 2 ? "md:col-span-2 xl:col-span-1" : ""
      }`}
    >
      {/* Card Header */}
      <div className="p-4 sm:p-6">
        {/* Type and Level Badges */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex space-x-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              webinar.type === 'Free'
                ? 'bg-green-100 text-green-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              {webinar.type}
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
              {webinar.level}
            </span>
          </div>
        </div>

        {/* Title and Instructor */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {webinar.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{webinar.instructor}</p>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
          {webinar.description}
        </p>

        {/* Date, Time, and Stats */}
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{webinar.date}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{webinar.time}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1 text-gray-600">
              <Users className="w-4 h-4" />
              <span>{webinar.registered}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Video className="w-4 h-4" />
              <span>{webinar.duration}</span>
            </div>
          </div>
        </div>

        {/* Topics Covered */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Topics Covered:</h4>
          <div className="flex flex-wrap gap-1">
            {webinar.topics.map((topic, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Agenda */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Agenda:</h4>
          <ol className="space-y-1">
            {webinar.agenda.map((item, index) => (
              <li key={index} className="text-xs text-gray-700 flex">
                <span className="text-yellow-600 font-medium mr-2">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Card Footer */}
      <div className="bg-gray-50 px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {webinar.priceValue ? (
            <div className="text-lg font-bold text-gray-900">{webinar.price}</div>
          ) : (
            <div className="text-lg font-bold text-green-600">{webinar.price}</div>
          )}
          <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
            View Details
          </button>
        </div>

        <button className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
          webinar.type === 'Free'
            ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
            : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
        }`}>
          <span>{webinar.type === 'Free' ? 'Register Free' : 'Register Now'}</span>
        </button>
      </div>
    </div>
  ))}
</div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6">
        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
          <span>Show More Webinars</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>


               <section className="w-full  px-4 sm:px-6 lg:px-8">
  <h2 className="text-md font-bold text-gray-800 mb-8 text-left">
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


    <section className="w-full px-4 sm:px-6 lg:px-8 mt-10 mb-16 border border-gray-300 shadow-md ">
      <h2 className="text-xl font-bold text-gray-800 mb-10 text-center ">
      How Consultancy Works

      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border py-10  border-none">
        {/* Expert Instructors */}
        <div className="flex flex-col items-center text-gray-700 gap-4  rounded-lg p-6  transition text-center">
          <FaBook className="text-5xl text-yellow-500" />
          <h3 className="text-xl font-semibold">1. Choose Expert
</h3>
          <p className="text-sm text-gray-600">
           Select from our verified CA consultants based on your specific needs and expertise required
          </p>
        </div>

        {/* Interactive Learning */}
        <div className="flex flex-col items-center text-gray-700 gap-4  rounded-lg p-6   transition text-center">
          <FaUserAlt className="text-5xl text-yellow-500" />
          <h3 className="text-xl font-semibold">2. Book Session
</h3>
          <p className="text-sm text-gray-600">
   Schedule at your convenient time and choose your preferred meeting type (video, phone, or in-person)

          </p>
        </div>

        {/* Proven Results */}
        <div className="flex flex-col items-center text-gray-700 gap-4  rounded-lg p-6   transition text-center">
          <FaTrophy className="text-5xl text-yellow-500" />
          <h3 className="text-xl font-semibold">3. Get Guidance

</h3>
          <p className="text-sm text-gray-600">
            Receive personalized advice, actionable insights, and clear next steps for your trading journey
          </p>
        </div>
      </div>
    </section>



    </div>



<Footer/>
       </div>
  );
};

export default Webinars;
