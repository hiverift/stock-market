// src/pages/Consultancy.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiFilter } from "react-icons/ci";
import { Star, Clock, MessageCircle, Phone } from "lucide-react";
import { FaChartLine, FaCogs, FaWallet, FaShieldAlt, FaFileInvoiceDollar, FaLightbulb, FaSearch, FaBalanceScale, FaBook, FaUserAlt, FaTrophy } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import config from "../pages/config";

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

const Consultancy = ({ showFooter = true, fullWidth = false }) => {
  const [consultants, setConsultants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        const res = await fetch(`${config.BASE_URL}consultancies/getAllConsultancy`);
        const data = await res.json();
        setConsultants(data.result.items);
      } catch (err) {
        console.error("Error fetching consultants:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchConsultants();
  }, []);

  const filteredConsultants = consultants.filter((c) =>
    c.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className={`${fullWidth ? "md:ml-64" : "max-w-7xl mx-auto"} px-4 sm:px-6 lg:px-8 pt-20 mb-16 font-sans`}>
        {/* Header + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-5">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl md:text-2xl text-gray-900 font-sans">Expert Consultancy</h2>
            <p className="text-gray-700 text-sm">Get personalized guidance from qualified CAs</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <div className="flex items-center w-full sm:w-64 border border-gray-300 rounded-lg shadow-sm px-3 py-2 bg-white">
              <CiSearch className="text-gray-500 mr-2" size={20} />
              <input
                type="text"
                placeholder="Search consultants..."
                className="w-full bg-transparent outline-none text-sm text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg shadow transition w-full sm:w-auto">
              <CiFilter size={20} />
              <span className="text-sm font-medium">Filter</span>
            </button>
          </div>
        </div>

        {/* Specializations */}
        <section className="w-full py-5">
          <h2 className="text-xl text-gray-800 mb-8 text-left">Browse by Specialization</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {specializations.map((item, idx) => (
              <button
                key={idx}
                className={`flex flex-col items-center gap-3 px-4 py-3 rounded-lg shadow-sm border transition text-sm font-medium ${
                  item.active ? "text-black" : "bg-white text-gray-700 hover:bg-yellow-400"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        </section>

        {/* Consultants List */}
        <div className="py-5">
          <h1 className="text-2xl text-gray-800 mb-6 ml-5">Available Consultants</h1>
          {loading ? (
            <p className="text-gray-500 text-center">Loading consultants...</p>
          ) : filteredConsultants.length === 0 ? (
            <p className="text-gray-500 text-center">No consultants found.</p>
          ) : (
            filteredConsultants.map((c) => (
              <div key={c._id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <img
                        src={c.icon || "https://via.placeholder.com/64"}
                        alt={c.fullName}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      {c.status === "Available" && <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>}
                    </div>

                    <div>
                      <h2 className="text-xl text-gray-900">{c.fullName}</h2>
                      {c.specialization && <p className="text-gray-600 mb-1">{c.specialization}</p>}
                      {c.experience && <p className="text-gray-500 text-sm">{c.experience}</p>}
                      {c.rating && (
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{c.rating}</span>
                            {c.reviews && <span className="text-gray-500 text-sm">({c.reviews} reviews)</span>}
                          </div>
                          {c.duration && (
                            <div className="flex items-center space-x-1 text-gray-500">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{c.duration} mins</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {c.status && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${c.status === "Available" ? "bg-green-100 text-green-800" : "bg-gray-200 text-gray-600"}`}>
                      {c.status}
                    </span>
                  )}
                </div>

                {c.bio && <p className="text-gray-700 text-sm leading-relaxed mb-4">{c.bio}</p>}

                {/* Bottom Section */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex-1">
                    {c.languages && (
                      <div className="mb-2">
                        <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Languages:</span></p>
                        <p className="text-sm text-gray-700">{c.languages.join(", ")}</p>
                      </div>
                    )}
                    {c.meetingOptions && (
                      <div className="mb-2">
                        <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Meeting Options:</span></p>
                        <div className="flex space-x-2">
                          {c.meetingOptions.includes("Video Call") && <MessageCircle className="w-4 h-4 text-gray-600" />}
                          {c.meetingOptions.includes("Phone Call") && <Phone className="w-4 h-4 text-gray-600" />}
                        </div>
                      </div>
                    )}
                    {c.nextAvailable && (
                      <div>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Next Available:</span></p>
                        <p className="text-sm text-gray-700">{c.nextAvailable}</p>
                      </div>
                    )}
                  </div>

                  {c.pricePerSession && (
                    <div className="flex flex-col items-end space-y-1">
                      <div className="text-2xl text-gray-900">₹{c.pricePerSession}</div>
                      <div className="text-sm text-gray-500">per session</div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 mt-3">
                  <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 text-xs font-medium">View Profile</button>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-xs font-medium flex items-center justify-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    Book Now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {showFooter && <Footer />}
    </>
  );
};

export default Consultancy;
