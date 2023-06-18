const user = {
  username: "andres",
  email: "correo@google.com",
  age: 20,
  ranking: 9,
};

// const username = user.username;
// const ranking = user.ranking;
// const age = user.age;

/**
 * Destructuring a un objeto nos permite desarmar sus datos
 * y usarlos como variables en nuestro contexto
 *
 * solo debe llamarse igual que el nombre que tiene la propiedad
 * dentro del objeto y no importara el orden en que las llamemos
 */
const { username, ranking, age } = user;

console.log(`${username} tiene ${age} de edad`);
console.log(ranking);
