import { useState } from 'react';
import './App.css';
import BooksList from './components/books/BooksList';
import CounterList from './components/couter/CounterList';
import MoviesList from './components/movies/MoviesList';

const counterArr = [
  { id: 1, name: 'Birds' }, // counterObj
  { id: 2, name: 'Push ups', starting: 6 },
  { id: 3, name: 'Pull ups', starting: 2 },
  { id: 4, starting: 100 },
];

export default function App() {
  const [activeComponent, setActiveComponent] = useState(3);
  return (
    <div className='container'>
      <h1>Pasikartojimas</h1>
      {activeComponent === 1 && <CounterList items={counterArr} />}
      {activeComponent === 2 && <BooksList />}
      {activeComponent === 3 && <MoviesList />}
    </div>
  );
}
