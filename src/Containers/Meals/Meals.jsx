import "./PopularFilms.css";

import { useState, useEffect } from "react";

import { getPopularFilms } from "../../services/apicalls";

import MovieContainer from "../../Components/MealsContainer/MealsContainer";
import MovieItem from "../../Components/MealItem/MealItem";
import MovieDetail from "../../Components/MealDetail/MealDetail";

const PopularFilms = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState("");

  useEffect(() => {
    //EXECUTED JUST WHEN THE COMPONENT IS MOUNTED
    getPopularFilms()
      .then((res) => setMovies(res.data.results))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, []);

  const selectMovieHandler = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="popularFilmsDesign">
      {isLoading && <p className="loadingDesign">IS LOADING...</p>}
      {!isLoading && (
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
      {!isLoading && selectedMovie && (
        <MovieDetail
          key={selectedMovie.id}
          poster={selectedMovie.poster_path}
          title={selectedMovie.title}
          overview={selectedMovie.overview}
        />
      )}
    </div>
  );
};
export default PopularFilms;
