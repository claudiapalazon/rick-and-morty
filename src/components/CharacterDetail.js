import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// paint the detail of each character
const CharacterDetail = (props) => {
  return (
    <section className="app-detail">
      <article className="character-detail">
        <img
          className="img-detail"
          src={props.imageUrl}
          alt={`Producto: ${props.name}`}
        />
        <div className="title-detail">
          <h2>
            {props.name} <span>{props.isAlive}</span>
          </h2>
          <h3>Status: {props.status}</h3>
          <h3>Species: {props.species}</h3>
          <h3>Origin: {props.origin}</h3>
          <h3>Episodes: {props.episodes}</h3>
          <Link to="/" title="Back to the List">
            <button className="back back-detail">Go to the list</button>
          </Link>
        </div>
      </article>
    </section>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isAlive: PropTypes.string,
  origin: PropTypes.string.isRequired,
  episodes: PropTypes.number.isRequired,
};

export default CharacterDetail;
