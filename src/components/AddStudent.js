import React, { useState } from 'react';

const AddStudent = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    }).then(() => {
      setName('');
    });
  };

  return (
    <div className="add-student">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
