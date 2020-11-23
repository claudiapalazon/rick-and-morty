import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Characters from "./Characters";
import CharacterDetail from "./CharacterDetail";
import CharacterNotFound from "./CharacterNotFound";
import Loading from "./Loading";
import api from "../services/api";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.getDataFromApi().then((data) => {
      // const alpha = alphabeticalCharacters(data);
      setCharacters(data);
      setIsLoading(false);
    });
  }, []);

  // const alphabeticalCharacters = (list) => {
  //   list.sort((a, b) => {
  //     return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  //   });
  // };

  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterText.toLowerCase());
  });

  const renderDetail = (props) => {
    const productName = props.match.params.characterName;
    const foundCharacter = characters.find((character) => {
      return productName === character.name;
    });
    if (foundCharacter) {
      return (
        <CharacterDetail
          imageUrl={foundCharacter.image}
          name={foundCharacter.name}
          status={foundCharacter.status}
          species={foundCharacter.species}
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
      {isLoading === true ? <Loading /> : null}
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
    </>
  );
};

export default App;
