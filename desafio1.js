// Desafio: Classificador de Nível de Herói
let nomeheroi = prompt("Digite o nome do Herói:");
let xp = parseInt(prompt("Qual a quantidade de experiência (XP) do herói?"));
let nivelheroi = "";

if (xp < 1000) {
    nivelheroi = "Ferro";
    console.log(`O herói de nome ${nomeheroi} está no nível de ${nivelheroi}`);
} else if (xp > 1000 && xp < 2000) {
    nivelheroi = "Bronze";
    console.log(`O herói de nome ${nomeheroi} está no nível de ${nivelheroi}`);
} else if (xp > 2000 && xp < 5000) {
    nivelheroi = "Prata";
    console.log(`O herói de nome ${nomeheroi} está no nível de ${nivelheroi}`);
} else if (xp > 5000 && xp < 7000) {
    nivelheroi = "Ouro";
    console.log(`O herói de nome ${nomeheroi} está no nível de ${nivelheroi}`);
} else if (xp > 7000 && xp < 8000) {
    nivelheroi = "Platina";
    console.log(`O herói de nome ${nomeheroi} está no nível de ${nivelheroi}`);
} else if (xp > 8000 && xp < 9000) {
    nivelheroi = "Ascendente";
    console.log(`O herói de nome ${nomeheroi} está no nível de ${nivelheroi}`);
} else if (xp > 9000 && xp < 10000) {
    nivelheroi = "Imortal";
    console.log(`O herói de nome ${nomeheroi} está no nível de ${nivelheroi}`);
} else if (xp >= 10000) {
    nivelheroi = "Radiante";
    console.log(`O herói de nome ${nomeheroi} está no nível de ${nivelheroi}`);
}
