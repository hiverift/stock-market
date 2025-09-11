import React, { useEffect, useState, useRef } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Briefcase, Download, Edit } from 'lucide-react';
import { AiOutlineExclamationCircle, AiOutlinePhone, AiOutlineQuestionCircle, AiOutlineLock } from "react-icons/ai";
import { LuFileText } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { BiSolidArrowToTop } from "react-icons/bi";

const ProfileKYC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState(() => {
    const storedData = localStorage.getItem("user");
    return storedData ? JSON.parse(storedData) : null;
  });

  const aadharInputRef = useRef(null);
  const panInputRef = useRef(null);

  const handleFileUpload = (ref) => {
    ref.current.click();
  };

  // Example static data
  const accountSummary = {
    memberSince: "Aug 2024",
    coursesEnrolled: 12,
    webinarsAttended: 24,
    groupsJoined: 5,
    kycStatus: "Pending"
  };

  const paymentHistory = [
    { id: 1, course: "Advanced Options Trading Course", date: "2024-08-25", amount: "₹12,999", status: "Completed" },
    { id: 2, course: "Technical Analysis Webinar", date: "2024-08-20", amount: "₹999", status: "Completed" },
    { id: 3, course: "Elite Options Trading Circle (Monthly)", date: "2024-08-15", amount: "₹2,999", status: "Completed" }
  ];

  const tradingPreferences = {
    experience: "Intermediate (2-5 years)",
    investmentStyle: ["Day Trading", "Options Trading", "Long-term Investment"],
    riskTolerance: "Moderate"
  };

  // Sidebar
  const renderSidebar = () => (
    <div className="space-y-8">
      {/* Account Summary */}
      <div className="bg-gray-50 rounded-lg p-6 shadow border border-gray-300">
        <h3 className="text-lg text-gray-900 mb-6">Account Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between"><span className="text-sm text-gray-600">Member Since</span><span className="text-sm text-gray-900">{accountSummary.memberSince}</span></div>
          <div className="flex justify-between"><span className="text-sm text-gray-600">Courses Enrolled</span><span className="text-sm text-gray-900">{accountSummary.coursesEnrolled}</span></div>
          <div className="flex justify-between"><span className="text-sm text-gray-600">Webinars Attended</span><span className="text-sm text-gray-900">{accountSummary.webinarsAttended}</span></div>
          <div className="flex justify-between"><span className="text-sm text-gray-600">Groups Joined</span><span className="text-sm text-gray-900">{accountSummary.groupsJoined}</span></div>
          <hr />
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">KYC Status</span>
            <span className="inline-flex px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">{accountSummary.kycStatus}</span>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-gray-50 rounded-lg p-6 shadow border border-gray-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg text-gray-900">Payment History</h3>
          <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm">
            <Download className="w-4 h-4 mr-1" /> Export
          </button>
        </div>
        <div className="space-y-4">
          {paymentHistory.map(payment => (
            <div key={payment.id} className="border-b border-gray-200 pb-4 last:border-b-0">
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-gray-900 text-sm">{payment.course}</h4>
                <span className="text-gray-900 text-sm">{payment.amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-600">{payment.date}</p>
                <span className="inline-flex px-2 py-1 bg-green-100 text-green-800 rounded text-xs">{payment.status}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full h-10 mt-4 text-blue-600 hover:bg-yellow-400 text-md rounded-2xl">View All Payments</button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow p-4 hover:bg-yellow-100 transition-colors">
        <h1 className="text-lg text-gray-900 mb-4">Need Help?</h1>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-2 rounded hover:bg-yellow-200 cursor-pointer"><AiOutlinePhone className="w-5 h-5 text-blue-600" /><h1 className="text-sm font-medium text-gray-900">Contact Support</h1></div>
          <div className="flex items-center gap-3 p-2 rounded hover:bg-yellow-200 cursor-pointer"><AiOutlineQuestionCircle className="w-5 h-5 text-blue-600" /><h1 className="text-sm font-medium text-gray-900">FAQ Guide</h1></div>
          <div className="flex items-center gap-3 p-2 rounded hover:bg-yellow-200 cursor-pointer"><AiOutlineLock className="w-5 h-5 text-blue-600" /><h1 className="text-sm font-medium text-gray-900">Security Settings</h1></div>
        </div>
      </div>
    </div>
  );

  // Tabs
  const renderProfileTab = () => (
    <div className="space-y-8">
      {/* Personal Info */}
      <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg text-gray-900 mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoField label="Full Name" icon={<User />} value={profileData?.name} />
          <InfoField label="Email Address" icon={<Mail />} value={profileData?.email} />
          <InfoField label="Phone Number" icon={<Phone />} value={profileData?.mobile} />
          <InfoField label="Date of Birth" icon={<Calendar />} value={profileData?.dateOfBirth ?? 'Not provided'} />
          <InfoField label="Address" icon={<MapPin />} value={profileData?.address ?? 'Not provided'} />
          <InfoField label="Occupation" icon={<Briefcase />} value={profileData?.occupation ?? 'Not provided'} />
        </div>
      </div>

      {/* Trading Preferences */}
      <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg text-gray-900 mb-6">Trading Preferences</h3>
        <div className="mb-4">
          <p className="text-sm text-gray-600">Trading Experience</p>
          <h1 className="text-base text-gray-900">{tradingPreferences.experience}</h1>
        </div>
        <div className="mb-4">
          <h3 className="text-sm text-gray-600 mb-2">Investment Style</h3>
          <div className="flex flex-wrap gap-2">
            {tradingPreferences.investmentStyle.map((style, idx) => (
              <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full border border-indigo-200">{style}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm text-gray-600">Risk Tolerance</h3>
          <h1 className="text-base text-gray-900">{tradingPreferences.riskTolerance}</h1>
        </div>
      </div>
    </div>
  );

  const InfoField = ({ label, icon, value }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
        {React.cloneElement(icon, { className: "w-5 h-5 text-gray-400 mr-3" })}
        <span className="text-gray-900">{value ?? 'Not provided'}</span>
      </div>
    </div>
  );

  const renderKYCTab = () => (
    <div className="space-y-6">
      <h1 className="text-lg text-gray-900">KYC Verification Status</h1>
      <div className="flex items-center gap-2 bg-amber-100 border border-yellow-300 text-yellow-700 px-3 py-1.5 rounded-md shadow-sm">
        <AiOutlineExclamationCircle className="w-4 h-4" />
        <p className="text-xs font-medium">Pending Verification</p>
      </div>
      {/* Upload buttons */}
      <div className="space-y-4">
        <h1 className="text-lg text-gray-900">Upload Additional Documents</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <UploadButton refInput={aadharInputRef} label="Upload Aadhaar" />
          <UploadButton refInput={panInputRef} label="Upload PAN" />
        </div>
      </div>
    </div>
  );

  const UploadButton = ({ refInput, label }) => (
    <div className="flex-1">
      <input type="file" ref={refInput} className="hidden" onChange={(e) => alert(`${label} File: ${e.target.files[0]?.name}`)} />
      <button onClick={() => handleFileUpload(refInput)} className="w-full flex items-center justify-center gap-2 hover:bg-yellow-200 text-black py-5 rounded-lg shadow border border-gray-400">
        <BiSolidArrowToTop className="w-5 h-5" /> {label}
      </button>
    </div>
  );

  const renderActivityTab = () => (
    <div>
      <h3 className="text-lg text-gray-900 mb-6">Recent Activity</h3>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-3">
        <div className="flex items-center gap-3">
          <MdOutlineCalendarMonth className="w-6 h-6 text-yellow-300" />
          <div>
            <h1 className="text-sm font-medium text-gray-900">Joined webinar: Market Analysis Weekly</h1>
            <p className="text-xs text-gray-600">2024-08-29 at 2:30 PM</p>
          </div>
        </div>
        <span className="mt-2 sm:mt-0 inline-flex px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">Webinar</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="md:ml-64">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl text-gray-900">Profile & KYC</h1>
            <p className="text-gray-600 mt-1">Manage your account settings and verification status</p>
          </div>
          <button className="flex items-center px-4 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
            <Edit className="w-4 h-4 mr-2" /> Edit Profile
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          {["profile", "kyc", "activity"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              {tab === "profile" ? "Profile" : tab === "kyc" ? "KYC Status" : "Activity"}
            </button>
          ))}
        </div>

        {/* Content with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-lg">
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'kyc' && renderKYCTab()}
            {activeTab === 'activity' && renderActivityTab()}
          </div>
          <div>{renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileKYC;
