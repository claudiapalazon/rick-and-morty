import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import Characters from "./Characters";
import Header from "./Header";
import CharacterDetail from "./CharacterDetail";
import CharacterNotFound from "./CharacterNotFound";
import api from "../services/api";

const App = () => {
  // state
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState("");

  // fetch
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      alphabeticalCharacters(data); // call alphabetical function
      setCharacters(data); // change "characters" state with data value
    });
  }, []);

  // alphabetical order
  const alphabeticalCharacters = (list) => {
    list.sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
  };

  // change state filterText with the input value
  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };

  // filter characters with the value of the input
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterText.toLowerCase());
  });

  // check if a character is alive or dead
  function isAlive(foundCharacter) {
    let isAlive;
    if (foundCharacter.status === "Dead") {
      isAlive = "💀";
    } else if (foundCharacter.status === "Alive") {
      isAlive = "💖";
    } else {
      isAlive = "";
    }
    return isAlive;
  }

  // paint the detail of a character
  const renderDetail = (props) => {
    const productName = props.match.params.characterName;
    const foundCharacter = characters.find((character) => {
      return productName === character.name;
    });
    if (foundCharacter) {
      const live = isAlive(foundCharacter);
      return (
        <CharacterDetail
          imageUrl={foundCharacter.image}
          name={foundCharacter.name}
          status={foundCharacter.status}
          species={foundCharacter.species}
          isAlive={live}
          origin={foundCharacter.origin.name}
          episodes={foundCharacter.episode.length}
        />
      );
    } else {
      return <CharacterNotFound name={productName} back={true} />; // if you change the url and there's no character
    }
  };

  // paint header, main (with two options: the list of characters or the detail of one of them)
  return (
    <>
      <header className="Header">
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            {filteredCharacters.length === 0 ? (
              <>
                <Characters
                  characters={filteredCharacters}
                  filterText={filterText}
                  handleFilter={handleFilter}
                />
                <CharacterNotFound name={filterText} />
              </>
            ) : (
              <Characters
                characters={filteredCharacters}
                filterText={filterText}
                handleFilter={handleFilter}
              />
            )}
          </Route>
          <Route
            path="/character/:characterName"
            component={renderDetail}
          ></Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
