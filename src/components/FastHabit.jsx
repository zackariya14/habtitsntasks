import React, { useState } from "react";


function FastHabitComponent({ FastHabit }) {
  const [fastHabitData, setFastHabitData] = useState([
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

  const increaseFastHabitStreaks = (index) => {
    updateFastHabitStreaks(index, fastHabitData[index].streak + 1);
  };

  const decreaseFastHabitStreaks = (index) => {
    updateFastHabitStreaks(index, Math.max(0, fastHabitData[index].streak - 1));
  };

  const resetFastHabitStreaks = (index) => {
    updateFastHabitStreaks(index, 0);
  };

  const updateFastHabitStreaks = (index, newStreak) => {
    setFastHabitData((prevFastHabit) =>
      prevFastHabit.map((habit, i) =>
        i === index ? { ...habit, streak: newStreak } : habit
      )
    );
  };

  return (
    <>
      {fastHabitData.map((fast, index) => (
        <div key={index}>
          <h3>{fast.Title}</h3>
          <p>{fast.streak}</p>
          <p>{fast.priority}</p>
          <button onClick={() => increaseFastHabitStreaks(index)}>
            Increase Streak
          </button>
          <button onClick={() => decreaseFastHabitStreaks(index)}>
            Decrease Streak
          </button>
          <button onClick={() => resetFastHabitStreaks(index)}>
            Reset Streak
          </button>
        </div>
      ))}
    </>
  );
}

export default FastHabitComponent;
