const leia = require("readline-sync");

let salario_bruto = leia.questionFloat("Digite o valor do Salario Bruto: ");
let adicional_noturno = leia.questionFloat("Digite o valor do Adicional Noturno: ");
let horas_extras = leia.questionFloat("Digite o valor das Horas Extras : ");
let descontos = leia.questionFloat("Digite o valor dos Descontos: ");

let salario_liquido = (salario_bruto + adicional_noturno + (horas_extras * 5) - descontos);

console.log("O valor do Salário Líquido é: " + salario_liquido.toFixed(2));