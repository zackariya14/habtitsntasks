import React from "react";

function LatestFriends({ latestFriends }) {
  return (
    <div>
      <ul>
      <h2>Online friends</h2>
        {latestFriends.map((friend, index) => (
          <li className="card" key={index}>
            <img className="onlinedot" src="https://i.stack.imgur.com/su1tM.png" alt="onlinedot"></img>
            {friend.name.title} {friend.name.first} {friend.name.last}
            <img src={friend.picture.medium} alt="profilePic" />

          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestFriends;
