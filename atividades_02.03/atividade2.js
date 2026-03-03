const leia = require("readline-sync");

let nota1 = leia.questionFloat("Digite a primeira nota: ");
let nota2 = leia.questionFloat("Digite a segunda nota: ");
let nota3 = leia.questionFloat("Digite a terceira nota: ");
let nota4 = leia.questionFloat("Digite a quarta nota: ");

let media_final = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("O valor da Média Final é: " + media_final.toFixed(1));