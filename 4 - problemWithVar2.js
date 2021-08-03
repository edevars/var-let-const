// El scope de var es de función, no de bloque

function contarNumeros(){
    for(var i=0; i<10;i++){
        setTimeout(()=>{
            console.log(i)
        },
        500)
    }
}

contarNumeros()