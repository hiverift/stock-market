import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaLock } from 'react-icons/fa';

const SignUp = () => {
  const [agreed, setAgreed] = useState(false);

  return (

    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
        <p className="text-sm text-gray-600">Join thousands of successful traders</p>
      </div>

      {/* Form Card */}
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        {/* Input Fields */}
        {[
          { label: 'Full Name', icon: <FaUser />, type: 'text', placeholder: 'Enter your full name' },
          { label: 'Email Address', icon: <FaEnvelope />, type: 'email', placeholder: 'Enter your email address' },
          { label: 'Mobile Number', icon: <FaPhoneAlt />, type: 'tel', placeholder: 'Enter your mobile number' },
          { label: 'Password', icon: <FaLock />, type: 'password', placeholder: 'Create a strong password' },
          { label: 'Confirm Password', icon: <FaLock />, type: 'password', placeholder: 'Confirm your password' },

        ].map((field, idx) => (
          <div key={idx} className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-1">{field.label}</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-500">
              <span className="text-gray-500 mr-2">{field.icon}</span>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full bg-transparent outline-none text-sm text-gray-700"
              />
            </div>
          </div>
        ))}

        {/* KYC Checkbox */}
        <div className="mb-4 flex items-start">
          <input type="checkbox" id="kyc" className="mt-1 mr-2 accent-yellow-500" />
          <label htmlFor="kyc" className="text-sm text-gray-700">
            I want to complete KYC now <span className="text-gray-500">(Optional - can be done later)</span>
          </label>
        </div>

        {/* Terms Checkbox */}
        <div className="mb-6 flex items-start">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 mr-2 accent-yellow-500"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </label>
        </div>

        {/* Create Account Button */}
     <button
  disabled={!agreed}
  className={`w-full py-2 rounded-md font-semibold shadow transition ${
    agreed
      ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
      : 'bg-yellow-400 text-gray-500 opacity-60 cursor-not-allowed'
  }`}
>
  Create Account
</button>

        {/* Sign In Link */}
        <p className="text-sm text-center mt-6">
          Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign In here</a>
        </p>

        {/* Footer Note */}
       
      </div>
       <p className="text-xs text-center text-gray-500 mt-4 pt-4">
          We use industry-standard encryption to protect your personal <br /> information
        </p>
    </div>
  );
};

export default SignUp;
