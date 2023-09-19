// pages/api/students.js

import Student from "../../models/students";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, roll, contact } = req.body;
      const student = new Student({
        name,
        roll,
        contact,
      });
      await student.save();
      return res.status(201).json({ message: "Student added successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error adding student" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
