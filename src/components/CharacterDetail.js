import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <article class="character-detail">
      <img src={props.imageUrl} alt={`Producto: ${props.name}`} />
      <div className="title-detail">
        <h2>{props.name}</h2>
        <h3>Status: {props.status}</h3>
        <h3>Species: {props.species}</h3>
        <h3>Origin: {props.origin}</h3>
        <h3>Episodes: {props.episodes}</h3>
        <Link to="/" title="Volver al listado">
          <button className="back back-detail">Go to the list</button>
        </Link>
      </div>
    </article>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  episodes: PropTypes.number.isRequired,
};

export default CharacterDetail;
