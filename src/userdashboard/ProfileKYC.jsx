import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Briefcase, Download, Edit } from 'lucide-react';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuFileText } from "react-icons/lu";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { AiOutlineSecurityScan } from "react-icons/ai";






// import { BiSolidArrowToTop } from "react-icons/bi";

import  { useRef } from "react";
import { BiSolidArrowToTop } from "react-icons/bi";



const ProfileKYC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const aadharInputRef = useRef(null);
const panInputRef = useRef(null);

const handleFileUpload = (ref) => {
  ref.current.click();
};


  

  const profileData = {
    fullName: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 9876543210",
    dateOfBirth: "06/15/1985",
    address: "Mumbai, Maharashtra",
    occupation: "Software Engineer"
  };

  const accountSummary = {
    memberSince: "Aug 2024",
    coursesEnrolled: 12,
    webinarsAttended: 24,
    groupsJoined: 5,
    kycStatus: "Pending"
  };

  const paymentHistory = [
    {
      id: 1,
      course: "Advanced Options Trading Course",
      date: "2024-08-25",
      amount: "₹12,999",
      status: "Completed"
    },
    {
      id: 2,
      course: "Technical Analysis Webinar",
      date: "2024-08-20",
      amount: "₹999",
      status: "Completed"
    },
    {
      id: 3,
      course: "Elite Options Trading Circle (Monthly)",
      date: "2024-08-15",
      amount: "₹2,999",
      status: "Completed"
    }
  ];

  const tradingPreferences = {
    experience: "Intermediate (2-5 years)",
    investmentStyle: ["Day Trading", "Options Trading", "Long-term Investment"],
    riskTolerance: "Moderate"
  };

  // ✅ Common Sidebar (Account Summary + Payment History)
  const renderSidebar = () => (
    <div className="space-y-8">
      {/* Account Summary */}
      <div className="bg-gray-50 rounded-lg p-6 shadow border border-gray-300 ">
        <h3 className="text-lg  text-gray-900 mb-6">Account Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Member Since</span>
            <span className="text-sm  text-gray-900">{accountSummary.memberSince}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Courses Enrolled</span>
            <span className="text-sm  text-gray-900">{accountSummary.coursesEnrolled}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Webinars Attended</span>
            <span className="text-sm  text-gray-900">{accountSummary.webinarsAttended}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Groups Joined</span>
            <span className="text-sm  text-gray-900">{accountSummary.groupsJoined}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">KYC Status</span>
            <span className="inline-flex px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs ">
              {accountSummary.kycStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-gray-50 rounded-lg p-6  shadow border border-gray-300 ">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg  text-gray-900">Payment History</h3>
          <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm">
            <Download className="w-4 h-4 mr-1" />
            Export
          </button>
        </div>
        <div className="space-y-4">
          {paymentHistory.map((payment) => (
            <div key={payment.id} className="border-b border-gray-200 pb-4 last:border-b-0">
              <div className="flex justify-between items-start mb-1">
                <h4 className=" text-gray-900 text-sm">{payment.course}</h4>
                <span className=" text-gray-900 text-sm">{payment.amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-600">{payment.date}</p>
                <span className="inline-flex px-2 py-1 bg-green-100 text-green-800 rounded text-xs ">
                  {payment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full h-10 mt-4 text-blue-600 hover:bg-yellow-400 text-md rounded-2xl ">
          View All Payments
        </button>
      </div>

<div className="bg-white border border-gray-200 rounded-lg shadow p-4 hover:bg-yellow-100 transition-colors">
  <h1 className="text-lg  text-gray-900 mb-4">Need Help?</h1>

  <div className="space-y-3">
    {/* Contact Support */}
    <div className="flex items-center gap-3 p-2 rounded hover:bg-yellow-200 cursor-pointer">
      <AiOutlinePhone className="w-5 h-5 text-blue-600" />
      <h1 className="text-sm font-medium text-gray-900">Contact Support</h1>
    </div>

    {/* FAQ Guide */}
    <div className="flex items-center gap-3 p-2 rounded hover:bg-yellow-200 cursor-pointer">
      <AiOutlineQuestionCircle className="w-5 h-5 text-blue-600" />
      <h1 className="text-sm font-medium text-gray-900">FAQ Guide</h1>
    </div>

    {/* Security Settings */}
    <div className="flex items-center gap-3 p-2 rounded hover:bg-yellow-200 cursor-pointer">
      <AiOutlineLock className="w-5 h-5 text-blue-600" />
      <h1 className="text-sm font-medium text-gray-900">Security Settings</h1>
    </div>
  </div>
</div>



    </div>
  );

// ✅ Tab Renderers
// ✅ Tab Renderers
const renderProfileTab = () => (
  <div className="space-y-8">
    {/* Personal Information Card */}
    <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg  text-gray-900 mb-6">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <User className="w-5 h-5 text-gray-400 mr-3" />
            <span className="text-gray-900">{profileData.fullName}</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Mail className="w-5 h-5 text-gray-400 mr-3" />
            <span className="text-gray-900">{profileData.email}</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Phone className="w-5 h-5 text-gray-400 mr-3" />
            <span className="text-gray-900">{profileData.phone}</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Calendar className="w-5 h-5 text-gray-400 mr-3" />
            <span className="text-gray-900">{profileData.dateOfBirth}</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <MapPin className="w-5 h-5 text-gray-400 mr-3" />
            <span className="text-gray-900">{profileData.address}</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Briefcase className="w-5 h-5 text-gray-400 mr-3" />
            <span className="text-gray-900">{profileData.occupation}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Trading Preferences Card */}
    <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg  text-gray-900 mb-6">Trading Preferences</h3>

      {/* Trading Experience */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">Trading Experience</p>
        <h1 className="text-base  text-gray-900">{tradingPreferences.experience}</h1>
      </div>

      {/* Investment Style */}
      <div className="mb-4">
        <h3 className="text-sm text-gray-600 mb-2">Investment Style</h3>
        <div className="flex flex-wrap gap-2">
          {tradingPreferences.investmentStyle.map((style, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full border border-indigo-200"
            >
              {style}
            </span>
          ))}
        </div>
      </div>

      {/* Risk Tolerance */}
      <div>
        <h3 className="text-sm text-gray-600">Risk Tolerance</h3>
        <h1 className="text-base  text-gray-900">{tradingPreferences.riskTolerance}</h1>
      </div>
    </div>
  </div>
);



  const renderKYCTab = () => (




    

<div className="space-y-6">
  {/* KYC Status Header */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
    <h1 className="text-lg  text-gray-900">KYC Verification Status</h1>

    <div className="flex items-center gap-2 bg-amber-100 border border-yellow-300 text-yellow-700 px-3 py-1.5 rounded-md shadow-sm">
      <AiOutlineExclamationCircle className="w-4 h-4" />
      <p className="text-xs font-medium">Pending Verification</p>
    </div>
  </div>

  {/* Document Status */}
  <div>
    <h1 className="text-lg  text-gray-900 mb-4">Document Status</h1>

    {/* Aadhaar Card - 1 */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-3">
      <div className="flex items-center gap-3">
        <LuFileText className="w-6 h-6 text-gray-500" />
        <div>
          <h1 className="text-sm font-medium text-gray-900">Aadhaar Card</h1>
          <p className="text-xs text-gray-600">Identity verification</p>
        </div>
      </div>
      <span className="mt-2 sm:mt-0 inline-flex px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
        Pending
      </span>
    </div>

    {/* Aadhaar Card - 2 */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <LuFileText className="w-6 h-6 text-gray-500" />
        <div>
          <h1 className="text-sm font-medium text-gray-900">Aadhaar Card</h1>
          <p className="text-xs text-gray-600">Identity verification</p>
        </div>
      </div>
      <span className="mt-2 sm:mt-0 inline-flex px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
        Pending
      </span>
    </div>
  </div>

  {/* ✅ Verification Process Timeline */}
  <div>
    <h1 className="text-lg  text-gray-900 mb-4 ">Verification Process</h1>

    <div className="space-y-4 pl-3">
      {/* Step 1 */}
      <div className="flex items-start gap-3">
        <span className="w-3 h-3 mt-1 rounded-full bg-green-500"></span>
        <div>
          <p className="text-sm font-medium text-gray-900">Documents uploaded</p>
          <p className="text-xs text-gray-500">Aug 20, 2024</p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex items-start gap-3">
        <span className="w-3 h-3 mt-1 rounded-full bg-yellow-400"></span>
        <div>
          <p className="text-sm font-medium text-gray-900">Under review</p>
          <p className="text-xs text-gray-500">Currently being verified</p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex items-start gap-3">
        <span className="w-3 h-3 mt-1 rounded-full bg-gray-400"></span>
        <div>
          <p className="text-sm font-medium text-gray-900">Verification complete</p>
          <p className="text-xs text-gray-500">Pending final approval</p>
        </div>
      </div>



<div className="bg-yellow-100 border border-amber-300 h-30 shadow rounded-xl">
<div className="px-5 pt-5">

    <h className="1"> Add remark </h>
  <p className="">Documents under review by our team

</p>
</div>
</div>

 <div className="space-y-4">
      <h1 className="text-lg  text-gray-900">
        Upload Additional Documents
      </h1>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Aadhaar Upload */}
        <div className="flex-1">
          <input
            type="file"
            ref={aadharInputRef}
            className="hidden"
            onChange={(e) => alert(`Aadhaar File: ${e.target.files[0]?.name}`)}
          />
          <button
            onClick={() => handleFileUpload(aadharInputRef)}
            className="w-full flex items-center justify-center gap-2  hover:bg-yellow-200 text-black  py-5 rounded-lg shadow border border-gray-400"
          >
            <BiSolidArrowToTop className="w-5 h-5" />
            Upload Aadhaar
          </button>
        </div>

        {/* PAN Upload */}
        <div className="flex-1">
          <input
            type="file"
            ref={panInputRef}
            className="hidden"
            onChange={(e) => alert(`PAN File: ${e.target.files[0]?.name}`)}
          />
          <button
            onClick={() => handleFileUpload(panInputRef)}
            className="w-full flex items-center justify-center gap-2  hover:bg-yellow-200 text-black  py-5 rounded-lg shadow border border-gray-400"
          >
            <BiSolidArrowToTop className="w-5 h-5" />
            Upload PAN
          </button>
        </div>
      </div>
    </div>

<div className="mt-6">
  <h1 className="text-lg  text-gray-900 mb-4">Benefits of KYC Verification</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-green-100 border border-green-400 rounded-lg p-4 shadow-sm">



    {/* Benefit 1 */}
    <div className="flex gap-4 ">
      <span className="text-green-700 font-bold">✔</span>
      <p className="text-sm text-gray-900">Access to premium trading groups</p>
      
    </div>

    {/* Benefit 2 */}
    <div className="flex gap-4 ">
      <span className="text-green-700 font-bold">✔</span>
      <p className="text-sm text-gray-900">Buy/sell discussions in groups</p>
      
    </div>

    {/* Benefit 3 */}
    <div className="flex gap-4 ">
         <span className="text-green-700 font-bold">✔</span>
      <p className="text-sm text-gray-900">Enhanced security features</p>
   
    </div>

    {/* Benefit 4 */}
    <div className="flex gap-4 ">
      <span className="text-green-700 font-bold">✔</span>
      <p className="text-sm text-gray-900">Priority customer support</p>
      
    </div>
  </div>
</div>



    </div>
  </div>



</div>





  );



  const renderActivityTab = () => (
    <div>
      <h3 className="text-lg  text-gray-900 mb-6">Recent Activity</h3>


          {/* Joined webinar: Market Analysis Weekly - 1 */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-3">
      <div className="flex items-center gap-3 ">
        <MdOutlineCalendarMonth  className="w-6 h-6 text-yellow-300 bg-" />
        <div>
          <h1 className="text-sm font-medium text-gray-900">Joined webinar: Market Analysis Weekly</h1>
          <p className="text-xs text-gray-600">2024-08-29 at 2:30 PM

</p>
        </div>
      </div>
      <span className="mt-2 sm:mt-0 inline-flex px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
        Webinar
      </span>
    </div>

      {/* Joined webinar: Market Analysis Weekly - 2 */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-3">
      <div className="flex items-center gap-3">
        <LuFileText className="w-6 h-6 text-yellow-300" />
        <div>
          <h1 className="text-sm font-medium text-gray-900">Completed lesson: Risk Management Strategies</h1>
          <p className="text-xs text-gray-600">2024-08-28 at 10:15 AM

</p>
        </div>
      </div>
      <span className="mt-2 sm:mt-0 inline-flex px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
      Course
      </span>
    </div>

       {/* Joined webinar: Market Analysis Weekly - 3 */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-3">
      <div className="flex items-center gap-3">
        <CiUser  className="w-6 h-6 text-yellow-300" />
        <div>
          <h1 className="text-sm font-medium text-gray-900">Consultation session with CA Rajesh Kumar</h1>
          <p className="text-xs text-gray-600">2024-08-27 at 4:45 PM

</p>
        </div>
      </div>
      <span className="mt-2 sm:mt-0 inline-flex px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
     Consultation
      </span>
    </div>




       {/* Joined webinar: Market Analysis Weekly - 4 */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-3">
      <div className="flex items-center gap-3">
        <AiOutlineSecurityScan  className="w-6 h-6  text-yellow-300" />
        <div>
          <h1 className="text-sm font-medium text-gray-900">Joined Elite Options Trading Circle</h1>
          <p className="text-xs text-gray-600">2024-08-26 at 11:20 AM

</p>
        </div>
      </div>
      <span className="mt-2 sm:mt-0 inline-flex px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
    Group
      </span>
    </div>
    </div>
  );




  
  return (


    
    <div className="min-h-screen bg-gray-50 p-6">
      <div className=" md:ml-64">
        {/* Header */}



        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl  text-gray-900">Profile & KYC</h1>
            <p className="text-gray-600 mt-1">Manage your account settings and verification status</p>
          </div>
          <button className="flex items-center px-4 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </button>
        </div>




        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          {["profile", "kyc", "activity"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === "profile" ? "Profile" : tab === "kyc" ? "KYC Status" : "Activity"}
            </button>
          ))}
        </div>

        {/* Content with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div className="lg:col-span-2  rounded-lg   ">
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'kyc' && renderKYCTab()}
            {activeTab === 'activity' && renderActivityTab()}
          </div>
          <div className=''>{renderSidebar()}</div>
        </div>


      </div>
    </div>
  );
};

export default ProfileKYC;
