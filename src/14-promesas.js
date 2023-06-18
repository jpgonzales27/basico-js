import { findInvoiceById, invoiceById } from "./data/invoices";

/**
 * promesas para trabajar peticiones asincronas
 *
 * then accede al resultado si todo salio bien en nuestra promesa
 *
 * catch captura el error si algo salio mal
 *
 * finally para cerrar alguna conexion
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = invoiceById(2);

    if (result) {
      resolve(result);
    } else {
      reject("error: no existe la factura por el id!");
    }
  }, 2500);
});

promise
  .then((resutlado) => {
    console.log(resutlado);
    console.log("realizando una tarea con demora");
  })
  .catch((error) => {
    console.log("ERROR", error);
  });

/**
 * una forma mas corta de escribir lo mosmo cuando tenemos una sola linea
 * y recibimos el parametro y lo usamo como
 *
 * (error) => console.log(error)
 *
 * es solo escribir console.error
 *
 * esto es llamado metodo de referencia
 */
findInvoiceById(6).then(console.log).catch(console.error);
