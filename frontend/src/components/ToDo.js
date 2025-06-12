import React from "react";

const ToDo = ({ task, onToggleCompleted }) => (
  <li
    className={
      "list-group-item d-flex justify-content-between align-items-center border-0 border-bottom py-3 fs-5 bg-white" +
      (task.completed ? " text-decoration-line-through text-secondary" : "")
    }
    style={{
      background: task.completed ? "#f0f7ff" : "#fff",
      transition: "background 0.2s",
    }}
  >
    <span>{task.name}</span>
    <button
      className={
        "btn btn-sm rounded-pill px-3 shadow border-0 " +
        (task.completed
          ? "btn-success text-white"
          : "btn-outline-primary text-primary")
      }
      style={{
        background: task.completed
          ? "linear-gradient(90deg, #4fca91 0%, #31a07c 100%)"
          : "transparent",
        borderColor: task.completed ? "#4fca91" : "#4f8cff",
        transition: "background 0.2s, color 0.2s, border-color 0.2s",
        fontWeight: 500,
      }}
      onClick={() => onToggleCompleted(task.id)}
      title={task.completed ? "Marquer comme à faire" : "Marquer comme terminée"}
    >
      &#x2713;
    </button>
  </li>
);

export default ToDo;