import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Task.css";
import LatestTask from "./components/Latesttask";

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    timeEstimate: "",
    taskType: "",
    completed: false,
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const fetchRandomActivity = async () => {
      try {
        const response = await fetch("https://www.boredapi.com/api/activity/");
        const json = await response.json();
        setNewTask({ ...newTask, title: json.activity });
      } catch (error) {
        console.error("Error fetching random activity:", error);
      }
    };

    fetchRandomActivity();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleRandomActivity = async () => {
    try {
      const response = await fetch("https://www.boredapi.com/api/activity/");
      const json = await response.json();
      setNewTask((prev) => ({ ...prev, title: json.activity }));
    } catch (error) {
      console.error("Error fetching random activity:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTasks = [...tasks];
    if (editIndex !== null) {
      updatedTasks[editIndex] = newTask;
      setEditIndex(null);
    } else {
      updatedTasks.push(newTask);
    }

    setTasks(updatedTasks);
    setNewTask({
      title: "",
      description: "",
      timeEstimate: "",
      taskType: "",
      completed: false,
    });
  };

  const handleRemoveTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setNewTask({ ...taskToEdit });
    setEditIndex(index);
  };

  const handleToggleCompletion = (index) => {
    setTasks((prev) => {
      const updatedTasks = [...prev];
      updatedTasks[index] = { ...updatedTasks[index], completed: !updatedTasks[index].completed };
      return updatedTasks;
    });
  };

  return (
    
    <div >
      <header class="header" >
        <h1  className="App" style={{fontFamily: 'Cairo Play', fontSize: '40px'}}> HabitsNTasks</h1>
        <nav role="navigation">
          <ul class="nav">
            <li>
              <Link to="/Habit">Habits</Link>
            </li>
            <li class="has-sub-nav">
              <Link to="/Task"> <strong>Tasks</strong> </Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="TaskH">
        <h1>Tasks</h1>
      </div>

      <form className="Tasks" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Time Estimate:
          <input
            type="time"
            name="timeEstimate"
            value={newTask.timeEstimate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Task Type:
          <input
            type="text"
            name="taskType"
            value={newTask.taskType}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleRandomActivity}>
          Get Random Task
        </button>
        <button type="submit">{editIndex !== null ? 'Update Task' : 'Add Task'}</button>
      </form>

      {tasks.map((task, index) => (
        <div key={index} className={`TaskBlock ${task.completed ? "completed" : ""}`}>
          <h3>{task.title}</h3>
          <p>Description: {task.description}</p>
          <p>Time Estimate: {task.timeEstimate}</p>
          <p>Task Type: {task.taskType}</p>
          <button
            className={`BtnC ${task.completed ? "BtnC-Completed" : "BtnC-Incomplete"}`}
            onClick={() => handleToggleCompletion(index)}
          >
            {task.completed ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button className="BtnD" onClick={() => handleRemoveTask(index)}>
            Remove Task
          </button>
          <button onClick={() => handleEditTask(index)}>
            Edit Task
          </button>
        </div>
      ))}
      <div className="TaskBlock">
         <LatestTask /> 
      </div>
     
    </div>
  );
}
