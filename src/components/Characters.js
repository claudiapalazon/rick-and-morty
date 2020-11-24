import React from "react";
import PropTypes from "prop-types";
import Character from "./Character";
import Filters from "./Filters";

const Characters = (props) => {
  const charactersItems = props.characters.map((character) => {
    return (
      <Character
        key={character.id}
        imageUrl={character.image}
        name={character.name}
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
