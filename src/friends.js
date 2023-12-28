import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import FriendCard from "./components/Friendcard";

function Friends() {
  const [friends, setFriends] = useState([]);
  const [yourFriends, setYourFriends] = useState([]);
  const [latestFriends, setLatestFriends] = useState([]);
  const [filteredFriends, setFilteredFriends] = useState(null); 

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setFriends(data.results));
  }, []);

  useEffect(() => {
    setFilteredFriends(yourFriends);
  }, [yourFriends]);

  const addFriend = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => {
        const newFriendList = [...yourFriends, data.results[0]];
        setYourFriends(newFriendList);

        const newLatestFriends = [
          data.results[0],
          ...latestFriends.slice(0, 4),
        ];
        setLatestFriends(newLatestFriends);
      });
  };

  const filterFriends = (gender) => {
    const filtered = yourFriends.filter((friend) => friend.gender === gender);

    setFilteredFriends(filtered);
    if (filteredFriends == 0){
      return(
        <div>U need new friends</div>
      )
    } 
  };

  const resetFilter = () => {
    setFilteredFriends(yourFriends);
  };
  

  return (
    <div>
      <header className="header">
        <h1 className="App" style={{ fontFamily: "Cairo Play", fontSize: "40px" }}>
          HabitsNTasks
        </h1>
        <nav role="navigation">
          <ul className="nav">
            <li>
              <Link to="/Habit">Habits</Link>
            </li>
            <li>
              <Link to="/Task"> Tasks </Link>
            </li>
            <li class="has-sub-nav">
              <Link to="/friends">
                <b>Friends</b>
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <h1>Add friends</h1>
        {friends.length > 0 && (
          <div className="card">
            <h2>Need new friends?</h2>
            <button onClick={addFriend}>Add friend</button>
          </div>
        )}
      </div>
      <div className="filterbutton">
        <button onClick={() => filterFriends("male")}>Show Males</button>
        <button onClick={() => filterFriends("female")}>Show Females</button>
        <button onClick={resetFilter}>Show All</button>
      </div>
      <h1 className="friendsh1">Your friends</h1>

      {filteredFriends && filteredFriends.length > 0 ? (
  <div className="cards">
    {filteredFriends.map((friend, index) => (
      <FriendCard key={index} friend={friend} />
    ))}
  </div>
) : null}

    </div>
  );
}

export default Friends;
