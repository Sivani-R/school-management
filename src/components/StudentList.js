import React, { useEffect, useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/students')
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
