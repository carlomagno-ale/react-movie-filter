import moviesList from './data/movies.js';
import { useState, useEffect } from 'react'

export default function App() {

  console.log(moviesList)

  const [movies, setMovies] = useState(moviesList)

  console.log(movies)
  console.log(setMovies)

  const [search, setSearch] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)

  /*useEffect(() => {

    setFilteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())))

  }, [movies, search]);*/

  useEffect(() => {

    setFilteredMovies(movies.filter(movie => movie.genre.toLowerCase().includes(search.toLowerCase())))

  }, [movies, search]);

  return (
    <>
      <div className="container">
        <h1 className='text-center'>Movies</h1>

        {/*<div className='d-flex'>
          <input
            type="text"
            className='form-control'
            name='search-movie'
            id='search-movie'
            placeholder='Cerca un film '
            value={search}
            onChange={e => setSearch(e.target.value)} />
        </div>*/}

        <div className='my-2'>
          <select
            className="form-select"
            onChange={(e) => setSearch(e.target.value)}
          >
            <option value="">Tutti i generi</option>
            <option value="fantascienza">Fantascienza</option>
            <option value="thriller">Thriller</option>
            <option value="romantico">Romantico</option>
            <option value="azione">Azione</option>

            {/* rimane duplicato
            { movies.map((singleMovie, k) => (
                <option value={`${singleMovie.genre}`} key={k}>{`${singleMovie.genre}`}</option>
              ))}
            */}

          </select>
        </div>

        <div className='row mt-2 mb-5'>
          {filteredMovies.map((movie, index) => (
            <div className='col-4 mt-2' key={index}>
              <div className="card" style={{ width: '15rem' }}>
                <img
                  className="card-img-top"
                  src={movie.img}
                  alt="locandina"
                />
                <div className="card-body">
                  <h5 className="card-title fs-6">{movie.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
