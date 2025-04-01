import React from "react";
import ManageUser from "./ManageUser"; // Import the file correctly

const App = () => {
  // Sample user data
  const users = [
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { name: "Michael Brown", email: "michael@example.com", role: "User" },
  ];

  return (
    <div className="p-5">
      <h1 className="text-center text-2xl font-bold mb-4">User Management</h1>
      <ManageUser users={users} /> {/* Updated component name */}
    </div>
  );
};

export default App;
