import leia = require("readline-sync");
import { Queue } from "./Queue";

const fila = new Queue<string>();

let opcao: number;

do {
console.log("\n*****************************************************");
console.log("                                                     ");
console.log("1 - Adicionar Cliente na Fila");
console.log("2 - Listar todos os Clientes");
console.log("3 - Retirar Cliente da Fila");
console.log("0 - Sair");
console.log("                                                     ");
console.log("*****************************************************");

opcao = leia.questionInt("Entre com a opcao desejada: ");

switch(opcao) {
    case 1:
        let nome = leia.question("Digite o nome: ");
        fila.enqueue(nome);
        console.log("\nFila:\n");
        fila.printQueue();
        console.log("\nCliente adicionado!");
        break;
    case 2:
        console.log("\nLista de Clientes na Fila:\n");
        fila.printQueue();
        break;
    case 3:
        if (fila.isEmpty()){
            console.log("\nA Fila está vazia!");
        }else {
            fila.dequeue();
            console.log("\nFila:\n");
            fila.printQueue();
            console.log("O Cliente foi Chamado!");
        }
        break;
    case 0:
        console.log("\nPrograma Finalizado!");
        break;

    default:
        console.log("\nOpção inválida!");
    }

} while (opcao != 0);