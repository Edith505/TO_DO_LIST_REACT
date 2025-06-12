import React from "react";
import ToDoList from "./ToDoList";
import AddTask from "./AddTask";
import NavBar from "./NavBar";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "../css/toDo.css";

function getPageTitle(pathname) {
  switch (pathname) {
    case "/":
    case "/active":
      return "📋 Liste des tâches";
    case "/completed":
      return "✅ Tâches terminées";
    case "/add-task":
      return "📝 Nouvelle tâche";
    default:
      return "📋 Liste des tâches";
  }
}

function useQueryFilter(tasks) {
  const location = useLocation();
  if (location.pathname === "/completed") {
    return tasks.filter(t => t.completed);
  }
  if (location.pathname === "/active") {
    return tasks.filter(t => !t.completed);
  }
  return tasks;
}

function App() {
  const [tasks, setTasks] = React.useState([]);
  const location = useLocation();
  const filteredTasks = useQueryFilter(tasks);
  const navigate = useNavigate();

  const handleAddTask = (name) => {
    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        name,
        completed: false,
      }
    ]);
    navigate("/");
  };

  const handleToggleCompleted = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleClearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <section id="todo" className="container py-5 mb-5">
      <h1 className="m-3 fw-bold display-5 text-center mb-4">{pageTitle}</h1>
      <Routes>
        <Route
          path="/add-task"
          element={<AddTask onAddTask={handleAddTask} />}
        />
        <Route
          path="/"
          element={
            <ToDoList
              tasks={filteredTasks}
              onToggleCompleted={handleToggleCompleted}
            />
          }
        />
        <Route
          path="/active"
          element={
            <ToDoList
              tasks={filteredTasks}
              onToggleCompleted={handleToggleCompleted}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <ToDoList
              tasks={filteredTasks}
              onToggleCompleted={handleToggleCompleted}
            />
          }
        />
      </Routes>
      <NavBar onClearCompleted={handleClearCompleted} />
    </section>
  );
}

export default App;