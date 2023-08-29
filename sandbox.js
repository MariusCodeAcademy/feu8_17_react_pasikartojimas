// const [counterVal, setCounterVal] = useState(0);

let counterVal = 0;
// counterVal = counterVal + 1;
// counterVal === 1

function setCounterVal(naujaReikme) {
  counterVal = naujaReikme;
}
setCounterVal(counterVal + 1);

console.log('counterVal ===', counterVal);

// { id: 1, name: 'Birds' }, // counterObj

const counterObj = { id: 1, name: 'Birds' };
counterObj.id;
