const leia = require("readline-sync");

let salario = leia.questionFloat("Digite o valor do salario: ");

let abono = leia.questionFloat("Digite o valor do abono: ");

let novo_salario = salario + abono;

console.log("O valor do novo salário é: " + novo_salario.toFixed(2));