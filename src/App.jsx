import './App.css';
import Counter from './components/couter/Counter';

export default function App() {
  return (
    <div className='container'>
      <h1>Pasikartojimas</h1>
      <Counter name='Push ups' />
      {/* <Counter name='Km ran' starting={5} /> */}
    </div>
  );
}
