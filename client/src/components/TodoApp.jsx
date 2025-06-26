// File: components/TodoApp.js
import React, { useState } from "react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";
import "./TodoApp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const removeTask = (index) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  };

  return (
    <div className="todo-app">
      <h2>📝 My To-Do List</h2>
      <form onSubmit={addTask} className="todo-form">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" title="Add Task">
          <FaPlus />
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            <span>{item.text}</span>
            <div className="actions">
              <button
                onClick={() => toggleComplete(index)}
                title="Mark as done"
              >
                <FaCheck />
              </button>
              <button onClick={() => removeTask(index)} title="Delete task">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
