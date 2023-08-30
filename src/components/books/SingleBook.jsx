export default function SingleBook(props) {
  // console.log('props ===', props);
  const isSpecial = false;
  // gaunam duomenis per props ir atvaizduojam viena knyga
  return (
    <li className={`card ${props.isOnSale === true ? 'bookIsOnSale' : ''}`}>
      <h3>{props.title}</h3>
      <p>Released in: {props.year}</p>
      <p>
        by
        <strong> {props.author}</strong>
      </p>
      {/* sita el mes norim rodyti tik kai bObj yra isOnSale lygu true */}
      {props.isOnSale === true && <p className='sale'>On Sale Now</p>}
    </li>
  );
}
