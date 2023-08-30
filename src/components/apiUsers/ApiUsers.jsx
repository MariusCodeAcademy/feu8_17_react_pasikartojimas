const url = 'https://jsonplaceholder.typicode.com/users';

export default function ApiUsers() {
  return (
    <div>
      <h2>ApiUsers</h2>

      <ul>
        <li>user 1</li>
        <li>user 2</li>
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
