// pages/results/[studentId].js

import { useRouter } from "next/router";
import resultsData from "./../results.json";

function StudentResult() {
  const router = useRouter();
  const { studentId } = router.query; // Get the student ID from the URL

  // Find the student data in your resultsData based on studentId
  const student = resultsData.results.find(
    (result) => result.studentId === studentId
  );

  if (!student) {
    return <p>Student not found.</p>;
  }

  return (
    <div>
      <h1>{student.studentName}'s Result</h1>
      <ul>
        {student.subjects.map((subject, index) => (
          <li key={index}>
            {subject.name}: {subject.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentResult;
