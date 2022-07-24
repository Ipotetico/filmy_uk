import React from 'react';
import AllMoviesItem from './AllMoviesItem/AllMoviesItem';
import movies from '../../../data/movies';

import './AllMovies.scss';

const AllMovies = ({ open }) => {
  return (
    <div
      className={open ? 'allMovies__container open' : 'allMovies__container'}>
      {movies.map((movie) => (
        <AllMoviesItem title={movie.title} />
      ))}
    </div>
  );
};

export default AllMovies;
