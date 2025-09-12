import { BookOpenIcon, ChatBubbleBottomCenterIcon, PresentationChartLineIcon, UsersIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, FireIcon, ChartBarIcon } from "@heroicons/react/24/outline";


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
  { title: "Market Analysis Weekly", type: "Webinar", schedule: "Today, 7:00 PM", action: "Join Now", status: "Live" },
  { title: "Personal Portfolio Review", type: "Consultation", schedule: "Tomorrow, 2:00 PM", action: "View Details", status: "Scheduled" },
  { title: "Options Strategy Deep Dive", type: "Webinar", schedule: "Friday, 6:00 PM", action: "View Details", status: "Registered" },
];


 const DashboardHome = () => {
  return (
    <div className="md:ml-64 p-6"> {/* <-- ye add karna hai */}
      {/* Welcome Card */}
      <div className="bg-yellow-200 border border-yellow-600 rounded-lg p-6 mt-6">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Rajesh! 👋</h1>
        <p className="text-gray-700">
          Continue your trading journey with expert guidance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 bg-white shadow rounded-lg p-4 border border-gray-200"
          >
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
{/* Continue Learning + Upcoming Events */}
<div className="flex flex-col md:flex-row gap-6 mt-8">
  {/* Continue Learning */}
  <div className="flex-1">
    <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
    <div className="grid grid-cols-1 gap-6">
      {learningCourses.map((course, idx) => (
        <div
          key={idx}
          className="bg-white shadow rounded-lg p-4 flex flex-col justify-between h-full border border-gray-200"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-500">{course.type}</p>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded text-sm">
              Continue
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2 rounded-full mt-3 relative">
            <div
              className="bg-yellow-400 h-2 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>

            {/* % Text (desktop only - inside bar) */}
            <span className="hidden md:block absolute right-2 -top-5 text-xs text-gray-700 font-semibold">
              {course.progress}% complete
            </span>
          </div>

          {/* % Text (mobile only - below bar) */}
          <span className="block md:hidden text-xs text-gray-700 font-semibold mt-1">
            {course.progress}% complete
          </span>

          <p className="text-sm text-gray-500 mt-1">Next: {course.next}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Upcoming Events */}
  <div className="flex-1">
    <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
    <div className="grid grid-cols-1 gap-6">
      {upcomingEvents.map((event, idx) => (
        <div
          key={idx}
           className="bg-white shadow rounded-lg p-4 flex flex-col justify-between h-full border border-gray-200 relative "
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.type}</p>
            </div>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${
                event.status === "Live"
                  ? "bg-green-100 text-green-800"
                  : event.status === "Scheduled"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {event.status}
            </span>
          </div>

          <div className="mt-3 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <p className="text-sm text-gray-600">{event.schedule}</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded text-sm w-full sm:w-auto">
              {event.action}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>



</div>


      {/* Achievements */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-4 flex items-start gap-3 border border-gray-200">
          <CheckCircleIcon className="h-8 w-8 text-yellow-500" />
          <div>
            <h3 className="font-semibold text-gray-800">Course Completed</h3>
            <p className="text-sm text-gray-500">
              Finished 'Options Basics' course
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 flex items-start gap-3 border border-gray-200">
          <FireIcon className="h-8 w-8 text-red-500" />
          <div>
            <h3 className="font-semibold text-gray-800">Streak Milestone</h3>
            <p className="text-sm text-gray-500">7 days learning streak</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 flex items-start gap-3 border border-gray-200">
          <ChartBarIcon className="h-8 w-8 text-green-500" />
          <div>
            <h3 className="font-semibold text-gray-800">Performance Score</h3>
            <p className="text-sm text-gray-500">
              95% on Technical Analysis quiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default DashboardHome;
