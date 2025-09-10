import React, { useState } from "react";
import { Eye, Edit, Trash2, Plus, X } from "lucide-react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Rajesh Kumar", email: "rajesh@email.com", role: "Admin", status: "Active", createdAt: "2025-09-01" },
    { id: 2, name: "Priya Sharma", email: "priya@email.com", role: "User", status: "Inactive", createdAt: "2025-09-05" },
    { id: 3, name: "Amit Patel", email: "amit@email.com", role: "Moderator", status: "Active", createdAt: "2025-09-08" },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    const newEntry = {
      id: users.length + 1,
      ...newUser,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setUsers([...users, newEntry]);
    setNewUser({ name: "", email: "", role: "User", status: "Active" });
    setIsAddModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const handleStatusToggle = (id) => {
    setUsers(
      users.map((u) =>
        u.id === id ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u
      )
    );
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">User Management</h2>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600 transition"
          onClick={() => setIsAddModalOpen(true)}
        >
          <Plus size={18} /> Add User
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Role</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Created At</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-yellow-50 transition-all duration-200">
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.status === "Active"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">{user.createdAt}</td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                    onClick={() => { setSelectedUser(user); setIsViewModalOpen(true); }}
                    title="View"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                    onClick={() => handleStatusToggle(user.id)}
                    title="Toggle Status"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(user.id)}
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => setIsAddModalOpen(false)}
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4">Add New User</h3>
            <form onSubmit={handleAddUser} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option>User</option>
                <option>Admin</option>
                <option>Moderator</option>
              </select>
              <select
                value={newUser.status}
                onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View User Modal */}
      {isViewModalOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => setIsViewModalOpen(false)}
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4">User Details</h3>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>Status:</strong> {selectedUser.status}</p>
            <p><strong>Created At:</strong> {selectedUser.createdAt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
