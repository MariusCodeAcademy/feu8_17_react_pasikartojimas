import { useState } from 'react';
import SingleMovie from './SingleMovie';

const movies = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    wasExpensive: true,
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    wasExpensive: false,
  },
  {
    id: 3,
    title: 'The Matrix',
    year: 1999,
    director: 'Lana Wachowski, Lilly Wachowski',
    wasExpensive: true,
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    wasExpensive: true,
  },
  {
    id: 5,
    title: 'Forrest Gump',
    year: 1994,
    director: 'Robert Zemeckis',
    wasExpensive: false,
  },
];

export default function MoviesList() {
  // reikalingas state, filtrui
  const [showOnlyExpensive, setShowOnlyExpensive] = useState(false);

  function toggleExpensiveFilter() {
    setShowOnlyExpensive(!showOnlyExpensive);
  }

  // jei showOnlyExpensive yra true, tai mapinti per filtruota versija
  // jei false tai mapinti per visus

  const filteredMovies = movies.filter((mObj) => mObj.wasExpensive === true);

  const moviesToShow = showOnlyExpensive === true ? filteredMovies : movies;

  return (
    <div>
      <h2>MoviesList</h2>
      <fieldset>
        <legend>Filters</legend>
        <button onClick={toggleExpensiveFilter}>
          {showOnlyExpensive ? 'All' : 'Expensive'} movies
        </button>
        <p>Active Filter: {showOnlyExpensive ? 'expensive movies' : ''}</p>
      </fieldset>
      <ul>
        {moviesToShow.map((movieObj) => (
          <SingleMovie
            key={movieObj.id}
            title={movieObj.title}
            year={movieObj.year}
            director={movieObj.director}
            wasExpensive={movieObj.wasExpensive}
          />
        ))}
      </ul>
    </div>
  );
}
