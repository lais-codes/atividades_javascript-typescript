import leia from "readline-sync";

let vetor = [2,5,1,3,4,9,7,8,10,6];
let numero = leia.questionInt("Digite o numero que voce deseja encontrar: ");
let encontrado = false;

for (let i = 0; i < 10; i++){

    if (vetor[i] === numero){
        encontrado = true;
        console.log(`\nO número ${numero} está localizado na posição: ${i}`);
        break;
    }
}

if (!encontrado){
    console.log(`\nO número ${numero} não foi encontrado!`);
}