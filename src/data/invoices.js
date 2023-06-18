const papper = {
  producto: "papper",
  price: 100,
  quantity: 10,
};

/**
 * Si necesitamos exportar algo una de las formas de hacerlos es
 * usando la palabra export eso nos permitira poder usarlo en el otro archivo
 * dentro de los {} con el mismo nombre que le asignamos aqui a la costante
 *
 * import {papper2} from "./data/invoices"
 */
export const papper2 = {
  producto: "papper",
  price: 100,
  quantity: 10,
};

const invoices = [
  {
    id: 1,
    name: "Compras de oficina",
    client: {
      name: "Maria",
      lastName: "Doe",
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
      papper,
    ],
  },
  {
    id: 2,
    name: "Compras de computacion",
    client: {
      name: "Pepe",
      lastName: "Doe",
    },
    items: [
      {
        producto: "keyboard",
        price: 399,
        quantity: 2,
      },
      {
        producto: "screen 17",
        price: 800,
        quantity: 1,
      },
      {
        producto: "cpu intel",
        price: 1000,
        quantity: 10,
      },
    ],
  },
  {
    id: 3,
    name: "Compras papeleria",
    client: {
      name: "Jhon",
      lastName: "Doe",
    },
    items: [
      {
        producto: "pencil",
        price: 50,
        quantity: 1,
      },
      papper,
    ],
  },
];

const invoiceByClientName = (clientName) => invoices.find((i) => i.client.name === clientName);

const invoiceById = (id) => invoices.find((i) => i.id === id);

/**
 * solo podemos tener una y solo un export por default
 * para poder utilizarlar en nuestro archivo debemos hacerlo
 * delandte y fuera de los {} y asignarle un nombre cualquirea
 *
 * import nombreCualquiera from "./data/invoices"
 */
export default (id) => invoices.filter((i) => i.id !== id);

/**
 * PROMESAS
 *
 * resolve si todo sale bien
 * reject si algo fall
 */
const findInvoiceById = (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = invoiceById(id);

      if (result) {
        resolve(result);
      } else {
        reject("error: no existe la factura por el id!");
      }
    }, 2500);
  });

  return promise;
};

/**
 * otra forma de exportar es escribir todas las constantes y funciones
 * que quireo exporta dentro de export { funcionAExportar, constateAExportar}
 */
export { papper, invoices, invoiceByClientName, invoiceById, findInvoiceById };

/**
 * Para usar la funcion por defecto de esta manera es usando alias e indicando
 * que ese valor sera exportado por defecto de igual manera solo puede haber
 * uno sola expoertacion por defecto
 */
// export { papper, invoices as default, invoiceByClientName, invoiceById, findInvoiceById };
