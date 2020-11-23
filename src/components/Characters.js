import React from "react";
import Character from "./Character";
import Filters from "./Filters";
import Title from "./Title";

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
    <div>
      <Title title="Ricky and Morty" />
      <Filters
        filterText={props.filterText}
        handleFilter={props.handleFilter}
      />
      <ul>{charactersItems}</ul>
    </div>
  );
};

export default Characters;
