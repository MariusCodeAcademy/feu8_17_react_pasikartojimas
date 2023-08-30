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

// const filterdMovies = movies.filter((mObj) => mObj.wasExpensive === true);
// const filterdMovies = movies.filter((mObj) => mObj.year > 2000);
// const filterdMovies = movies.filter((mObj) => mObj.id > 3);
const filterdMovies = movies.filter((mObj) => {
  if (mObj.id > 3) {
    // return mObj;
    return true;
  }
});

console.log('filterdMovies ===', filterdMovies);
