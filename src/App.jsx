import './App.css';
import Counter from './components/couter/Counter';
import CounterList from './components/couter/CounterList';

const counterArr = [
  { id: 1, name: 'Birds' }, // counterObj
  { id: 2, name: 'Push ups', starting: 6 },
  { id: 3, name: 'Pull ups', starting: 2 },
  { id: 4, starting: 100 },
];

export default function App() {
  return (
    <div className='container'>
      <h1>Pasikartojimas</h1>
      <div className='counters'>
        {/* generuoti counterius is counterArr */}
        {counterArr.map((counterObj) => (
          <Counter
            key={counterObj.id}
            name={counterObj.name}
            starting={counterObj.starting}
          />
        ))}
      </div>

      {/* name should be Counter */}
      <CounterList items={counterArr} />
    </div>
  );
}
