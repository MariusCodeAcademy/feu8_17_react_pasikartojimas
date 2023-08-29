import { useState } from 'react';

export default function Counter() {
  const [counterVal, setCounterVal] = useState(0);
  // state for input
  const [counterName, setCounterName] = useState('Counter');
  // state for control
  const [isControlOn, setIsControlOn] = useState(false);

  function goUp() {
    console.log('goUp');
    setCounterVal(counterVal + 1);
  }
  function goDown() {
    console.log('goDown');
    setCounterVal(counterVal - 1);
  }

  return (
    <div>
      <div className='card'>
        <h2>{counterName}</h2>
        <p className='counterVal'>{counterVal}</p>
        <div>
          <button onClick={goUp}>Up</button>
          <button onClick={goDown}>Down</button>
        </div>
      </div>
      <hr />
      {/* hide this button if control is on */}
      <button>Show control</button>
      {/* show this block only after button above was clicked */}
      <div className='counterTitleBlock'>
        {/* double bind this input with a state */}
        <input type='text' placeholder='set counter Title' />
        <button>hide control</button>
      </div>
    </div>
  );
}
