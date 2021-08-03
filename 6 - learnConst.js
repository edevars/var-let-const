// ! Aprenden sobre const

// * No puede ser reasignada

const PI = 3.14159265358979323846264338327950288419716
PI = 3.1416 // TypeError: Assignment to constant variable.

console.log(PI)

// * Es diferente cuando se trata de objetos

const student = {
    name: 'Abigail',
    path: 'Data Science'
}

// * Las propiedades si pueden ser actualizadas
student.path = 'JavaScript'
student.name = "Enrique"

console.log(student)