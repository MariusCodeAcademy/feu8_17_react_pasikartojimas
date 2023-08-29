const movies = [
  {
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    wasExpensive: true,
  },
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    wasExpensive: false,
  },
  {
    title: 'The Matrix',
    year: 1999,
    director: 'Lana Wachowski, Lilly Wachowski',
    wasExpensive: true,
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    wasExpensive: true,
  },
  {
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
        <li>visa filmo infomacija atitinkamuose taguose</li>
      </ul>
    </div>
  );
}
