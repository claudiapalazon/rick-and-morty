import React from "react";
import PropTypes from "prop-types";

const Filters = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label className="form-label" htmlFor="name">
        Who are you looking for?
      </label>
      <input
        className="form-input"
        type="text"
        id="name"
        value={props.filterText}
        placeholder="Rick"
        onChange={handleFilter}
      />
    </form>
  );
};

Filters.propTypes = {
  filterText: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
