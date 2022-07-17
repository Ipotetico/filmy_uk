import React, { useState } from 'react';
import movies from '../../data/movies';
import './MoviesList.scss';
import MovieWindow from './MovieWindow.jsx/MovieWindow';

const MoviesList = () => {
  const [classNameProp, setClassNameProp] = useState(false);
  return (
    <div className='moviesList__container'>
      {movies.map((movie) => (
        <MovieWindow
          hash={movie.hash}
          title={movie.title}
          opis={movie.opis}
          classNameProp={classNameProp}
          setClassNameProp={setClassNameProp}
        />
      ))}
    </div>
  );
};

export default MoviesList;
