import React, { useEffect, useState } from 'react';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch('/api/teachers')
      .then(response => response.json())
      .then(data => setTeachers(data));
  }, []);

  return (
    <div className="student-list">
      <h2>Teacher List</h2>
      <ul>
        {teachers.map(teacher => (
          <li key={teacher._id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;