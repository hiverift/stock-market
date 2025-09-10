import React, { useState } from "react";
import { Eye, Edit, Trash2, Plus } from "lucide-react";

const KycVerificationAdmin = () => {
  const [kycUsers, setKycUsers] = useState([
    { id: 1, name: "Rajesh Kumar", email: "rajesh@email.com", time: "2 hours ago", status: "pending" },
    { id: 2, name: "Priya Sharma", email: "priya@email.com", time: "4 hours ago", status: "pending" },
    { id: 3, name: "Amit Patel", email: "amit@email.com", time: "1 day ago", status: "approved" },
    { id: 4, name: "Sunita Singh", email: "sunita@email.com", time: "2 days ago", status: "rejected" }
  ]);

  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);

  const handleDeleteKyc = (id) => setKycUsers(kycUsers.filter(user => user.id !== id));

  const handleStatusChangeKyc = (id) =>
    setKycUsers(kycUsers.map(user =>
      user.id === id
        ? {
            ...user,
            status: user.status === "pending" ? "approved" : user.status === "approved" ? "rejected" : "pending"
          }
        : user
    ));

  const handleBulkProcess = (action) => {
    setKycUsers(prev =>
      prev.map(user => user.status === "pending" ? { ...user, status: action === "confirm" ? "approved" : "rejected" } : user)
    );
    setIsBulkModalOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl text-gray-900">KYC Verification</h2>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors" onClick={() => setIsBulkModalOpen(true)}>
          <Plus size={18} /> Bulk Process
        </button>
      </div>

      {/* Bulk Modal */}
      {isBulkModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h2 className="text-xl font-semibold mb-4">Bulk KYC Process</h2>
            <p className="mb-4">Approve or reject all pending KYC verifications?</p>
            <div className="flex justify-end gap-2">
              <button onClick={() => handleBulkProcess('confirm')} className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white">Confirm All</button>
              <button onClick={() => handleBulkProcess('reject')} className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white">Reject All</button>
              <button onClick={() => setIsBulkModalOpen(false)} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {kycUsers.map(user => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${user.status === "approved" ? "bg-green-100 text-green-800" : user.status === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right flex justify-end gap-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors"><Eye size={18} /></button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" onClick={() => handleStatusChangeKyc(user.id)}><Edit size={18} /></button>
                  <button className="p-2 text-gray-400 hover:text-red-600 transition-colors" onClick={() => handleDeleteKyc(user.id)}><Trash2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KycVerificationAdmin;
