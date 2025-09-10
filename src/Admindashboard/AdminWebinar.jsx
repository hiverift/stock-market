import React, { useState } from "react";
import { Plus, Eye, Edit, Trash2, FileText, User, Calendar, Clock, Layers, DollarSign, X } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AdminWebinarTable = () => {
  const [webinars, setWebinars] = useState([
    {
      id: 1,
      title: "Intro to Stock Trading",
      instructors: "John Doe, Jane Smith",
      description: "Learn the basics of stock trading",
      dateTime: "09/10/2025 10:00 AM",
      duration: "90 minutes",
      level: "All Levels",
      price: "Free",
      topics: ["Stock Basics", "Market Analysis"],
      agenda: ["Introduction", "Q&A"],
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [showDetail, setShowDetail] = useState(null);
  const [editId, setEditId] = useState(null);
  const [newWebinar, setNewWebinar] = useState({
    title: "",
    instructors: "",
    description: "",
    dateTime: "",
    duration: "",
    level: "",
    price: "",
    topics: [],
    agenda: [],
  });

  const handleSaveWebinar = () => {
    if (!newWebinar.title) {
      alert("Please enter webinar title");
      return;
    }
    if (editId) {
      setWebinars(webinars.map(w => (w.id === editId ? { ...newWebinar, id: editId } : w)));
      setEditId(null);
    } else {
      setWebinars([...webinars, { ...newWebinar, id: Date.now() }]);
    }
    setNewWebinar({
      title: "",
      instructors: "",
      description: "",
      dateTime: "",
      duration: "",
      level: "",
      price: "",
      topics: [],
      agenda: [],
    });
    setShowForm(false);
  };

  const handleEditWebinar = (webinar) => {
    setNewWebinar(webinar);
    setEditId(webinar.id);
    setShowForm(true);
  };

  const handleDeleteWebinar = (id) => {
    if (window.confirm("Are you sure you want to delete this webinar?")) {
      setWebinars(webinars.filter(w => w.id !== id));
    }
  };

  const addTopic = () => {
    if (newWebinar.newTopic) {
      setNewWebinar({ ...newWebinar, topics: [...newWebinar.topics, newWebinar.newTopic], newTopic: "" });
    }
  };

  const addAgenda = () => {
    if (newWebinar.newAgenda) {
      setNewWebinar({ ...newWebinar, agenda: [...newWebinar.agenda, newWebinar.newAgenda], newAgenda: "" });
    }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">Manage Webinars</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600 transition"
        >
          <Plus size={18} /> Add Webinar
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">No.</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Instructors</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date & Time</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Duration</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Level</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {webinars.map((w, idx) => (
              <tr key={w.id} className="hover:bg-yellow-50 transition-all duration-200">
                <td className="px-4 py-3">{idx + 1}</td>
                <td className="px-4 py-3">{w.title}</td>
                <td className="px-4 py-3">{w.instructors}</td>
                <td className="px-4 py-3">{w.dateTime}</td>
                <td className="px-4 py-3">{w.duration}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded-full bg-blue-500 text-white text-xs">{w.level}</span>
                </td>
                <td className="px-4 py-3">{w.price}</td>
                <td className="px-4 py-3 flex justify-center gap-2">
                  <button onClick={() => setShowDetail(w)} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600" title="View">
                    <Eye size={16} />
                  </button>
                  <button onClick={() => handleEditWebinar(w)} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600" title="Edit">
                    <Edit size={16} />
                  </button>
                  <button onClick={() => handleDeleteWebinar(w.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" title="Delete">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-y-auto max-h-[90vh] p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{editId ? "Edit Webinar" : "Add Webinar"}</h3>
              <button onClick={() => setShowForm(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 border rounded px-3 py-2">
                <FileText className="text-gray-500" size={18} />
                <input
                  type="text"
                  value={newWebinar.title}
                  onChange={(e) => setNewWebinar({ ...newWebinar, title: e.target.value })}
                  placeholder="Webinar Title"
                  className="flex-1 outline-none"
                />
              </div>
              <div className="flex items-center gap-3 border rounded px-3 py-2">
                <User className="text-gray-500" size={18} />
                <input
                  type="text"
                  value={newWebinar.instructors}
                  onChange={(e) => setNewWebinar({ ...newWebinar, instructors: e.target.value })}
                  placeholder="John Doe, Jane Smith"
                  className="flex-1 outline-none"
                />
              </div>
              <div className="flex items-center gap-3 border rounded px-3 py-2">
                <Calendar className="text-gray-500" size={18} />
                <DatePicker
                  selected={newWebinar.dateTime}
                  onChange={(date) => setNewWebinar({ ...newWebinar, dateTime: date })}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MM/dd/yyyy h:mm aa"
                  placeholderText="Select Date & Time"
                  className="flex-1 outline-none"
                />
              </div>
              <div className="flex items-center gap-3 border rounded px-3 py-2">
                <Clock className="text-gray-500" size={18} />
                <input
                  type="text"
                  value={newWebinar.duration}
                  onChange={(e) => setNewWebinar({ ...newWebinar, duration: e.target.value })}
                  placeholder="Duration"
                  className="flex-1 outline-none"
                />
              </div>
              <div className="flex items-center gap-3 border rounded px-3 py-2">
                <Layers className="text-gray-500" size={18} />
                <input
                  type="text"
                  value={newWebinar.level}
                  onChange={(e) => setNewWebinar({ ...newWebinar, level: e.target.value })}
                  placeholder="All Levels"
                  className="flex-1 outline-none"
                />
              </div>
              <div className="flex items-center gap-3 border rounded px-3 py-2">
                <DollarSign className="text-gray-500" size={18} />
                <input
                  type="text"
                  value={newWebinar.price}
                  onChange={(e) => setNewWebinar({ ...newWebinar, price: e.target.value })}
                  placeholder="Free / Paid"
                  className="flex-1 outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <textarea
                value={newWebinar.description}
                onChange={(e) => setNewWebinar({ ...newWebinar, description: e.target.value })}
                placeholder="Description"
                className="w-full border rounded px-3 py-2 outline-none"
                rows={3}
              />
            </div>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Topics</h4>
              {newWebinar.topics.map((t, idx) => <p key={idx} className="text-gray-700 text-sm">{t}</p>)}
              <div className="flex gap-2 mt-1">
                <input
                  type="text"
                  placeholder="Add Topic"
                  value={newWebinar.newTopic || ""}
                  onChange={(e) => setNewWebinar({ ...newWebinar, newTopic: e.target.value })}
                  className="flex-1 border px-2 py-1 rounded"
                />
                <button onClick={addTopic} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">+ Add Topic</button>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Agenda</h4>
              {newWebinar.agenda.map((a, idx) => <p key={idx} className="text-gray-700 text-sm">{a}</p>)}
              <div className="flex gap-2 mt-1">
                <input
                  type="text"
                  placeholder="Add Agenda"
                  value={newWebinar.newAgenda || ""}
                  onChange={(e) => setNewWebinar({ ...newWebinar, newAgenda: e.target.value })}
                  className="flex-1 border px-2 py-1 rounded"
                />
                <button onClick={addAgenda} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">+ Add Agenda</button>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 border rounded hover:bg-gray-100">Cancel</button>
              <button onClick={handleSaveWebinar} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {showDetail && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-y-auto max-h-[90vh] p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{showDetail.title}</h3>
              <button onClick={() => setShowDetail(null)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-700 mb-1"><strong>Instructors:</strong> {showDetail.instructors}</p>
            <p className="text-gray-700 mb-1"><strong>Date & Time:</strong> {showDetail.dateTime}</p>
            <p className="text-gray-700 mb-1"><strong>Duration:</strong> {showDetail.duration}</p>
            <p className="text-gray-700 mb-1"><strong>Level:</strong> {showDetail.level}</p>
            <p className="text-gray-700 mb-1"><strong>Price:</strong> {showDetail.price}</p>
            <p className="text-gray-700 mb-2"><strong>Description:</strong> {showDetail.description}</p>
            <h4 className="font-medium mt-2">Topics:</h4>
            <ul className="list-disc list-inside mb-2">{showDetail.topics.map((t, idx) => <li key={idx}>{t}</li>)}</ul>
            <h4 className="font-medium mt-2">Agenda:</h4>
            <ul className="list-disc list-inside">{showDetail.agenda.map((a, idx) => <li key={idx}>{a}</li>)}</ul>
            <div className="flex justify-end mt-4">
              <button onClick={() => setShowDetail(null)} className="px-4 py-2 border rounded hover:bg-gray-100">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminWebinarTable;
