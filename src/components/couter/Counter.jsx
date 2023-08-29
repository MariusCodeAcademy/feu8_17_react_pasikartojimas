import { useState } from 'react';

export default function Counter() {
  const [counterVal, setCounterVal] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p className='counterVal'>0</p>
      <div>
        <button>Up</button>
        <button>Down</button>
      </div>
      <hr />
      <button>Show control</button>
      {/* show this block only after button above was clicked */}
      <div className='counterTitleBlock'>
        <input type='text' placeholder='set counter Title' />
        <button>hide control</button>
      </div>
    </div>
  );
}
