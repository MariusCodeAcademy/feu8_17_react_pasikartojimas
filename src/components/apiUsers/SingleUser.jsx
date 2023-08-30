import UserAddress from './UserAddress';

export default function SingleUser(props) {
  console.log('props ===', props);
  return (
    <li>
      <h3>{props.name}</h3>
      <p>email: {props.email}</p>
      <UserAddress data={props.address} />
      <hr />
    </li>
  );
}
