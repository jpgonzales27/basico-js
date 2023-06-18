const products = ["mesa", "silla", "notebook", "teclado"];

/**
 * Agregar elementos al array
 */
products.push("pantalla lcd", "sony tv");

console.log(products);

/**
 * recorremos el array para acceder a sus elementos
 */
products.forEach((el) => console.log(el));
// products.forEach(console.log);

/**
 * metodo for para iterar arreglos
 * es similar al codigo for de mas abajo pero mas
 * optimo para leer y trabajarlo
 */
for (const prod of products) {
  console.log(prod);
}

for (let i = 0; i < products.length; i++) {
  const element = products[i];
  console.log(element);
}

console.log(products[0]);
