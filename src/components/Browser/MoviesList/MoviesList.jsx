import React from 'react';
import movies from '../../data/movies';
import './MoviesList.scss';
import MovieWindow from './MovieWindow.jsx/MovieWindow';

const MoviesList = () => {
  return (
    <div className='moviesList__container'>
      {movies.map((movie) => (
        <MovieWindow
          hash={movie.hash}
          title={movie.title}
          opis={movie.opis}
          length={movie.length}
          weight={movie.weight}
          address={movie.address}
        />
      ))}
    </div>
  );
};

export default MoviesList;
