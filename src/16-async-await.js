/**
 * Estp es con fetch pero genera mucho codigo con los fetch
 * una forma mas simple de hacer lo mismo es con async-await
 */

const httpClient = fetch("https://jsonplaceholder.typicode.com/users");
httpClient.then((response) => response.json()).then((data) => console.log(data));

/**
 * para poder usar async y await requerimos que este dentro de una funcion asincrona
 *
 * await espera que la promesa se resuelva y devuelve la respuesta no la promesa
 */
const getUserData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

/**
 * como el mento que creamos con asynxc y await devuelve una promesa
 * usamo await para esperar su ejecucion y asignado en una variable
 * su resultado para usarlo en nuestro codigo
 */
const users = await getUserData();
console.log("USERS: ", users);

/**
 * podemos usar los datos que tenemos en nuestra respuesta para
 * manipular el DOM e hacer algo con ellos en nuestra app
 */
const findAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const ul = document.createElement("ul");

  data.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.append(li);
    console.log(user.name);
  });

  document.getElementById("root").append(ul);
};

findAllUsers();

// console.log(users)
console.log("Hola que tal!");
