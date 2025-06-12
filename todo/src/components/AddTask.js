import React from "react";

class AddTask extends React.Component {
  state = {
    taskName: ""
  };

  handleChange = (e) => {
    this.setState({ taskName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.taskName.trim() && this.props.onAddTask) {
      this.props.onAddTask(this.state.taskName.trim());
      this.setState({ taskName: "" });
    }
  };

  render() {
    return (
      <div className="card shadow-sm  rounded border-0">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group mb-4">
            <label
              htmlFor="taskName"
              className="form-label fw-semibold text-secondary"
            >
              Nom de la tâche
            </label>
            <input
              type="text"
              className="form-control form-control-lg border-primary shadow-sm"
              id="taskName"
              placeholder="Entrez une tâche"
              required
              value={this.state.taskName}
              onChange={this.handleChange}
              style={{ boxShadow: '0 0 5px rgba(0,123,255,.5)' }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg fw-semibold shadow-sm"
          >
            Ajouter
          </button>
        </form>
      </div>
    );
  }
}

export default AddTask;