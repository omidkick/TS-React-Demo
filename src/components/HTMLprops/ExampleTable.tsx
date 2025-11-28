import React from "react";
import Table from "./Table";

// Sample data
type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const users: User[] = [
  { id: 1, name: "Omid Jabbari", email: "omid@example.com", role: "Admin" },
  { id: 2, name: "Sara Khan", email: "sara@example.com", role: "Editor" },
  { id: 3, name: "John Doe", email: "john@example.com", role: "Viewer" },
  { id: 4, name: "Alice Smith", email: "alice@example.com", role: "Admin" },
];

const ExampleTable: React.FC = () => {
  // handleRowClick
  const handleRowClick = (user: User) => {
    alert(`You clicked ${user.name} (${user.role})`);
  };

  return (
    <div className="main-content">
      <h2 className="text-3xl font-bold text-dark mb-6">Users Table</h2>

      <Table className="w-full border border-border rounded-xl shadow-md">
        {/* Table Header */}
        <Table.Header>
          <th className="px-6 py-3 text-left text-text font-semibold">ID</th>
          <th className="px-6 py-3 text-left text-text font-semibold">Name</th>
          <th className="px-6 py-3 text-left text-text font-semibold">Email</th>
          <th className="px-6 py-3 text-left text-text font-semibold">Role</th>
        </Table.Header>

        {/* Table Body */}
        <Table.Body>
          {users.map((user, index) => (
            <Table.Row
              key={user.id}
              className={`cursor-pointer transition-colors duration-200 ${
                index % 2 === 0 ? "bg-surface" : "bg-bg"
              } hover:bg-primary-light`}
              onClick={() => handleRowClick(user)}
            >
              <td className="px-6 py-4 text-text-light">{user.id}</td>
              <td className="px-6 py-4 text-text">{user.name}</td>
              <td className="px-6 py-4 text-text-light">{user.email}</td>
              <td className="px-6 py-4">
                <span
                  className={`badge ${
                    user.role === "Admin"
                      ? "badge-primary"
                      : user.role === "Editor"
                      ? "badge-info"
                      : "badge-secondary"
                  }`}
                >
                  {user.role}
                </span>
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ExampleTable;
