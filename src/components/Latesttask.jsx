// LatestTask.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CounterPage = (props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>Counter</h2>
      <button onClick={() => props.changeValue(-1)}>-1</button>
      <button onClick={() => props.changeValue(1)}>+1</button>
    </div>
  );
};

function LatestTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchRandomActivity = async () => {
      try {
        const response = await fetch("https://www.boredapi.com/api/activity/");
        const json = await response.json();

        const newActivity = {
          title: json.activity,
          description: json.type,
          completed: false,
        };

        setTasks((prevTasks) => [...prevTasks, newActivity]);
      } catch (error) {
        console.error("Error fetching random activity:", error);
      }
    };

    fetchRandomActivity();
  }, []);

  return (
    <div className={`TaskBlocks ${tasks.completed ? "completed" : ""}`}>
      <h2 style={{ textDecoration: 'underline' }}>Current tasks</h2>
      {tasks.map((task, index) => (
        <div key={index}>
          <h3>{task.title}</h3>
          <p>Type: {task.description}</p>
        </div>
      ))}
      <CounterPage changeValue={(value) => setTasks([...tasks, value])} />
      <button>
        <Link to="/Task">See more tasks</Link>
      </button>
    </div>
  );
}

export default LatestTask;
