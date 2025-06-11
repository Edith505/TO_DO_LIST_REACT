import React from "react";
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <footer className="d-flex justify-content-center align-items-center bg-white border-top shadow-lg fixed-bottom p-3" id="mainfooter" style={{ gap: '10px' }}>
          <div className="d-flex" style={{ gap: '10px' }}>
            <NavLink to="/" className="btn btn-outline-primary px-4 py-2 fw-semibold"><FaListAlt /></NavLink>
            <NavLink to="/completed" className="btn btn-outline-success px-4 py-2 fw-semibold"><FaCheckSquare /></NavLink>
            <NavLink to="/add-task" className="btn btn-outline-warning px-4 py-2 fw-semibold"><FaPlusSquare/></NavLink>
          </div>
          <button className="btn btn-outline-danger px-4 py-2 fw-semibold"><FaTrash /></button>
        </footer>
    );
}
export default NavBar;