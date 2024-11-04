#include <stdio.h>

int main() {
    char nomeheroi[100];
    int xp;
    char *nivelheroi;

    printf("Digite o nome do Herói: ");
    fgets(nomeheroi, sizeof(nomeheroi), stdin);
    
    printf("Qual a quantidade de experiência (XP) do herói? ");
    scanf("%d", &xp);

    if (xp < 1000) {
        nivelheroi = "Ferro";
    } else if (xp >= 1000 && xp < 2000) {
        nivelheroi = "Bronze";
    } else if (xp >= 2000 && xp < 5000) {
        nivelheroi = "Prata";
    } else if (xp >= 5000 && xp < 7000) {
        nivelheroi = "Ouro";
    } else if (xp >= 7000 && xp < 8000) {
        nivelheroi = "Platina";
    } else if (xp >= 8000 && xp < 9000) {
        nivelheroi = "Ascendente";
    } else if (xp >= 9000 && xp < 10000) {
        nivelheroi = "Imortal";
    } else {
        nivelheroi = "Radiante";
    }

    printf("O herói de nome %s está no nível de %s", nomeheroi, nivelheroi);
    return 0;
}
