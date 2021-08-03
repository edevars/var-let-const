// ! Aprendamos sobre var

// * Redeclaracion
var saludo = "Hola Platzi";
var saludo = "Hola Platzeritos!"

console.log(saludo)

// * Redeclaracion =! asignación
var saludo = "Hola Platzi";
saludo = "Hola Platzeritos de nuevo!"

console.log(saludo)

// * Hoisting
console.log(nombre)
var nombre = 'Enrique'
console.log(nombre)

// * Lo que hace el hoisting es elevar donde se declaran las variables
var nombre = undefined; // Si se inicializa con un valor primitivo 'Undefined'
console.log(nombre)
nombre = 'Enrique'