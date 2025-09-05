import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaHome, FaLock } from "react-icons/fa";

export default function CheckoutPage() {
  const location = useLocation();
  const course = location.state?.course;

  const [step, setStep] = useState("details");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    fullAddress: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      setStep("checkout");
      alert("Login Successful!");
    } else {
      alert("Please enter valid login details!");
    }
  };

  const handlePayment = () => {
    const { firstName, lastName, email, phone, fullAddress } = address;
    if (!firstName || !lastName || !email || !phone || !fullAddress) {
      alert("Please fill all address details!");
      return;
    }

    const options = {
      key: "rzp_test_123456789",
      amount: course.price * 100,
      currency: "INR",
      name: "My Courses",
      description: `Payment for ${course.title}`,
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: `${firstName} ${lastName}`,
        email,
        contact: phone,
      },
      theme: { color: "#0f766e" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!course) {
    return <p className="text-center mt-20 text-gray-700">No course selected!</p>;
  }

  return (
    <div className="bg-gray-50 flex justify-center p-4 sm:p-6 mt-20">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

        {/* Step 1: Product Details */}
        {step === "details" && (
          <div className="p-5 rounded-lg border bg-gray-50">
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <p className="text-xl font-bold text-teal-700 mt-2">₹ {course.price}</p>
            <button
              onClick={() => setStep(isLoggedIn ? "checkout" : "login")}
              className="mt-5 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}

        {/* Step 2: Login Form */}
        {step === "login" && !isLoggedIn && (
          <form onSubmit={handleLogin} className="bg-yellow-50 p-5 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold mb-3">Login to Continue</h3>
            <div className="flex items-center border p-2 rounded-md bg-white">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={loginData.email}
                onChange={handleLoginChange}
                className="w-full outline-none"
              />
            </div>
            <div className="flex items-center border p-2 rounded-md bg-white">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="w-full outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login Now
            </button>
          </form>
        )}

        {/* Step 3: Address + Payment */}
        {step === "checkout" && isLoggedIn && (
          <>
            <div className="p-5 rounded-lg border bg-gray-50 mb-5">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <p className="text-xl font-bold text-teal-700 mt-2">₹ {course.price}</p>
            </div>

            <div className="bg-green-100 text-green-800 p-3 mb-4 rounded-md text-center">
              Welcome back! You are logged in.
            </div>

            <div className="mb-4 space-y-3">
              <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center border p-2 rounded-md bg-white">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={address.firstName}
                    onChange={handleAddressChange}
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center border p-2 rounded-md bg-white">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={address.lastName}
                    onChange={handleAddressChange}
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center border p-2 rounded-md bg-white mt-4">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={address.email}
                  onChange={handleAddressChange}
                  className="w-full outline-none"
                />
              </div>

              <div className="flex items-center border p-2 rounded-md bg-white mt-4">
                <FaPhone className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={address.phone}
                  onChange={handleAddressChange}
                  className="w-full outline-none"
                />
              </div>

              <div className="flex items-start border p-2 rounded-md bg-white mt-4">
                <FaHome className="text-gray-400 mr-2 mt-1" />
                <textarea
                  name="fullAddress"
                  placeholder="Full Address"
                  value={address.fullAddress}
                  onChange={handleAddressChange}
                  className="w-full outline-none"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Pay ₹{course.price}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
