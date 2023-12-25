import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Friends() {
  const [friends, setFriends] = useState([]);
  const [yourFriends, setYourFriends] = useState([]);
  const [expandedFriends, setExpandedFriends] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setFriends(data.results));
  }, []);

  const addFriend = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => {
        const newFriendList = [...yourFriends, data.results[0]];
        setYourFriends(newFriendList);

        fetch("https://randomuser.me/api")
          .then((res) => res.json())
          .then((data) => setFriends(data.results));
      });
  };

  const toggleFriendInfo = (index) => {
    setExpandedFriends((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      <header class="header">
        <h1> HabitsNTasks</h1>{" "}
        <nav role="navigation">
          {" "}
          <ul class="nav">
            {" "}
            <li>
              <a href="#0">Habits</a>
            </li>{" "}
            <li>
              <a href="#0">Tasks</a>
            </li>{" "}
            <li class="has-sub-nav">
              {" "}
              <Link to="/friends">
                {" "}
                <strong>Friends</strong>{" "}
              </Link>{" "}
              <ul class="sub-nav">
                {" "}
                <li>
                  <a href="#">View all</a>
                </li>{" "}
                <li>
                  <a href="#0">Skatepark</a>
                </li>{" "}
                <li>
                  <a href="#0">Street</a>
                </li>{" "}
              </ul>{" "}
            </li>{" "}
            <li>
              <a href="#0">NewTask</a>
            </li>{" "}
            <li>
              <a href="#0">NewHabit</a>
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
      </header>

      <div>
        <h2>Add friends</h2>
        {friends.length > 0 && (
          <div className="card">
            <p>
              Name: {friends[0].name.title} {friends[0].name.first}{" "}
              {friends[0].name.last}
            </p>
            <p>Country: {friends[0].location.country} </p>
            <img src={friends[0].picture.medium} alt="profilePic" />
            <button onClick={addFriend}>Add friend</button>
          </div>
        )}
      </div>

      {yourFriends.length > 0 && (
        <div>
          <h1>Your friends</h1>
          {yourFriends.map((friend, index) => (
            <div className="card" key={index}>
              <p>
                Name: {friend.name.title} {friend.name.first} {friend.name.last}
                <button onClick={() => toggleFriendInfo(index)}>
                  {expandedFriends[index] ? "Hide Info" : "Show Info"}
                </button>
              </p>
              {expandedFriends[index] && (
                <div>
                  <p>Email: {friend.email}</p>
                  <p>Date of Birth: {friend.dob.date}</p>
                  <p>Gender: {friend.gender}</p>
                </div>
              )}
              <img src={friend.picture.medium} alt="profilePic" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Friends;
