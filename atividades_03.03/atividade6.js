import leia from "readline-sync";

let nome = leia.question("Nome do colaborador: ");
let codigo_cargo = leia.questionInt("Cargo: ");
let salario = leia.questionFloat("Salario: ");
let cargo;
let reajuste;

switch(codigo_cargo){
   case 1:
       cargo = "Gerente";
       reajuste = 0.10;
       break;
   case 2:
       cargo = "Vendedor";
       reajuste = 0.07;
       break;
   case 3:
       cargo = "Supervisor";
       reajuste = 0.09;
       break;
   case 4:
       cargo = "Motorista";
       reajuste = 0.06;
       break;
    case 5:
       cargo = "Estoquista";
       reajuste = 0.05;
       break;
    case 6:
       cargo = "Técnico de TI";
       reajuste = 0.08;
       break;
   default:
       console.log("Opção inválida");
       process.exit();
}

let novo_salario = salario + (reajuste * salario);

console.log(`Nome do Colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário: R$ ${novo_salario.toFixed(2)}`);