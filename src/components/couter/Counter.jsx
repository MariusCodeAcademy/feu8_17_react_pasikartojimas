import { useState } from 'react';

export default function Counter() {
  const [counterVal, setCounterVal] = useState(0);

  return (
    <div>
      <div className='card'>
        <h2>Counter</h2>
        <p className='counterVal'>0</p>
        <div>
          <button>Up</button>
          <button>Down</button>
        </div>
      </div>
      <hr />
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
