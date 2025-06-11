import React from "react";

class ToDoList extends React.Component {
  render() {
    return (
        <section>
            <h1 className="m-3 fw-bold display-5 text-center mb-4">📝 Nouvelle Tâche</h1>
            <div className="card shadow-sm rounded border-0">
                <form className="card-body">
                <div className="form-group mb-4">
                    <label htmlFor="taskName" className="form-label fw-semibold text-secondary">
                    Nom de la tâche
                    </label>
                    <input
                    type="text"
                    className="form-control form-control-lg border-primary"
                    id="taskName"
                    placeholder="Entrez une tâche"
                    required
                    style={{ boxShadow: '0 0 5px rgba(0,123,255,.5)' }}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-lg fw-semibold shadow-sm">
                    Ajouter
                </button>
                </form>
            </div>
        </section>

    )
     
  }
}
export default ToDoList;