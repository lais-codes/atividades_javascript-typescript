import leia from "readline-sync";

let codigo_produto = leia.questionInt("Codigo do Produto: ");
let quantidade = leia.questionInt("Quantidade: ");
let produto;
let preco;

switch(codigo_produto){
   case 1:
       produto = "Cachorro Quente";
       preco = 10.00;
       break;
   case 2:
       produto = "X-Salada";
       preco = 15.00;
       break;
   case 3:
       produto = "X-Bacon";
       preco = 18.00;
       break;
   case 4:
       produto = "Bauru";
       preco = 12.00;
       break;
    case 5:
       produto = "Refrigerante";
       preco = 8.00;
       break;
    case 6:
       produto = "Suco de laranja";
       preco = 13.00;
       break;
   default:
       console.log("Opção inválida");
       process.exit();
}

let valor_total = quantidade * preco;

console.log(`Produto: ${produto}`);
console.log(`Valor total: R$ ${valor_total.toFixed(2)}`);