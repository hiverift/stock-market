import { useState } from "react";
import { EnvelopeIcon, PhoneIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function LoginPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("mobile");
  const [formData, setFormData] = useState({ email: "", mobile: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate inputs
    if ((activeTab === "email" && !formData.email) || (activeTab === "mobile" && !formData.mobile)) {
      Swal.fire("Error", "Please enter your credentials", "error");
      return;
    }
    if (!formData.password) {
      Swal.fire("Error", "Please enter your password", "error");
      return;
    }

    setLoading(true);

    try {
      const payload = activeTab === "email"
        ? { email: formData.email, password: formData.password, role: "user" }
        : { mobile: formData.mobile, password: formData.password, role: "user" }; // adjust backend if mobile login is supported

      const response = await axios.post(
        "http://69.62.78.239:4000/api/v1/auth/login",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      const user = response.data.result.user;

      Swal.fire("Success", response.data.message, "success");

      // Store tokens & user info
      localStorage.setItem("accessToken", response.data.result.accessToken);
      localStorage.setItem("refreshToken", response.data.result.refreshToken);
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect based on role
      if (user.role === "admin") navigate("/admin-dashboard");
      else navigate("/user-dashboard");

    } catch (error) {
      if (error.response) {
        Swal.fire("Error", error.response.data.message || "Login failed", "error");
      } else if (error.request) {
        Swal.fire("Error", "No response from server. Try again later.", "error");
      } else {
        Swal.fire("Error", error.message, "error");
      }
    } finally {
      setLoading(false);
    }
  };

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
        <form className="space-y-4" onSubmit={handleLogin}>
          {activeTab === "mobile" && (
            <div>
              <label className="text-sm font-medium text-gray-700">Mobile Number</label>
              <div className="relative mt-1">
                <PhoneIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a href="#" className="text-sm text-orange-600 hover:underline">Forgot Password?</a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black font-medium py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="border-t my-6"></div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          New to CA ki Stock Market?{" "}
          <a href="#" className="text-yellow-600 font-medium hover:underline">Register here</a>
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
