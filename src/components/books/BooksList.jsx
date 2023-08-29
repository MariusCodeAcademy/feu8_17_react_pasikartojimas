const booksArr = [
  {
    id: 1,
    title: 'The Great Gatsby',
    year: 1925,
    author: 'F. Scott Fitzgerald',
    isOnSale: true,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    year: 1960,
    author: 'Harper Lee',
    isOnSale: false,
  },
  {
    id: 3,
    title: '1984',
    year: 1949,
    author: 'George Orwell',
    isOnSale: true,
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    year: 1813,
    author: 'Jane Austen',
    isOnSale: true,
  },
  {
    id: 5,
    title: 'The Hobbit',
    year: 1937,
    author: 'J.R.R. Tolkien',
    isOnSale: false,
  },
];

export default function BooksList() {
  return (
    <div>
      <h2>BooksList</h2>
      <ul>
        {/* generuoti li elementus su knygos informacija */}
        {/* generuoti <SingleBook /> paduodant informacija per props  */}
        {booksArr.map((bObj) => (
          <li key={bObj.id}>
            <h3>{bObj.title}</h3>
            <p>date</p>
            <p>
              <i>autorius</i>
            </p>
            <p className='sale'>On Sale Now</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
