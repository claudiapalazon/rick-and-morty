import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Character = (props) => {
  return (
    <Link to={`/character/${props.name}`} title="Saber más de este personaje">
      <li className="character">
        <img
          className="character-image"
          src={props.imageUrl}
          alt={`Producto: ${props.name}`}
        />
        <h2 className="character-name">{props.name}</h2>
        <h3 className="character-species">{props.species}</h3>
      </li>
    </Link>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Character;
