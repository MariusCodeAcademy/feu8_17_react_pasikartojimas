import { useEffect, useState } from 'react';

const url = 'https://jsonplaceholder.typicode.com/users';
let ciklas = 0;
export default function ApiUsers() {
  ciklas++;
  console.log('ApiUsers pradzia');
  const [usersArr, setUsersArr] = useState([]);

  // useEffect(funkcija, priklausomybiu masyvas)
  // atlikti kazkokius veiksmus po to kai componentas susigeneravo
  // DOM tai darom tokia useEffecte useEffect(() => {}, []);
  useEffect(() => {
    console.log('Ivyko efektas');
    fetch(url).then(() => {
      setUsersArr([1, 2]);
    });

    setTimeout(() => {
      setUsersArr([1, 2, 3, 4]);
    }, 4200);
  }, []);
  console.log('ciklas ===', ciklas);
  console.log('ApiUsers virs render');

  return (
    <div>
      <h2>ApiUsers</h2>

      <ul>
        {usersArr.map((uObj) => (
          <li key={uObj}>user 1</li>
        ))}
      </ul>
    </div>
  );
}

/*
## API users

ApiUsers.jsx komponente parsiusti ir atvaizduoti vartotojus is
https://jsonplaceholder.typicode.com/users

1. susikurti vartotojams state pradine reiksme tuscias masyvas.
2. tik uzsikrovus komponentui parsiusti duomenis (useEffect) ir issaugoti state
3. sukti cikla ir generuoti vartotoju korteles. Korteles atvaizduoti sia info
   ![](assets/2023-08-29-13-08-50.png)

4. adresa atvaizduoti atskiru komponentu kuris gauna info per props
5. kompanija atvaizduoti atskiru komponentu kuris gauna info per props
6. graziai stilizuojam su css
*/
