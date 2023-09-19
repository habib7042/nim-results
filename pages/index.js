// pages/index.js

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Student Database</h1>
      <nav>
        <Link href="/add_student">Add Student</Link>
        {/* Add other navigation links here */}
      </nav>
      {/* Display a list of students or other content */}
    </div>
  );
}
