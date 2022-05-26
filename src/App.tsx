import React, { useCallback, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { FindMovie } from './components/FindMovie';

export const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = useCallback((newMovie: Movie) => {
    if (movies.every(movie => movie.imdbID !== newMovie.imdbID)) {
      setMovies(
        [...movies, newMovie],
      );
    } else {
      // eslint-disable-next-line no-alert
      alert('Film is already in the list');
    }
  }, [movies]);

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList
          movies={movies}
        />
      </div>

      <div className="sidebar">
        <FindMovie
          addMovie={addMovie}
        />
      </div>
    </div>
  );
};
