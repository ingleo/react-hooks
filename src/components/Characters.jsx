import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";

import Search from "./Search";

import useCharacters from "../hooks/useCharacters";

const API = "https://rickandmortyapi.com/api/character";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  /**
   * useEffect>
   * primer parámetro es función anonima con lógica
   * segundo parámetro variable(s) que escucha cambio, si no hay se pasa arreglo vacio y solo hace render 1 vez
   */
  /* useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []); */

  //llamado con custom hook
  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  //Funcion sin usar useCallback
  /* const handleSearch = () => {
    setSearch(searchInput.current.value);
  }; */
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  //Filtro de usuarios sin usar useMemo
  /* const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(search.toLowerCase());
  }); */

  const filteredCharacters = useMemo(
    () =>
      characters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="Characters">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      {filteredCharacters.map((character) => (
        <div className="item" key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}>
            Agregar a favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
