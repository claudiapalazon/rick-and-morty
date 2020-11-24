import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import Characters from "./Characters";
import Header from "./Header";
import CharacterDetail from "./CharacterDetail";
import CharacterNotFound from "./CharacterNotFound";
import api from "../services/api";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    api.getDataFromApi().then((data) => {
      alphabeticalCharacters(data);
      setCharacters(data);
    });
  }, []);

  const alphabeticalCharacters = (list) => {
    list.sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
  };

  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterText.toLowerCase());
  });

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
      return <CharacterNotFound name={productName} back={true} />;
    }
  };

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
