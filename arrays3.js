let numero = [2,4,6,8,11,13,14,20,22];

for(var i = 0; i<numero.length; i++){
    if (numero[i]%2==0){
        console.log(numero[i])
    }
}

/*
let pares = numero.filter(function(numero){
    return numero% 2 ==0;
});
console.log(`Número pares: ${pares}`)*/