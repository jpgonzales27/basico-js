const invoice = {
  id: 10,
  name: "Compras de oficina",
  date: new Date(),
  client: {
    id: 2,
    name: "Jhon",
    lastName: "Doe",
    age: 20,
  },
  items: [
    {
      producto: "keyboard",
      price: 399,
      quantity: 2,
    },
    {
      producto: "mouse",
      price: 200,
      quantity: 1,
    },
    {
      producto: "paper",
      price: 100,
      quantity: 10,
    },
  ],
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

/**
 * si asignamos el valor del objeto a otro es que solo le asignamos
 * la referentcia y si cambiamos algun valor en uno de ellos modificara
 * el valor para el otro
 *
 * para evitar esto usamos el operador spread el cual copia los valores
 * y los asigna en el nuevo objeto creando uno nuevo con esos valores
 */
// const invoice2 = invoice;

/**
 * clonando objetos con spread operator {...objeto}
 */
const invoice2 = { ...invoice };

const result = invoice === invoice2;

if (result) {
  console.log(result);
} else {
  console.log("no son iguales");
}

if (result) console.log(`IF una linea: ${result}`);
else console.log("IF una linea: no son iguales ");

invoice2.id = 20;

console.log(invoice.id);
console.log(invoice2.id);
