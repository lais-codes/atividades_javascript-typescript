const leia = require("readline-sync");

let lista_numeros = new Set();

for (let i = 0; i < 10; i++){

    let numero = leia.questionInt(`Digite o ${i+1}o numero: `);

    lista_numeros.add(numero);
}

console.log("\nListar dados do Set:");

let ordenar = Array.from(lista_numeros);

ordenar.sort((a, b) => a - b);

for (let numero of ordenar){
    
    console.log(numero);
}