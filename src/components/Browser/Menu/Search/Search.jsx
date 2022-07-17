import React from 'react'
import './Search.scss'

const Search = () => {
  return (
      <div className="search__container">
          <div className="all__movies">
              Wszystkie filmy
          </div>
          <input className='search__input' type="text" placeholder='Szukaj...' />
          <button className="search__btn"> Search</button>
    
       
</div>
  )
}

export default Search