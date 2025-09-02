import { BookOpenIcon, ChatBubbleBottomCenterIcon, PresentationChartLineIcon, UsersIcon } from "@heroicons/react/24/outline";

const stats = [
  { label: "Courses Enrolled", value: 12, icon: <BookOpenIcon className="h-6 w-6 text-yellow-600" /> },
  { label: "Consultations", value: 8, icon: <ChatBubbleBottomCenterIcon className="h-6 w-6 text-yellow-600" /> },
  { label: "Webinars Attended", value: 24, icon: <PresentationChartLineIcon className="h-6 w-6 text-yellow-600" /> },
  { label: "Groups Joined", value: 5, icon: <UsersIcon className="h-6 w-6 text-yellow-600" /> },
];

const learningCourses = [
  {
    title: "Advanced Options Trading",
    type: "Course",
    next: "Risk Management Strategies",
    progress: 75
  },
  {
    title: "Technical Analysis Masterclass",
    type: "Course",
    next: "Chart Pattern Recognition",
    progress: 45
  },
  {
    title: "Fundamental Analysis Basics",
    type: "Course",
    next: "Final Assessment",
    progress: 90
  }
];

const upcomingEvents = [
  { title: "Market Analysis Weekly", type: "Webinar", schedule: "Today, 7:00 PM", action: "Join Now" },
  { title: "Personal Portfolio Review", type: "Consultation", schedule: "Tomorrow, 2:00 PM", action: "View Details" },
  { title: "Options Strategy Deep Dive", type: "Webinar", schedule: "Friday, 6:00 PM", action: "View Details" },
];

const DashboardHome = () => {
  return (
    <>
      {/* Welcome Card */}
      <div className="bg-yellow-200 border border-yellow-600 rounded-lg p-6 mt-6">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Rajesh! 👋</h1>
        <p className="text-gray-700">Continue your trading journey with expert guidance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-white shadow rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-100 rounded-full">{stat.icon}</div>
              <div>
                <h2 className="text-2xl font-bold">{stat.value}</h2>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Learning Cards */}
      <h2 className="text-xl font-bold mt-8 mb-4">Continue Learning</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {learningCourses.map((course, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold">{course.title}</h3>
            <p className="text-sm text-gray-500">{course.type}</p>
            <p className="text-sm mt-1">Next: {course.next}</p>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
            </div>
            <button className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-1 rounded">Continue</button>
          </div>
        ))}
      </div>

      {/* Upcoming Events Cards */}
      <h2 className="text-xl font-bold mt-8 mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {upcomingEvents.map((event, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.type}</p>
            <p className="text-sm mt-1">{event.schedule}</p>
            <button className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-1 rounded">{event.action}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardHome;
