import React, { useState } from 'react';

const AddTeacher = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/teachers', {
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
      <h2>Add Teacher</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Teacher Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
};

export default AddTeacher;
