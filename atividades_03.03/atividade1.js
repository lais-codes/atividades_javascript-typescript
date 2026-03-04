import leia from "readline-sync";

let a = leia.questionInt("Digite o numero A: ");
let b = leia.questionInt("Digite o numero B: ");
let c = leia.questionInt("Digite o numero C: ");

if(a + b > c){
    console.log(`${a} + ${b} = ${a + b} > ${c}\nA Soma de A + B é Maior do que C`);
}
if(a + b < c){
    console.log(`${a} + ${b} = ${a + b} < ${c}\nA Soma de A + B é Menor do que C`);
}
if(a + b == c){
    console.log(`${a} + ${b} = ${a + b} = ${c}\nA Soma de A + B é Igual a C`);
}