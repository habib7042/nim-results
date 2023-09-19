// pages/add-student.js

import React, { useState } from "react";

export default function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement the logic to send the form data to your API endpoint here
    console.log(formData);
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Roll:</label>
          <input
            type="number"
            name="roll"
            value={formData.roll}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}
