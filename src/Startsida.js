import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import LatestFriends from "./components/Latestfriend";
import FastHabitComponent from "./components/FastHabit";
import Task from "./Task";
import LatestTask from "./components/Latesttask";

function Startsida() {
  const [latestFriends, setLatestFriends] = useState([]);
  const [FastHabit, setFastHabit] = useState([
    {
      Title: "Gym",
      streak: 5,
      priority: "High",
    },
    {
      Title: "Study",
      streak: 3,
      priority: "High",
    },
    {
      Title: "Book reading",
      streak: 20,
      priority: "medium",
    },
  ]);

  useEffect(() => {
    const fetchLatestFriends = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();

        setLatestFriends(data.results);
      } catch (error) {
        console.error("Error fetching latest friends:", error);
      }
    };

    fetchLatestFriends();
  }, []); 

  return (
    <div>
      <header class="header">
        <h1 className="App" style={{ fontFamily: 'Cairo Play', fontSize: '40px' }}> HabitsNTasks</h1>
        <nav role="navigation">
          <ul class="nav">
            <li>
              <Link to="/Habit">Habits</Link>
            </li>
            <li>
              <Link to="/Task"> Tasks </Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
            <li class="has-sub-nav">
              <Link to='/'><b>Home</b></Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1 className="Dashboard">Dashboard</h1>
      <LatestFriends latestFriends={latestFriends} />
      <div className={`TaskBlocks "completed" : ""}`}>
        <LatestTask />
        <button>
      <Link to='/Task'>
        See more tasks
        </Link>
      </button>
      </div>
      <h2 className="h2habit">Current Habits</h2>
      <div className="habitContainer">
        <FastHabitComponent key={FastHabit} value={setFastHabit} />
              
      </div>
      <button className="habitsbtn">
      <Link to='/habit'>
        See more habits
        </Link>
      </button>
    </div>
  );
}

export default Startsida;
