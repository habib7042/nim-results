// models/student.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  roll: Number,
  contact: String,
  result: String,
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
