// CategorySection.jsx
import React, { useEffect, useState } from "react";
import { Plus, Trash2, Edit, Eye } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const API_BASE = "https://www.cakistockmarket.com/api/v1";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(true);

  // Fetch categories
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/categories`);
      if (res.data.statusCode === 200) {
        setCategories(res.data.result);
      }
    } catch (err) {
      console.error("Failed to fetch categories:", err);
      Swal.fire("Error", "Failed to fetch categories!", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Add category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategory.name.trim()) return;

    try {
      const res = await axios.post(
        `${API_BASE}/categories/addcategory`,
        newCategory
      );

      if (res.data.statusCode === 201 || res.status === 201) {
        setCategories((prev) => [...prev, res.data.result]);
        setNewCategory({ name: "", description: "" });

        Swal.fire({
          icon: "success",
          title: "Category Added!",
          text: `Category "${res.data.result.name}" added successfully.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.error("Failed to add category:", err);
      Swal.fire("Error", "Failed to add category", "error");
    }
  };

  // Edit category
  const handleEditCategory = async (cat) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Category",
      html: `
        <input id="swal-name" class="swal2-input" placeholder="Name" value="${cat.name}">
        <input id="swal-desc" class="swal2-input" placeholder="Description" value="${cat.description}">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById("swal-name").value,
          description: document.getElementById("swal-desc").value,
        };
      },
    });

    if (formValues) {
      try {
        const res = await axios.put(
          `${API_BASE}/categories/updateCategory/${cat._id}`,
          formValues
        );

        if (res.data.statusCode === 200) {
          setCategories((prev) =>
            prev.map((c) => (c._id === cat._id ? res.data.result : c))
          );
          Swal.fire("Updated!", "Category updated successfully.", "success");
        }
      } catch (err) {
        console.error("Failed to update category:", err);
        Swal.fire("Error", "Failed to update category", "error");
      }
    }
  };

  // Delete category
  const handleDeleteCategory = async (id, name) => {
    const confirm = await Swal.fire({
      title: `Delete "${name}"?`,
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`${API_BASE}/categories/deleteCategory/${id}`);
        setCategories((prev) => prev.filter((c) => c._id !== id));

        Swal.fire("Deleted!", `Category "${name}" has been deleted.`, "success");
      } catch (err) {
        console.error("Failed to delete category:", err);
        Swal.fire("Error", "Failed to delete category", "error");
      }
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-4xl  mb-6 text-gray-600">
        📂 Categories Management
      </h2>

      {/* Add Form */}
      <form
        onSubmit={handleAddCategory}
        className="flex flex-col md:flex-row gap-3 mb-8"
      >
        <input
          type="text"
          placeholder="Category Name"
          value={newCategory.name}
          onChange={(e) =>
            setNewCategory({ ...newCategory, name: e.target.value })
          }
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Category Description"
          value={newCategory.description}
          onChange={(e) =>
            setNewCategory({ ...newCategory, description: e.target.value })
          }
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition transform hover:scale-105 shadow-md"
        >
          <Plus size={16} /> Add
        </button>
      </form>

      {/* Table */}
      {loading ? (
        <p className="text-gray-600">Loading categories...</p>
      ) : categories.length > 0 ? (
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-900 text-sm font-semibold border-gray-200">
              <tr className="border-b border-gray-200">
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Created At</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, i) => (
                <tr
                  key={cat._id}
                  className={`${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-yellow-50 transition`}
                >
                  <td className="px-6 py-3">{i + 1}</td>
                  <td className="px-6 py-3 font-medium text-gray-800">
                    {cat.name}
                  </td>
                  <td className="px-6 py-3">{cat.description}</td>
                  <td className="px-6 py-3">
                    {new Date(cat.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-3 flex justify-center gap-3">
                    <button
                      onClick={() => handleEditCategory(cat)}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition flex items-center gap-1"
                    >
                      <Edit size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(cat._id, cat.name)}
                      className="px-3 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition flex items-center gap-1"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                    <button
                      onClick={() =>
                        Swal.fire({
                          title: cat.name,
                          text: cat.description || "No description",
                          icon: "info",
                        })
                      }
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition flex items-center gap-1"
                    >
                      <Eye size={16} /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No categories found.</p>
      )}
    </div>
  );
};

export default CategorySection;
