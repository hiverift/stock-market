import React, { useEffect, useState, useMemo } from "react";
import { Eye, Plus, Search, ChevronLeft, ChevronRight, X, Edit2, Trash2 } from "lucide-react";

const AdminCourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [showDetail, setShowDetail] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editCourseId, setEditCourseId] = useState(null);
  const [loading, setLoading] = useState(false);
  const coursesPerPage = 5;

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    duration: "",
    price: "",
    level: "Beginner",
    mode: "Online",
    syllabus: [],
    subCategoryId: "",
    rating: 0,
    studentsCount: 0,
    categoryId: "",
    description: "",
  });

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://69.62.78.239:4000/api/v1/courses/getAllCourses");
        const data = await response.json();
        console.log("Fetched courses:", data.result);
        setCourses(Array.isArray(data.result) ? data.result : []);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Filter courses
  const filteredCourses = useMemo(() => {
    return courses.filter(
      (c) =>
        c.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.instructor?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [courses, searchQuery]);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirst, indexOfLast);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "syllabus" ? value.split(",").map((item) => item.trim()).filter(Boolean) : value,
    }));
  };

  // Handle form submission (create/update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = editCourseId
        ? `http://69.62.78.239:4000/api/v1/courses/updateCourse/${editCourseId}`
        : "http://69.62.78.239:4000/api/v1/courses/createCourse";
      const method = editCourseId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        if (editCourseId) {
          setCourses((prev) =>
            prev.map((course) => (course.id === editCourseId ? { ...course, ...data.result } : course))
          );
        } else {
          setCourses((prev) => [...prev, data.result]);
        }
        resetForm();
      } else {
        console.error("Error saving course:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit course
  const handleEdit = (course) => {
    setFormData({
      title: course.title || "",
      instructor: course.instructor || "",
      duration: course.duration || "",
      price: course.price || "",
      level: course.level || "Beginner",
      mode: course.mode || "Online",
      syllabus: Array.isArray(course.syllabus) ? course.syllabus : [],
      subCategoryId: course.subCategoryId || "",
      rating: course.rating || 0,
      studentsCount: course.studentsCount || 0,
      categoryId: course.categoryId || "",
      description: course.description || "",
    });
    setEditCourseId(course.id || course._id);
    setShowForm(true);
  };

  // Handle delete course
  const handleDelete = async (courseId) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    setLoading(true);
    try {
      const response = await fetch(`http://69.62.78.239:4000/api/v1/courses/deleteCourse/${courseId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setCourses((prev) => prev.filter((course) => course.id !== courseId && course._id !== courseId));
      } else {
        console.error("Error deleting course");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: "",
      instructor: "",
      duration: "",
      price: "",
      level: "Beginner",
      mode: "Online",
      syllabus: [],
      subCategoryId: "",
      rating: 0,
      studentsCount: 0,
      categoryId: "",
      description: "",
    });
    setShowForm(false);
    setEditCourseId(null);
  };

  // Close modal on outside click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowDetail(null);
      resetForm();
    }
  };

  if (loading && courses.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-6">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl  text-gray-600 ">
              Course Management
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Manage and monitor all your courses efficiently</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Plus size={16} className="sm:w-5 sm:h-5" />
            Add New Course
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="relative max-w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search courses by title or instructor..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 hidden sm:table-header-group">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">No.</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Title</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Instructor</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Duration</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Level</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Mode</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentCourses.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 sm:px-6 py-8 sm:py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center gap-2">
                        <Search size={32} className="text-gray-300" />
                        <p className="text-sm sm:text-base">No courses found</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  currentCourses.map((c, idx) => (
                    <tr key={c.id || c._id || idx} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200">
                      {/* Mobile Card View */}
                      <td colSpan={7} className="sm:hidden px-4 py-4 border-b border-gray-200">
                        <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 truncate">{c.title}</h4>
                              <p className="text-sm text-gray-600">by {c.instructor}</p>
                            </div>
                            <div className="flex gap-2 ml-2">
                              <button
                                onClick={() => setShowDetail(c)}
                                className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-600 transition-all duration-200"
                                title="View Details"
                              >
                                <Eye size={16} />
                              </button>
                              <button
                                onClick={() => handleEdit(c)}
                                className="p-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-600 transition-all duration-200"
                                title="Edit Course"
                              >
                                <Edit2 size={16} />
                              </button>
                              <button
                                onClick={() => handleDelete(c.id || c._id)}
                                className="p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition-all duration-200"
                                title="Delete Course"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">Duration:</span>
                              <p className="text-gray-600">{c.duration}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Level:</span>
                              <span
                                className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ml-1 ${
                                  c.level === "Beginner"
                                    ? "bg-green-100 text-green-800"
                                    : c.level === "Intermediate"
                                    ? "bg-blue-100 text-blue-800"
                                    : c.level === "Advanced"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {c.level}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Mode:</span>
                              <span
                                className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ml-1 ${
                                  c.mode === "Online"
                                    ? "bg-purple-100 text-purple-800"
                                    : c.mode === "Live"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {c.mode}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">No.:</span>
                              <p className="text-gray-600">{indexOfFirst + idx + 1}</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      
                      {/* Desktop Table View */}
                      <td className="hidden sm:table-cell px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {indexOfFirst + idx + 1}
                      </td>
                      <td className="hidden sm:table-cell px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setShowDetail(c)}
                            className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-600 transition-all duration-200 hover:scale-110"
                            title="View Details"
                          >
                            <Eye size={14} />
                          </button>
                          <button
                            onClick={() => handleEdit(c)}
                            className="p-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-600 transition-all duration-200 hover:scale-110"
                            title="Edit Course"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            onClick={() => handleDelete(c.id || c._id)}
                            className="p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition-all duration-200 hover:scale-110"
                            title="Delete Course"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                      <td className="hidden sm:table-cell px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium text-gray-900 max-w-xs truncate" title={c.title}>
                        {c.title}
                      </td>
                      <td className="hidden sm:table-cell px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-600">
                        {c.instructor}
                      </td>
                      <td className="hidden sm:table-cell px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-600">
                        {c.duration}
                      </td>
                      <td className="hidden sm:table-cell px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                            c.level === "Beginner"
                              ? "bg-green-100 text-green-800"
                              : c.level === "Intermediate"
                              ? "bg-blue-100 text-blue-800"
                              : c.level === "Advanced"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {c.level}
                        </span>
                      </td>
                      <td className="hidden sm:table-cell px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                            c.mode === "Online"
                              ? "bg-purple-100 text-purple-800"
                              : c.mode === "Live"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {c.mode}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-6 p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-700 text-center sm:text-left">
                Showing <span className="font-medium">{indexOfFirst + 1}</span> to{" "}
                <span className="font-medium">{Math.min(indexOfLast, filteredCourses.length)}</span> of{" "}
                <span className="font-medium">{filteredCourses.length}</span> results
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="px-2 sm:px-3 py-1 sm:py-2 text-sm font-medium text-gray-700">
                  Page <span className="font-bold">{currentPage}</span> of <span className="font-bold">{totalPages}</span>
                </span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Detail Modal */}
        {showDetail && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
            onClick={handleOverlayClick}
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{showDetail.title}</h3>
                  <button
                    onClick={() => setShowDetail(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
                <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <p>
                      <span className="font-semibold">Instructor:</span> {showDetail.instructor}
                    </p>
                    <p>
                      <span className="font-semibold">Duration:</span> {showDetail.duration}
                    </p>
                    <p>
                      <span className="font-semibold">Price:</span> ₹{showDetail.price}
                    </p>
                    <p>
                      <span className="font-semibold">Level:</span> {showDetail.level}
                    </p>
                    <p>
                      <span className="font-semibold">Mode:</span> {showDetail.mode}
                    </p>
                    <p>
                      <span className="font-semibold">Rating:</span> {showDetail.rating}/5
                    </p>
                    <p>
                      <span className="font-semibold">Students:</span> {showDetail.studentsCount}
                    </p>
                  </div>
                  <p>
                    <span className="font-semibold">Syllabus:</span>{" "}
                    {Array.isArray(showDetail.syllabus) ? showDetail.syllabus.join(", ") : "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Description:</span> {showDetail.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add/Edit Form Modal */}
        {showForm && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
            onClick={handleOverlayClick}
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {editCourseId ? "Edit Course" : "Add New Course"}
                  </h3>
                  <button
                    onClick={resetForm}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Instructor *</label>
                      <input
                        type="text"
                        name="instructor"
                        value={formData.instructor}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Duration *</label>
                        <input
                          type="text"
                          name="duration"
                          value={formData.duration}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Price (₹) *</label>
                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Level *</label>
                        <select
                          name="level"
                          value={formData.level}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          required
                        >
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Mode *</label>
                        <select
                          name="mode"
                          value={formData.mode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          required
                        >
                          <option value="Online">Online</option>
                          <option value="Live">Live</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Syllabus (comma-separated) *</label>
                      <input
                        type="text"
                        name="syllabus"
                        value={formData.syllabus.join(", ")}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">SubCategory ID *</label>
                        <input
                          type="text"
                          name="subCategoryId"
                          value={formData.subCategoryId}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Category ID *</label>
                        <input
                          type="text"
                          name="categoryId"
                          value={formData.categoryId}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Rating (0-5)</label>
                        <input
                          type="number"
                          name="rating"
                          value={formData.rating}
                          onChange={handleInputChange}
                          min="0"
                          max="5"
                          step="0.1"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Students Count</label>
                        <input
                          type="number"
                          name="studentsCount"
                          value={formData.studentsCount}
                          onChange={handleInputChange}
                          min="0"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 w-full sm:w-auto"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      {loading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      ) : (
                        <Plus size={16} />
                      )}
                      {loading ? (editCourseId ? "Updating..." : "Saving...") : editCourseId ? "Update Course" : "Save Course"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCourseTable;