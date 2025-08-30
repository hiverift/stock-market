
import { useState } from "react";
import { EnvelopeIcon, PhoneIcon, LockClosedIcon } from "@heroicons/react/24/outline";

function LoginPage() {
  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 text-sm">Sign in to access your dashboard</p>
        </div>

        {/* Tabs */}
        <div className="flex rounded-lg bg-gray-100 mb-6">
          <button
            onClick={() => setActiveTab("email")}
            className={`flex-1 py-2 text-sm font-medium rounded-lg ${
              activeTab === "email"
                ? "bg-white shadow text-gray-800"
                : "text-gray-500"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <EnvelopeIcon className="h-4 w-4" /> Email
            </div>
          </button>
          <button
            onClick={() => setActiveTab("mobile")}
            className={`flex-1 py-2 text-sm font-medium rounded-lg ${
              activeTab === "mobile"
                ? "bg-white shadow text-gray-800"
                : "text-gray-500"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <PhoneIcon className="h-4 w-4" /> Mobile
            </div>
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {activeTab === "mobile" && (
            <div>
              <label className="text-sm font-medium text-gray-700">Mobile Number</label>
              <div className="relative mt-1">
                <PhoneIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>
            </div>
          )}

          {activeTab === "email" && (
            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative mt-1">
                <EnvelopeIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <LockClosedIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a href="#" className="text-sm text-orange-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-medium py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="border-t my-6"></div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          New to CA ki Stock Market?{" "}
          <a href="#" className="text-yellow-600 font-medium hover:underline">
            Register here
          </a>
        </p>
      </div>

      {/* Security Note */}
      <p className="absolute bottom-4 text-xs text-gray-500 text-center px-4">
        Your data is protected with bank-level security
      </p>
    </div>
    
  );
}

export default LoginPage;