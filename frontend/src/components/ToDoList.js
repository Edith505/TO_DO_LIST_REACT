import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ tasks, onToggleCompleted }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <ul className="list-group m-3 shadow-sm rounded">
        <li className="list-group-item text-center">
          <h2 className="text-secondary">Aucune tâche à afficher</h2>
          <p className="text-muted">Ajoutez une nouvelle tâche pour commencer !</p>
        </li>
      </ul>
    );
  }

  return (
    <ul className="list-group m-3 shadow-sm rounded">
      {tasks.map((task) => (
        <ToDo
          key={task.id}
          task={task}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </ul>
  );
};

export default ToDoList;