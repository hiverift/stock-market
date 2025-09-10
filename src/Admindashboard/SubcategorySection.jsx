import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const SubcategorySection = ({ categories = {}, setCategories }) => {
  const [newSub, setNewSub] = useState({ category: "", name: "" });

  const handleAddSubcategory = (e) => {
    e.preventDefault();
    if (!newSub.name.trim() || !newSub.category) return;

    setCategories((prev) => ({
      ...prev,
      [newSub.category]: [...(prev[newSub.category] || []), newSub.name.trim()],
    }));

    setNewSub({ category: "", name: "" });
  };

  const handleDeleteSubcategory = (category, sub) => {
    setCategories((prev) => ({
      ...prev,
      [category]: prev[category].filter((s) => s !== sub),
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mt-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Subcategories</h2>

      {/* Add Subcategory */}
      <form onSubmit={handleAddSubcategory} className="flex gap-2 mb-4">
        <select
          value={newSub.category}
          onChange={(e) => setNewSub({ ...newSub, category: e.target.value })}
          className="border border-gray-300 rounded-lg px-3 py-2"
        >
          <option value="">Select Category</option>
          {Object.keys(categories).map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Subcategory Name"
          value={newSub.name}
          onChange={(e) => setNewSub({ ...newSub, name: e.target.value })}
          className="border border-gray-300 rounded-lg px-3 py-2 flex-1"
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={16} /> Add
        </button>
      </form>

      {/* List of Subcategories */}
      {Object.keys(categories).map((cat, i) => (
        <div key={i} className="mb-3">
          <h3 className="font-medium text-gray-700">{cat}</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {(categories[cat] || []).map((sub, j) => (
              <span
                key={j}
                className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {sub}
                <button
                  onClick={() => handleDeleteSubcategory(cat, sub)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={14} />
                </button>
              </span>
            ))}
            {(categories[cat] || []).length === 0 && (
              <span className="text-gray-400 italic text-sm">No subcategories</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubcategorySection;
