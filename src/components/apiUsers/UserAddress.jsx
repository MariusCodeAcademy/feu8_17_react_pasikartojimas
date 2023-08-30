export default function UserAddress(props) {
  console.log('props ===', props);
  return (
    <div className='card'>
      <h4>UserAddress</h4>
      <p>street: </p>
      <p>suite: </p>
      <p>city: </p>
      <p>zipcode: </p>
    </div>
  );
}
