import "./SearchFilms.css";

import { useState, useEffect } from "react";

import { searchFilms } from "../../services/apicalls";

import MovieContainer from "../../Components/MealsContainer/MealsContainer";
import MovieItem from "../../Components/MealItem/MealItem";
import MovieDetail from "../../Components/MealDetail/MealDetail";

const SearchFilms = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState("");

  useEffect(() => {
    //EXECUTED WHEN THE USER STOPS WRITING 1SEC
    const identifier = setTimeout(() => {
      if (query) {
        setIsLoading(true);
        searchFilms(query)
          .then((res) => setMovies(res.data.results))
          .catch((error) => console.log(error));
        setIsLoading(false);
        setQuery("");
      } else {
        console.log("No query, nothing being searched!");
      }
    }, 1000);

    return () => clearTimeout(identifier);
  }, [query]);

  const searchHandler = (event) => {
    setQuery(event.target.value);
  };

  const selectMovieHandler = (movie) => {
    setSelectedMovie(movie);
  };
  return (
    <div className="searchFilmsDesign">
      <div className="searchContainer">
        <input
          className="search"
          type="search"
          placeholder="Introduce the title.."
          onChange={searchHandler}
          value={query}
        />
      </div>
      <div className="searchContentContainer">
      {isLoading && <p className="loadingDesign">Is loading....</p>}
      {!isLoading && movies.length !== 0 && (
        <MovieContainer>
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              onClick={() => selectMovieHandler(movie)}
            />
          ))}
        </MovieContainer>
      )}
      {selectedMovie && (
        <MovieDetail
          key={selectedMovie.id}
          poster={selectedMovie.poster_path}
          title={selectedMovie.title}
          overview={selectedMovie.overview}
        ></MovieDetail>
      )}
      </div>
    </div>
  );
};

export default SearchFilms;
