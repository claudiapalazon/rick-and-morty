import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <article>
      <img src={props.imageUrl} alt={`Producto: ${props.name}`} />
      <h2>{props.name}</h2>
      <h3>Status: {props.status}</h3>
      <h3>Species: {props.species}</h3>
      <h3>Origin: {props.origin}</h3>
      <h3>Episodes: {props.episodes}</h3>
      <Link to="/" title="Volver al listado">
        Atrás
      </Link>
    </article>
  );
};

export default CharacterDetail;
