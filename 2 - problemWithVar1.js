// ! Sobrescribe la variable declarada dentro del local scope.
var nombre = 'Enrique'

if(true){
    var nombre = 'Juan'
    console.log(`El nombre en el if es: ${nombre}`)
}

console.log(`El nombre original es: ${nombre}`)