/**
 * fetch es la forma nativa de hacer peticiones en JavaScript
 *
 * es una promesa que devuelve un response
 */
const httpClient = fetch("https://jsonplaceholder.typicode.com/users");

// httpClient.then((response) => {
//   //   console.log(response);
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

httpClient.then((response) => response.json()).then((data) => console.log(data));

console.log("Hola que tal!");
