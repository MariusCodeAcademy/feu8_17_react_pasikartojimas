import { useState } from 'react';
import './App.css';
import BooksList from './components/books/BooksList';
import CounterList from './components/couter/CounterList';
import MoviesList from './components/movies/MoviesList';
import ApiUsers from './components/apiUsers/ApiUsers';

const counterArr = [
  { id: 1, name: 'Birds' }, // counterObj
  { id: 2, name: 'Push ups', starting: 6 },
  { id: 3, name: 'Pull ups', starting: 2 },
  { id: 4, starting: 100 },
];

export default function App() {
  const [activeComponent, setActiveComponent] = useState(4);
  return (
    <div className='container'>
      <h1>Pasikartojimas</h1>
      <fieldset>
        <button onClick={() => setActiveComponent(1)}>Counters</button>
        <button onClick={() => setActiveComponent(2)}>Books</button>
        <button onClick={() => setActiveComponent(3)}>Movies</button>
        <button onClick={() => setActiveComponent(4)}>ApiUsers</button>
      </fieldset>
      {activeComponent === 1 && <CounterList items={counterArr} />}
      {activeComponent === 2 && <BooksList />}
      {activeComponent === 3 && <MoviesList />}
      {activeComponent === 4 && <ApiUsers />}
    </div>
  );
}
