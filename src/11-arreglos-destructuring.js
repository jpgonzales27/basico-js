/**
 * tambien podemos aplicar la desctructuracion a los arreglos
 */

const users = ["pepe", "ana", "maria", "juan", "sebastian", "carlos", "josefa"];

/**
 * destructuramos el areglo de acuerdo a las posiciones
 * no es necesario que se llamen igual
 */
const [pepe, ana, maria] = users;
console.log(pepe, ana, maria);
/**
 * si queremos acceder a algunos valores podemos evitar los que no
 * necesitemos usando sus espacios con comas (,)
 */
const [pepe1, ana1, maria1, , , carlos1] = users;
console.log(pepe1, ana1, maria1, carlos1);
/**
 * si temos un arreglo muy grande podemos entrar a los valores
 * que necestiemos y usando el operador .spread ..rest obtenemos el resto
 */
const [pepe2, ana2, ...rest] = users;
console.log(pepe2, ana2, ...rest);
