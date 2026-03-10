const leia = require("readline-sync");

let cores = [];

for (let i = 0; i < 5; i++){
    
    let cor = leia.question(`Digite a ${i+1}a cor: `);

    cores.push(cor);
}

console.log("\nListar todas as cores:");

for (let cor of cores){
    console.log(cor);
}

console.log("\nOrdenar as cores:");

cores.sort();

for (let cor of cores){
    console.log(cor);
}