import React from 'react';
import './App.css';
import './Task.css';
import Startsida from './Startsida';
import Friends from './friends';
import Task from './Task';
import Habit from './Habit'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Startsida />} />
          <Route path="/Habit" element={<Habit />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
