import React from "react";
import "./App.css";
import Friends from "./friends";
import { Link } from "react-router-dom";

function Startsida() {
  return (
    <div>
      <h1 className="h1header">HabitsNTasks</h1>
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
      </div>
    </div>
  );
}

export default Startsida;
