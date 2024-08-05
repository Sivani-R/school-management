import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import TeacherList from './components/TeacherList';
import AddTeacher from './components/AddTeacher';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

