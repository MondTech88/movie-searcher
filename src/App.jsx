import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import Search from "./assets/search.svg";

const App = () => {
  const API_KEY =
    import.meta.env.VITE_MOVIE_API_KEY || process.env.VITE_MOVIE_API_KEY;
  const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    const moviesData = data.Search;
    moviesData === undefined ? setMovies([]) : setMovies(moviesData);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieSearcher</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={Search}
          alt="Search for movies icon"
          onClick={async () => {
            searchTerm !== "" ? await searchMovies(searchTerm) : null;

            console.log("search result: ", movies);
          }}
        />
      </div>
      {movies?.length <= 0 ? (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      ) : (
        <div className="container">
          {movies?.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
