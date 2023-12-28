import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Startsida() {
  return (
    <div>
      <header class="header">
        <h1> HabitsNTasks</h1>
        <nav role="navigation">
          <ul class="nav">
            <li>
              <Link to="/Habit">Habits</Link>
            </li>
            <li>
              <Link to="/Task"> Tasks </Link>
            </li>
            <li class="has-sub-nav">
              <Link to="/friends">Friends</Link>
              <ul class="sub-nav">
                <li>
                  <a href="#">View all</a>
                </li>

                <li>
                  <a href="#0">Skatepark</a>
                </li>
                <li>
                  <a href="#0">Street</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">NewTask</a>
            </li>
            <li>
              <a href="#0">NewHabit</a>
            </li>
          </ul>
        </nav>
      </header>

    
    </div>
  );
}

export default Startsida;