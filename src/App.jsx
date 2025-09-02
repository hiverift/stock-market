import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Course";
import Consultancy from "./pages/Consultancy";
import Webinars from "./pages/Webinars";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// User Dashboard pages
import UserDashboard from "./userdashboard/UserDashboard";
import MyCourses from "./userdashboard/MyCourses";
import MyConsultations from "./userdashboard/MyConsultations";
import MyWebinars from "./userdashboard/MyWebinars";
import Groups from "./userdashboard/Groups";
import ProfileKYC from "./userdashboard/ProfileKYC";
import DashboardHome from "./userdashboard/DashboardHome";

// Wrapper to conditionally show Navbar
const AppWrapper = ({ children }) => {
  const location = useLocation();
  const hideNavbarPaths = [
    "/user-dashboard",
    "/user-dashboard/my-courses",
    "/user-dashboard/my-consultations",
    "/user-dashboard/my-webinars",
    "/user-dashboard/groups",
    "/user-dashboard/profile-kyc",
  ];

  const hideNavbar = hideNavbarPaths.some((path) => location.pathname.startsWith(path));

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper>
        <Routes>
          {/* Main site routes */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* User Dashboard nested routes */}
       <Route path="/user-dashboard" element={<UserDashboard />}>
  <Route index element={<DashboardHome />} />
  <Route path="my-courses" element={<MyCourses />} />
  <Route path="my-consultations" element={<MyConsultations />} />
  <Route path="my-webinars" element={<MyWebinars />} />
  <Route path="groups" element={<Groups />} />
  <Route path="profile-kyc" element={<ProfileKYC />} />
</Route>

        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;
