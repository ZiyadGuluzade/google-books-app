import React from "react";

const Form = props => (
  <form>
    <div className="form-group">
      <label>Book</label>
      <input
        className="form-control"
        id="Title"
        type="text"
        value={props.q}
        placeholder="Name of the book"
        name="q"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-info"
      >
        Search
      </button>
    </div>
  </form>
);

export default Form;
