import React from "react";
import ToDoList from "./ToDoList";
import NavBar from "./NavBar";
import AddTask from "./AddTask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/toDo.css"; 

class App extends React.Component {
  render() {
    return (
      <section id="todo" className="container py-5">
        <BrowserRouter>
          <Routes>
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/:filter" element={<ToDoList />} />
          </Routes>
          <NavBar />
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
