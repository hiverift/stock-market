import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const CategorySection = ({ categories = {}, setCategories }) => {
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategory.trim()) return;
    if (!categories[newCategory]) {
      setCategories((prev) => ({ ...prev, [newCategory]: [] }));
      setNewCategory("");
    }
  };

  const handleDeleteCategory = (cat) => {
    const updated = { ...categories };
    delete updated[cat];
    setCategories(updated);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Categories</h2>

      <form onSubmit={handleAddCategory} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="New Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={16} /> Add
        </button>
      </form>

      <ul className="space-y-2">
        {Object.keys(categories).map((cat, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg"
          >
            <span className="font-medium text-gray-800">{cat}</span>
            <button
              onClick={() => handleDeleteCategory(cat)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySection;
