import React, { useState } from 'react';
import {
  Users,
  BookOpen,
  DollarSign,
  Video,
  FileText,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Download,
  Plus,
  MoreHorizontal
} from 'lucide-react';
import Footer from './Footer';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('Courses');
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Advanced Options Trading',
      students: 1240,
      revenue: '₹248,000',
      status: 'active'
    },
    {
      id: 2,
      name: 'Technical Analysis Bootcamp',
      students: 890,
      revenue: '₹178,000',
      status: 'active'
    },
    {
      id: 3,
      name: 'Stock Market Fundamentals',
      students: 2150,
      revenue: '₹430,000',
      status: 'active'
    },
    {
      id: 4,
      name: 'Risk Management Strategies',
      students: 156,
      revenue: '₹31,200',
      status: 'draft'
    }
  ]);

  const [webinars, setWebinars] = useState([
    { id: 1, title: "Market Analysis Weekly", date: "Today 7:00 PM", registered: 1240, status: "free" },
    { id: 2, title: "Options Masterclass", date: "Tomorrow 6:00 PM", registered: 89, status: "paid" },
    { id: 3, title: "Technical Analysis", date: "Sep 5, 5:30 PM", registered: 156, status: "paid" }
  ]);

  const [kycUsers, setKycUsers] = useState([
    { id: 1, name: "Rajesh Kumar", email: "rajesh@email.com", time: "2 hours ago", status: "pending" },
    { id: 2, name: "Priya Sharma", email: "priya@email.com", time: "4 hours ago", status: "pending" },
    { id: 3, name: "Amit Patel", email: "amit@email.com", time: "1 day ago", status: "approved" },
    { id: 4, name: "Sunita Singh", email: "sunita@email.com", time: "2 days ago", status: "rejected" }
  ]);

  const [activities] = useState([
    { text: 'New course "Advanced Options" published', time: '2 hours ago' },
    { text: 'User KYC verification completed', time: '4 hours ago' },
    { text: 'Webinar "Market Analysis" scheduled', time: '6 hours ago' },
    { text: 'Payment gateway updated', time: '1 day ago' }
  ]);

  const dashboardStats = [
    { title: 'Total Users', value: '15,420', icon: Users, color: 'bg-blue-100 text-blue-600' },
    { title: 'Active Courses', value: '24', icon: BookOpen, color: 'bg-green-100 text-green-600' },
    { title: 'Monthly Revenue', value: '₹2540K', icon: DollarSign, color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Live Webinars', value: '3', icon: Video, color: 'bg-red-100 text-red-600' },
    { title: 'Pending KYC', value: '89', icon: FileText, color: 'bg-orange-100 text-orange-600' },
    { title: 'Growth Rate', value: '+15.3%', icon: TrendingUp, color: 'bg-purple-100 text-purple-600' }
  ];

  const tabs = ['Courses', 'Webinars', 'KYC Verification', 'Payments', 'User Management'];

  // Handlers
  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter(course => course.id !== courseId));
  };

  const handleStatusChange = (courseId) => {
    setCourses(courses.map(course =>
      course.id === courseId
        ? { ...course, status: course.status === 'active' ? 'draft' : 'active' }
        : course
    ));
  };

  const handleDeleteWebinar = (id) => {
    setWebinars(webinars.filter(webinar => webinar.id !== id));
  };

  const handleStatusChangeWebinar = (id) => {
    setWebinars(webinars.map(webinar =>
      webinar.id === id
        ? { ...webinar, status: webinar.status === "free" ? "paid" : "free" }
        : webinar
    ));
  };

  const handleDeleteKyc = (id) => {
    setKycUsers(kycUsers.filter(user => user.id !== id));
  };

  const handleStatusChangeKyc = (id) => {
    setKycUsers(kycUsers.map(user =>
      user.id === id
        ? {
            ...user,
            status:
              user.status === "pending"
                ? "approved"
                : user.status === "approved"
                ? "rejected"
                : "pending",
          }
        : user
    ));
  };

  // Components
  const StatCard = ({ stat }) => {
    const IconComponent = stat.icon;
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
            <p className="text-2xl  text-gray-900">{stat.value}</p>
          </div>
          <div className={`p-3 rounded-lg ${stat.color}`}>
            <IconComponent size={24} />
          </div>
        </div>
      </div>
    );
  };

  const CourseRow = ({ course }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className=" text-gray-900 mb-2">{course.name}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>{course.students} students</span>
            <span>{course.revenue} revenue</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              course.status === 'active'
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {course.status}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Eye size={18} />
          </button>
          <button
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
            onClick={() => handleStatusChange(course.id)}
          >
            <Edit size={18} />
          </button>
          <button
            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
            onClick={() => handleDeleteCourse(course.id)}
          >
            <Trash2 size={18} />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  const WebinarRow = ({ webinar }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className=" text-gray-900 mb-2">{webinar.title}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>{webinar.date}</span>
            <span>{webinar.registered} registered</span>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                webinar.status === "free"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {webinar.status}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Eye size={18} />
          </button>
          <button
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
            onClick={() => handleStatusChangeWebinar(webinar.id)}
          >
            <Edit size={18} />
          </button>
          <button
            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
            onClick={() => handleDeleteWebinar(webinar.id)}
          >
            <Trash2 size={18} />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  const KycRow = ({ user }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className=" text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
          <div className="flex gap-4 text-sm text-gray-600 mt-1">
            <span>{user.time}</span>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                user.status === "approved"
                  ? "bg-green-100 text-green-800"
                  : user.status === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {user.status}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Eye size={18} />
          </button>
          <button
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
            onClick={() => handleStatusChangeKyc(user.id)}
          >
            <Edit size={18} />
          </button>
          <button
            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
            onClick={() => handleDeleteKyc(user.id)}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Courses':
        return (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl  text-gray-900">Manage Courses</h2>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <Plus size={18} />
                Add Course
              </button>
            </div>
            <div className="space-y-4">
              {courses.map(course => (
                <CourseRow key={course.id} course={course} />
              ))}
            </div>
          </div>
        );
      case 'Webinars':
        return (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl  text-gray-900">Manage Webinars</h2>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <Plus size={18} />
                Schedule Webinar
              </button>
            </div>
            <div className="space-y-4">
              {webinars.map(webinar => (
                <WebinarRow key={webinar.id} webinar={webinar} />
              ))}
            </div>
          </div>
        );
      case 'KYC Verification':
        return (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl  text-gray-900">KYC Verification</h2>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <Plus size={18} />
                Bulk Process
              </button>
            </div>
            <div className="space-y-4">
              {kycUsers.map(user => (
                <KycRow key={user.id} user={user} />
              ))}
            </div>
          </div>
        );
      case 'Payments':
        return (
          <div className="text-center py-12">
            <DollarSign size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Management</h3>
            <p className="text-gray-500">Track payments and revenue</p>
          </div>
        );
      case 'User Management':
        return (
          <div className="text-center py-12">
            <Users size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">User Management</h3>
            <p className="text-gray-500">Manage platform users and permissions</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 mt-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl  text-gray-900 mb-2">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your platform and monitor performance</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Download size={18} />
                Export Data
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <Plus size={18} />
                Add New
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {dashboardStats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab
                        ? 'border-yellow-500 text-yellow-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {renderTabContent()}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg  text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <p className="text-gray-700 flex-1">{activity.text}</p>
                    <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Admin;
