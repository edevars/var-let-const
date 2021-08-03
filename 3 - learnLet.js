// ! Aprenden sobre let

// * Su scope o alcance es de bloque o local

let nombre = 'Enrique'

if(true){
    let nombre = 'Juan'
    console.log(`El nombre en el if es: ${nombre}`)
}

console.log(`El nombre original es: ${nombre}`)

// * Puede ser reasignada pero no redeclarada

let lastName = 'Devars'
lastName = 'Caballero' // SyntaxError: Identifier 'lastName' has already been declared
console.log(lastName)

// * Hoisting
console.log(nombre)
let nombre = 'Enrique'

// * Cuando son declaradas no se añaden al objeto Global
var nombre = 'Juan'
let apellido = 'Castro'

console.log(global.nombre)
console.log(apellido.nombre)