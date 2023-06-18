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
  /**
   * los objetos pueden tener funcionces
   */
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  /**
   * si queremos hacer referencia al this siempre sera dentro
   * de un function normal
   */
  greeting: function () {
    return `Hola ${this.client.name}`;
  },
  /**
   * si queremos hacer referencia al this dentro de un arrow function
   * no servira para ello debemos hacer referencia al objeto completo
   */
  greeting2: () => {
    return `Hola ${invoice.client.name}`;
  },
};

/**
 * Podemos modificar valores del objeto ingresando con punto
 * hasta el lugar que deceamos y le cambiamos el valor
 *
 * invoice.client.name = 'Pepe';
 */

// invoice.client.name = 'Pepe';
// invoice.total = 5000;
console.log(invoice);

/**
 * se le puede agregar nuevas propiedades a los objetos
 * como le asiganomos un valor como no exite la creara
 * detron del objero
 */
invoice.nuevapropiedad = "nueva";
console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);
console.log("Total: " + invoice.total());
