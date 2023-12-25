import React from "react";
import "./App.css";
import Friends from "./friends";
import { Link } from "react-router-dom";

function Startsida() {
  return (
    
    <div>
      <header class="header">
        <h1> HabitsNTasks</h1>
  <nav role="navigation">
    <ul class="nav">
      <li><a href="#0">Habits</a></li>
      <li><a href="#0">Tasks</a></li>
      <li class="has-sub-nav">
        <Link to='/friends'>
        Friends
        </Link>
        <ul class="sub-nav">
          <li><a href="#">View all</a></li>
          
          <li><a href="#0">Skatepark</a></li>
          <li><a href="#0">Street</a></li>
        </ul>
      </li>
      <li><a href="#0">NewTask</a></li>
      <li><a href="#0">NewHabit</a></li>
    </ul>    
  </nav>  
</header>

      {/* <h1 className="h1header">HabitsNTasks</h1>
      <div className="habitsntaskbtn">
        <Link to="/Task">
          <h2>Task </h2>
        </Link>
        <Link to="/Habit">
          <h2> Habit </h2>
        </Link>
      </div>
      <div className="friendsbtn">
        <Link to="/friends">
          <h3>Friends</h3>
        </Link>
      </div> */}
    </div>
  );
}

export default Startsida;
