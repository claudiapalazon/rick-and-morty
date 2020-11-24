import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterNotFound = (props) => {
  return (
    <section className="not-found">
      <p className="not-found-item">
        There is no character with the name "{props.name}"
      </p>
      {props.back === true ? (
        <Link to="/" title="Volver al listado">
          <button className="back">Go to the list</button>
        </Link>
      ) : null}
    </section>
  );
};

CharacterNotFound.propTypes = {
  name: PropTypes.string.isRequired,
  back: PropTypes.bool,
};

export default CharacterNotFound;
