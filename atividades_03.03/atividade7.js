import leia from "readline-sync";

let num_a = leia.questionFloat("Digite o primeiro numero: ");
let num_b = leia.questionFloat("Digite o segundo numero: ");
let operacao = leia.questionInt("Operacao: ");
let resultado;
let simbolo;


switch(operacao){
   case 1:
       resultado = num_a + num_b;
       simbolo = "+";
       break;
   case 2:
       resultado = num_a - num_b;
       simbolo = "-";
       break;
   case 3:
       resultado = num_a * num_b;
       simbolo = "*";
       break;
   case 4:
       resultado = num_a / num_b;
       simbolo = "/";
       break;
   default:
       console.log("Operação Inválida!");
       process.exit();
}

console.log(`${num_a.toFixed(1)} ${simbolo} ${num_b.toFixed(1)} = ${resultado.toFixed(1)}`);