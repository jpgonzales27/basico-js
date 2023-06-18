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
 * optional changing nos ayuda a verficar si un atributo
 * esta en el objeto objeto?.atributo
 */
console.log(invoice.company?.name);
console.log(invoice.client?.address?.street);
// if (invoice.company != undefined && invoice.company.name) {
if (invoice.company?.name) {
  console.log("perfecto!!!");
} else {
  console.log("no viene la empresa");
}
