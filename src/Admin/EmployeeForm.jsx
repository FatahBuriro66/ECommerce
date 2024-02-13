import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    name: '',
    title: '',
    // Add other employee properties here
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    // Clear form fields
    setEmployee({ name: '', title: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Employee Name"
        value={employee.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Employee Title"
        value={employee.title}
        onChange={handleInputChange}
      />
      {/* Add other input fields for employee properties */}
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;