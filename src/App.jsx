import React, { useState } from "react";
import UserTable from "./ManageUser";
import TableComponent from "./Tablecomponent"; // Import the table component
import ManageUser from "./ManageUser";
function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4 text-center">User Data Table</h1>
      <TableComponent />
    </div>
  );
}

export default App;
