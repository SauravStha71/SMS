import { useState } from "react";

const TableComponent = () => {
  // Dummy data structure (without real info from the image)
  const [data, setData] = useState([
    {
      id: 1,
      branchCode: "201",
      branch: "Branch A",
      scno: "201.16.007ABC",
      customerId: "24",
      name: "John Doe",
      address: "Address 1",
      mobile: "9876543210",
      days: 87,
      balance: 136,
      prepaidDate: "03-Mar-25",
      selected: false,
    },
    {
      id: 2,
      branchCode: "202",
      branch: "Branch B",
      scno: "201.18.008DEF",
      customerId: "36",
      name: "Jane Smith",
      address: "Address 2",
      mobile: "9841234567",
      days: 64,
      balance: 200,
      prepaidDate: "05-Mar-25",
      selected: false,
    },
  ]);

  // Handle checkbox selection
  const toggleSelect = (id) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, selected: !row.selected } : row
      )
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">
              <input type="checkbox" disabled />
            </th>
            <th className="border p-2">Branch Code</th>
            <th className="border p-2">Branch</th>
            <th className="border p-2">SCNO</th>
            <th className="border p-2">Customer ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Mobile Number</th>
            <th className="border p-2">No. of Days</th>
            <th className="border p-2">Balance Amount</th>
            <th className="border p-2">Prepaid Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className={`border ${
                row.selected ? "bg-blue-300" : "even:bg-blue-100 odd:bg-white"
              }`}
            >
              <td className="border p-2 text-center">
                <input
                  type="checkbox"
                  checked={row.selected}
                  onChange={() => toggleSelect(row.id)}
                />
              </td>
              <td className="border p-2">{row.branchCode}</td>
              <td className="border p-2">{row.branch}</td>
              <td className="border p-2">{row.scno}</td>
              <td className="border p-2">{row.customerId}</td>
              <td className="border p-2">{row.name}</td>
              <td className="border p-2">{row.address}</td>
              <td className="border p-2">{row.mobile}</td>
              <td className="border p-2">{row.days}</td>
              <td className="border p-2">{row.balance}</td>
              <td className="border p-2">{row.prepaidDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
