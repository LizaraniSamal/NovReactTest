import React, { useState } from 'react';
import './App.css';

const employees = [
  { id: 1, name: "Johnson Wood", image:"employee1.jpeg", role: "Front End Developer", email: "johnsonwood@microsoft.com", status: "Active" },
  { id: 2, name: "John Doe", image:"employee2.jpeg", role: "Team Lead", email: "johndoe@microsoft.com", status: "Active" },
  { id: 3, name: "Fakhar Naveed", image:"employee3.jpeg", role: "UI/UX Designer", email: "fakhar@microsoft.com", status: "Active" },
  { id: 4, name: "Alex Made", image:"employee1.jpeg", role: "Backend Developer", email: "alexmade@microsoft.com", status: "Inactive" },
  { id: 5, name: "Johnson Wood", image:"employee2.jpeg", role: "Front End Developer", email: "johnsonwood@microsoft.com", status: "Inactive" },
  { id: 6, name: "John Doe", image:"employee4.jpeg", role: "Team Lead", email: "johndoe@microsoft.com", status: "Active" },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || employee.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container my-4">
      <div className="header">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filter-buttons">
          <button className={`filter-btn ${filterStatus === "All" ? "active" : ""}`} onClick={() => setFilterStatus("All")}>All</button>
          <button className={`filter-btn ${filterStatus === "Active" ? "active" : ""}`} onClick={() => setFilterStatus("Active")}>Active</button>
          <button className={`filter-btn ${filterStatus === "Inactive" ? "active" : ""}`} onClick={() => setFilterStatus("Inactive")}>Inactive</button>
        </div>
      </div>
      <h3>Employees</h3>
      <div className="employee-grid">
        {filteredEmployees.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <img className="employee-photo" src={`/images/${employee.image}`} alt={employee.name} />
            <div className="employee-details">
              <h4 className="employee-name">{employee.name}</h4>
              <p className="employee-role">{employee.role}</p>
              <p className="employee-email">Email: {employee.email}</p>
              <div className="action-buttons">
                <button className="btn btn-danger btn-sm">Block</button>
                <button className="btn btn-secondary btn-sm">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
