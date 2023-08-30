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

bObj.isOnSale === true;
true === true;
true;

// add id to movies
const moviesWithId = movies.map((movieObj, idx) => {
  return {
    id: idx + 1,
    ...movieObj,
  };
});
console.log(JSON.stringify(moviesWithId, null, 2));
