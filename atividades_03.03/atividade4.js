import leia from "readline-sync";

let c1 = (leia.question(""));
let c2 = (leia.question(""));
let c3 = (leia.question(""));

if (c1 === "vertebrado" && c2 === "ave" && c3 === "carnivoro") {
    console.log("Águia");
}

if (c1 === "vertebrado" && c2 === "ave" && c3 === "onivoro") {
    console.log("Pomba");
}

if (c1 === "vertebrado" && c2 === "mamifero" && c3 === "onivoro") {
    console.log("Homem");
}

if (c1 === "vertebrado" && c2 === "mamifero" && c3 === "herbivoro") {
    console.log("Vaca");
}

// --- INVERTEBRADOS ---

if (c1 === "invertebrado" && c2 === "inseto" && c3 === "hematofago") {
    console.log("Pulga");
}

if (c1 === "invertebrado" && c2 === "inseto" && c3 === "herbivoro") {
    console.log("Lagarta");
}

if (c1 === "invertebrado" && c2 === "anelideo" && c3 === "hematofago") {
    console.log("Sanguessuga");
}

if (c1 === "invertebrado" && c2 === "anelideo" && c3 === "onivoro") {
    console.log("Minhoca");
}