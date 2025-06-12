import React from "react";
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = ({ onClearCompleted }) => (
  <footer className="footer-nav d-flex justify-content-center align-items-center p-3 bg-white border-top shadow-lg fixed-bottom" id="mainfooter">
    <nav>
      <NavLink to="/" end className={({ isActive }) =>
        "btn " + (isActive ? "btn-primary text-white" : "btn-outline-primary")} title="Toutes les tâches">
        <FaListAlt />
      </NavLink>
      <NavLink to="/completed" className={({ isActive }) =>
        "btn " + (isActive ? "btn-success text-white" : "btn-outline-success")} title="Terminées">
        <FaCheckSquare />
      </NavLink>
      <NavLink to="/add-task" className={({ isActive }) =>
        "btn " + (isActive ? "btn-warning text-white" : "btn-outline-warning")} title="Ajouter une tâche">
        <FaPlusSquare />
      </NavLink>
    </nav>
    <button className="btn btn-outline-danger" onClick={onClearCompleted} title="Supprimer les tâches terminées">
      <FaTrash />
    </button>
  </footer>
);

export default NavBar;