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
  return (
    <div>
      <h2>MoviesList</h2>
      <fieldset>
        <legend>Filters</legend>
        <button>Expensive movies</button>
        <p>Active Filter: </p>
      </fieldset>
      <ul>
        {movies.map((movieObj) => (
          <li key={movieObj.id}>
            <h3>
              {movieObj.title}{' '}
              {movieObj.wasExpensive && (
                <span className='tomato'>-- was expensive</span>
              )}
            </h3>
            <div className='flex gap-20'>
              <p>year {movieObj.year} </p>
              <p>
                Directed <strong> {movieObj.director}</strong>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
