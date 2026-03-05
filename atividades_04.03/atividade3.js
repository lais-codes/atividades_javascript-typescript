import leia from "readline-sync";

let menores = 0;
let maiores = 0;
let idade = 0;

while (idade >= 0) {
  
    idade = leia.questionInt("Digite uma idade: ");
  
    if (idade >= 0) {
        if (idade < 21) {
         menores++;
        } else if (idade > 50) {
         maiores++;
        }
    }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menores}\nTotal de pessoas maiores de 50 anos: ${maiores}`);
