import React from 'react';
import { Users, BookOpen, DollarSign, Video, FileText, TrendingUp, Download, Plus } from 'lucide-react';

const AdminDashboardHome = () => {
  const metrics = [
    { title: 'Total Users', value: '15,420', icon: Users, bgColor: 'bg-blue-50', iconColor: 'text-blue-500' },
    { title: 'Active Courses', value: '24', icon: BookOpen, bgColor: 'bg-green-50', iconColor: 'text-green-500' },
    { title: 'Monthly Revenue', value: '₹2540K', icon: DollarSign, bgColor: 'bg-yellow-50', iconColor: 'text-yellow-600' },
    { title: 'Live Webinars', value: '3', icon: Video, bgColor: 'bg-red-50', iconColor: 'text-red-500' },
    { title: 'Pending KYC', value: '89', icon: FileText, bgColor: 'bg-orange-50', iconColor: 'text-orange-500' },
    { title: 'Growth Rate', value: '+15.3%', icon: TrendingUp, bgColor: 'bg-purple-50', iconColor: 'text-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl text-gray-900 ">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your platform and monitor performance</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">{metric.title}</p>
                    <p className="text-2xl md:text-3xl  text-gray-900">{metric.value}</p>
                  </div>
                  <div className={`${metric.bgColor} p-3 rounded-xl`}>
                    <IconComponent className={`w-6 h-6 ${metric.iconColor}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg text-gray-900 mb-4 ">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">New user registration</span>
              <span className="text-xs text-gray-400">2 minutes ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Course completion milestone reached</span>
              <span className="text-xs text-gray-400">15 minutes ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">KYC verification pending</span>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
