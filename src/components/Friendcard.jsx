import React, { useState } from "react";

function FriendCard({ friend, onToggleInfo }) {
  const [expanded, setExpanded] = useState(false);

  const toggleInfo = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card">
      <p>
        Name: {friend.name.title} {friend.name.first} {friend.name.last}
        <button onClick={toggleInfo}>{expanded ? "Hide Info" : "Show Info"}</button>
      </p>
      {expanded && (
        <div>
          <p>Email: {friend.email}</p>
          <p>Age: {friend.dob.age}</p>
          <p>Gender: {friend.gender}</p>
        </div>
      )}
      <img src={friend.picture.medium} alt="profilePic" />
    </div>
  );
}

export default FriendCard;
