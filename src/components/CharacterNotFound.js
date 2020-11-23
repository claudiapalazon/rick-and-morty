import React from "react";
import { Link } from "react-router-dom";

const CharacterNotFound = (props) => {
  return (
    <section className="card">
      <p>No existe ningún personaje con el nombre "{props.name}"</p>
      {props.back === true ? (
        <Link to="/" title="Volver al listado">
          Atrás
        </Link>
      ) : null}
    </section>
  );
};

export default CharacterNotFound;
