import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';

class App extends React.Component {
  render() {
    return (
      <section id="todo" className="container py-5">
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
        <footer className="d-flex justify-content-center align-items-center bg-white border-top shadow-lg fixed-bottom p-3" id="mainfooter" style={{ gap: '10px' }}>
          <div className="d-flex" style={{ gap: '10px' }}>
            <a href="#" className="btn btn-outline-primary px-4 py-2 fw-semibold"><FaListAlt /></a>
            <a href="#" className="btn btn-outline-success px-4 py-2 fw-semibold"><FaCheckSquare /></a>
            <a href="#" className="btn btn-outline-warning px-4 py-2 fw-semibold"><FaPlusSquare/></a>
          </div>
          <button className="btn btn-outline-danger px-4 py-2 fw-semibold"><FaTrash /></button>
        </footer>
      </section>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
