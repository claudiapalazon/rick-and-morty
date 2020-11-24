import React from "react";
import PropTypes from "prop-types";
import Character from "./Character";
import Filters from "./Filters";

const Characters = (props) => {
  const charactersItems = props.characters.map((character) => {
    let isAlien = character.species === "Human" ? "👤" : "👽";
    let isAlive = character.status === "Dead" ? "dead" : "";
    return (
      <Character
        key={character.id}
        imageUrl={character.image}
        name={character.name}
        isAlien={isAlien}
        isAlive={isAlive}
        species={character.species}
      />
    );
  });

  return (
    <section>
      <Filters
        filterText={props.filterText}
        handleFilter={props.handleFilter}
      />
      <ul className="character-list">{charactersItems}</ul>
    </section>
  );
};

Characters.propTypes = {
  characters: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Characters;
