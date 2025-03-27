import moviesList from './data/movies.js';
import { useState, useEffect } from 'react'

export default function App() {

  console.log(moviesList)

  const [movies, setMovies] = useState(moviesList)

  console.log(movies)
  console.log(setMovies)

  const [search, setSearch] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(() => {

    setFilteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())))

  }, [movies, search]);

  return (
    <>
      <div className="container">
        <h1 className='text-center'>Movies</h1>

        <div className='d-flex justify-content-center'>

          <input
            type="text"
            className='form-control'
            name='search-movie'
            id='search-movie'
            aria-describedby='helpId'
            placeholder='search a task'
            value={search}
            onChange={e => setSearch(e.target.value)} />
        </div>

        <div className='row my-4'>
          {filteredMovies.map((movie, index) => (
            <div className='col-4 mt-2' key={index}>
              <div className="card" style={{ width: '15rem' }}>
                <img
                  className="card-img-top"
                  src={movie.img}
                  alt="random"
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
