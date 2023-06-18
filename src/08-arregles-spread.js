/**
 * tambien podemos copiar arrays con el spread operator [...array]
 * esto crea una nueva instancia con los mismos valores
 */

const products = ["mesa", "silla", "notebook", "teclado"];
/**
 * El metodo concat nos ayuda a combinar 2 o mas array y devolver uno solo
 */
const products2 = products.concat(["pantalla lcd", "sony tv"]);

const fruits = ["peras", "manzanas", "sandias", "frutillas"];

const mercado = [...products2, ...fruits, "lechuga", "papas", "uvas"];
const mercado2 = products2.concat(fruits).concat("lechuga", "papas", "uvas");

console.log("PRODUCTOS: ", products2);
console.log("MERCADO: ", mercado);
console.log("MERCADO2: ", mercado2);
