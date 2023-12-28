import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Habit.css";


export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState({
    title: "",
    streak: 0,
    priority: "low",
  });
  const [filterPriority, setFilterPriority] = useState("all");
  const [sortOption, setSortOption] = useState("streakDesc");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHabit((prevHabit) => ({ ...prevHabit, [name]: value }));
  };

  const addHabit = () => {
    setHabits((prevHabits) => [
      ...prevHabits,
      { ...newHabit, id: Date.now() },
    ]);
    setNewHabit({ title: "", streak: 0, priority: "low" });
  };

  const updateHabitStreak = (index, newStreak) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit, i) =>
        i === index ? { ...habit, streak: newStreak } : habit
      )
    );
  };

  const increaseStreak = (index) => {
    updateHabitStreak(index, habits[index].streak + 1);
  };

  const decreaseStreak = (index) => {
    updateHabitStreak(index, Math.max(0, habits[index].streak - 1));
  };

  const resetStreak = (index) => {
    updateHabitStreak(index, 0);
  };

  const priorityOrder = { low: 0, medium: 1, high: 2 };

  const filteredAndSortedHabits = habits
    .filter(
      (habit) =>
        filterPriority === "all" || habit.priority === filterPriority
    )
    .sort((a, b) => {
      if (sortOption === "streakDesc") return b.streak - a.streak;
      if (sortOption === "streakAsc") return a.streak - b.streak;
      if (sortOption === "priorityDesc")
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      if (sortOption === "priorityAsc")
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      return 0;
    });

  return (
    <div>
      <Link to="/">Startsida</Link>

      <div>
        <h1>Habit Tracker</h1>

        <div className="Hab">
          <h2>Create a New Habit</h2>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newHabit.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Priority:
            <select
              name="priority"
              value={newHabit.priority}
              onChange={handleInputChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <button onClick={addHabit}>Add Habit</button>
        </div>

        <div>
          <h2>My Habits</h2>
          <label>
            Filter Priority:
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
            >
              <option value="all">All</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <label>
            Sort By:
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="streakDesc">Streak (High to Low)</option>
              <option value="streakAsc">Streak (Low to High)</option>
              <option value="priorityDesc">Priority (High to Low)</option>
              <option value="priorityAsc">Priority (Low to High)</option>
            </select>
          </label>

          {filteredAndSortedHabits.map((habit, index) => (
            <div key={index}>
              <h3>{habit.title}</h3>
              <p>Streak: {habit.streak}</p>
              <p>Priority: {habit.priority}</p>
              <button onClick={() => increaseStreak(index)}>
                Increase Streak
              </button>
              <button onClick={() => decreaseStreak(index)}>
                Decrease Streak
              </button>
              <button onClick={() => resetStreak(index)}>Reset Streak</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
