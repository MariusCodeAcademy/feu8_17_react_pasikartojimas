export default function SingleUser(props) {
  console.log('props ===', props);
  return (
    <li>
      <h3>{props.name}</h3>
      <p>email: {props.email}</p>
      <hr />
    </li>
  );
}
