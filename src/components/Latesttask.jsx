import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
        console.error("Fel vid hämtning av slumpaktivitet:", error);
      }
    };

    fetchRandomActivity();
  }, []);

  return (
    <div  >
        <h2 style={{textDecoration:'underline'}}>Current tasks</h2>
      {tasks.map((task, index) => (
        <div key={index}>
          <h3>{task.title}</h3>
          <p>Type: {task.description}</p>
        </div>
      ))}
      
    </div>
  );
}

export default LatestTask;