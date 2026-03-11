import leia = require("readline-sync");
import { Stack } from "./Stack";

const pilha = new Stack<string>();

let opcao: number;

do {
console.log("\n*****************************************************");
console.log("                                                     ");
console.log("1 - Adicionar Livro na pilha");
console.log("2 - Listar todos os Livros");
console.log("3 - Retirar Livro da pilha");
console.log("0 - Sair");
console.log("                                                     ");
console.log("*****************************************************");

opcao = leia.questionInt("Entre com a opcao desejada: ");

switch(opcao) {
    case 1:
        let livro = leia.question("Digite o nome: ");
        pilha.push(livro);
        console.log("\nPilha:\n");
        pilha.printStack();
        console.log("\nLivro adicionado!");
        break;
    case 2:
        console.log("\nLista de Livros na Pilha:\n");
        pilha.printStack();
        break;
    case 3:
        if (pilha.isEmpty()){
            console.log("\nA Pilha está vazia!");
        }else {
            pilha.pop();
            console.log("\nPilha:\n");
            pilha.printStack();
            console.log("\nUm Livro foi retirado da pilha!");
        }
        break;
    case 0:
        console.log("\nPrograma Finalizado!");
        break;

    default:
        console.log("\nOpção inválida!");
    }

} while (opcao != 0);


