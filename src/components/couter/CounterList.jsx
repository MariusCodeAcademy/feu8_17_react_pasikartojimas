import Counter from './Counter';

export default function CounterList(props) {
  console.log('props.items ===', props.items);
  return (
    <div>
      <h2>CounterList</h2>
      <div className='counters'>
        {props.items.map((counterObj) => (
          <Counter
            key={counterObj.id}
            name={counterObj.name}
            starting={counterObj.starting}
          />
        ))}
      </div>
    </div>
  );
}
