import moviesList from './data/movies.js';
import { useState } from 'react'

export default function App() {

  console.log(moviesList)

  const [movies, setMovies] = useState(moviesList)

  console.log(movies)
  console.log(setMovies)

  return (
    <>
      <div className="container">
        <h1 className='text-center'>Movies</h1>

        <div className='d-flex justify-content-center'>
          <form>
            <input
              type="text"
              className="form-control"
              name="new_article"
              id="new_article"
              placeholder="Cerca il titolo del film"
            />
          </form>

        </div>

        <div className='row my-4'>
          {movies.map((movie, index) => (
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
