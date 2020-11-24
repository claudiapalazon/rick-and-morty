import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Character = (props) => {
  return (
    <Link
      to={`/character/${props.name}`}
      title="Show more about this character"
    >
      <li className={`character ${props.isAlive}`}>
        <img
          className="character-image"
          src={props.imageUrl}
          alt={`Producto: ${props.name}`}
        />
        <h2 className="character-name">{props.name}</h2>
        <h3 className="character-species">
          <span>{props.isAlien}</span>
          {props.species}
        </h3>
      </li>
    </Link>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  isAlien: PropTypes.string,
  isAlive: PropTypes.string,
};

export default Character;
