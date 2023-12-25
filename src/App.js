import './App.css';
import './Task.css';
import Startsida from './Startsida';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Friends from './friends';
import Habit from './Habit';
import Task from './Task';
function App() {
  return (
    <div className="App">
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
