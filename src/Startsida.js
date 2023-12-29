import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import LatestFriends from "./components/Latestfriend";
import LatestTask from "./components/Latesttask";

 

function Startsida() {
  const [latestFriends, setLatestFriends] = useState([]);

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
       
        <h1  className="App" style={{fontFamily: 'Cairo Play', fontSize: '40px'}}> HabitsNTasks</h1>
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
      
      <LatestFriends latestFriends={latestFriends} />
      <LatestTask />


    </div>
  );
}

export default Startsida;
