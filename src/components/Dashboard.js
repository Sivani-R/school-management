import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/students">Manage Students</Link></li>
        <li><Link to="/add-student">Add Student</Link></li>
        <li><Link to="/teachers">Manage Teachers</Link></li>
        <li><Link to="/add-teacher">Add Teacher</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
