import leia from "readline-sync";

let nome = leia.question("Digite o nome do doador: ");
let idade = leia.questionInt("Digite a idade do doador: ");
let primeira_doacao = leia.keyInYN("Primeira doacao de sangue?:")

if(idade < 18 || idade > 69){
    console.log(`${nome} não está apto(a) para doar sangue!`);
}
if(idade >= 60 && idade <= 69 && primeira_doacao === true){
    console.log(`${nome} não está apto(a) para doar sangue!`)
}
if(idade >= 18 && idade < 60){
    console.log(`${nome} está apto(a) para doar sangue!`)
}
if(idade >= 60 && idade <= 69 && primeira_doacao === false){
    console.log(`${nome} está apto(a) para doar sangue!`)
}