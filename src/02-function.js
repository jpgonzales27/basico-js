function sayhelloClasica() {
  console.log("hola mundo desde la funcion normal");
}
sayhelloClasica();

function sayhelloReturn() {
  const saludo = "hola mundo desde la funcion normal";
  return saludo;
}
sayhelloReturn();

/**
 * Si no se le envia un valor para nombre por defecto sera undefined
 */
function sayhelloName(name) {
  const saludo = `hola ${name}`;
  return saludo;
}
const resultado = sayhelloName("Juan");
console.log(resultado);

/**
 * Si no se le envia un valor para nombre por defecto ser el valor que le asignemos
 */
function sayhelloDefaultValue(name = "Pepe", age = 0) {
  const saludo = `hola ${name} edad ${age}`;
  return saludo;
}
const resultado1 = sayhelloDefaultValue("Juan");
console.log(resultado1);

/**
 * funcion anonima es una funcion que no tiene un nombre y
 * se le asigna directamente a una constante
 */
const sayHelloAnonimo = function (name = "Pepe", age = 0) {
  return `Hola mundo function! ${name} edad ${age}`;
};
console.log(sayHelloAnonimo());

/**
 * funcion de flecha
 */
const sayHelloFuncionFlecha = (name = "Pepe", age = 0) => {
  return `Hola mundo function! ${name} edad ${age}`;
};
console.log(sayHelloFuncionFlecha());

/**
 * funcion de flecha
 * si tiene una sola linea de codigo en el cuerpo de la funcion
 * se puede omitir las { } y el return quedando en una sola linea
 */
const sayHelloFuncionFlechaCorta = (name = "Pepe", age = 0) => `Hola mundo function! ${name} edad ${age}`;
const result = sayHelloFuncionFlechaCorta("Andres", 10);
console.log(result);

const add = (a = 0, b = 0) => a + b;
console.log(add(10, 5));
