import React from "react";
import { Link } from "react-router-dom";

const Character = (props) => {
  return (
    <li>
      <Link to={`/character/${props.name}`} title="Saber más de este personaje">
        <img src={props.imageUrl} alt={`Producto: ${props.name}`} />
        <h2>{props.name}</h2>
        <h3>{props.species}</h3>
      </Link>
    </li>
  );
};

export default Character;
