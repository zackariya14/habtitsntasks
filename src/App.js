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
<<<<<<< HEAD
<Router>
  <Routes>
    <Route path="/" element={<Startsida />} />
    <Route path="/Habit" element={<Habit />} />
    <Route path="/Task" element={<Task />} />
    <Route path="/friends" element={<Friends />} />
    
  </Routes>
</Router>   
 </div>
    
=======
      <Router>
        <Routes>
          <Route path="/" element={<Startsida />} />
          <Route path="/Habit" element={<Habit />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </Router>
    </div>
>>>>>>> 9afd9610fcc81447c86fb5d60fbf4954f1b1cbb2
  );
}

export default App;
