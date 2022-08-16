import React from 'react';
import movies from '../../data/movies';
import './MoviesList.scss';
import MovieWindow from './MovieWindow.jsx/MovieWindow';

const MoviesList = () => {
    

  return (
    <div className='moviesList__container'>

      {movies.map((movie) => (

        <MovieWindow
           id={movie.id}
            hash={movie.hash}
            title={movie.title}
            opis={movie.opis}
            length={movie.length}
            weight={movie.weight}
            poster={movie.poster}
            address={movie.address}
           zip={movie.zip}
        />
      ))}
    </div>
  );
};

export default MoviesList;
