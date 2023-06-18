const user = {
  username: "andres",
  email: "correo@google.com",
  age: 20,
  ranking: 9,
};

const detail2 = (user) => {
  console.log(`El detalle del usuario ${user.username} con correo ${user.email}`);
};

const detail3 = (user) => {
  const { username, email } = user;
  console.log(`El detalle del usuario ${username} con correo ${email}`);
};
/**
 * podemos aplicar la destructuracion en las funciones
 * podriamos pasar el objeto completo pero podemos recibirlo ya desctructurado
 *
 * *esta es la mas optima
 */
const detail = ({ username, email }) => {
  console.log(`El detalle del usuario ${username} con correo ${email}`);
};

detail(user);
detail2(user);
detail3(user);
