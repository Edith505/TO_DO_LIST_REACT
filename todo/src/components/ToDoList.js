import React from "react";


const ToDoList = () => (
    <>
        <h1 className="m-3 text-success fw-bold display-5 text-center mb-4">📋 Liste de tâches</h1>
    <ul className="list-group m-3 shadow-sm rounded">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 border-bottom py-3 fs-5 bg-white">
                Ranger la chambre
                <button className="btn btn-sm btn-outline-success rounded-pill px-3 shadow">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 border-bottom py-3 fs-5 bg-white">
                Manger
                <button className="btn btn-sm btn-outline-success rounded-pill px-3 shadow">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 border-bottom py-3 fs-5 bg-white">
                Signer le contrat
                <button className="btn btn-sm btn-outline-success rounded-pill px-3 shadow">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-3 fs-5 bg-white">
                Devoir de maths
                <button className="btn btn-sm btn-outline-success rounded-pill px-3 shadow">&#x2713;</button>
            </li>
        </ul>
    </>
)
export default ToDoList;