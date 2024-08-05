import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === 'student' || role === 'teacher') {
      navigate('/dashboard');
    } else {
      alert('Please select a valid role');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
