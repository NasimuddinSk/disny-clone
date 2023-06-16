import React from 'react'
import { generes } from '../Constant/GenrasList';
import MovieList from './MovieList';

const GenreMovies = () => {
  return (
    <div>
      {
        generes.map((item, i) => i <= 4 && (
          <div className="p-1 md:px-8 md:p-16" key={item.id}>
            <h2 className="text-[20px] text-white font-bold ">{item.name} </h2>
            <MovieList genreId={item.id} index_={i} />
          </div>
        ))
      }
    </div>
  )
}

export default GenreMovies;