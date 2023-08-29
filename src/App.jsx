import './App.css';
import Counter from './components/couter/Counter';

const counterArr = [
  { id: 1, name: 'Birds' },
  { id: 2, name: 'Push ups', starting: 6 },
  { id: 3, name: 'Pull ups', starting: 2 },
  { id: 4, starting: 100 },
];

export default function App() {
  return (
    <div className='container'>
      <h1>Pasikartojimas</h1>
      <div className='counters'>{/* generuoti counterius is counterArr */}</div>
      <Counter name='Push ups' />
      <Counter name='Km ran' starting={0} />
      {/* name should be Counter */}
      <Counter />
    </div>
  );
}
