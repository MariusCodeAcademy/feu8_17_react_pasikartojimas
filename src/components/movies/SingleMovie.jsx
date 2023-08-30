export default function SingleMovie(props) {
  return (
    <li>
      <h3>
        {props.title}{' '}
        {props.wasExpensive && <span className='tomato'>-- was expensive</span>}
      </h3>
      <div className='flex gap-20'>
        <p>year {props.year} </p>
        <p>
          Directed <strong> {props.director}</strong>
        </p>
      </div>
    </li>
  );
}
