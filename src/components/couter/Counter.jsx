import { useState } from 'react';

export default function Counter(props) {
  console.log('props ===', props);
  console.log('props.starting ===', props.starting);
  const startFrom = props.starting ? props.starting : 0;
  const [counterVal, setCounterVal] = useState(startFrom);
  // state for input
  const [counterName, setCounterName] = useState(props.name);
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

  function showControl() {
    setIsControlOn(true);
  }

  function hideControl() {
    setIsControlOn(false);
  }
  /**
   *
   * @param {InputEvent} event
   */
  function inputCounterName(event) {
    setCounterName(event.target.value);
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
      {isControlOn === false && (
        <button onClick={showControl}>Show control</button>
      )}
      {/* show this block only after button above was clicked */}
      {isControlOn === true && (
        <div className='counterTitleBlock'>
          {/* double bind this input with a state */}
          <input
            onChange={inputCounterName}
            value={counterName}
            type='text'
            placeholder='set counter Title'
          />
          <button onClick={hideControl}>hide control</button>
        </div>
      )}
    </div>
  );
}
