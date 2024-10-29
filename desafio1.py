# Desafio: Classificador de Nível de Herói
nomeheroi = str(input("Digite o nome do Herói: "))
xp = int(input("Qual a quantidade de experiência (XP) do herói? "))
nivelheroi = str()

if xp < 1000:
    nivelheroi = "Ferro"
    print(f"O herói de nome {nomeheroi} está no nível de {nivelheroi}")
elif xp > 1001 and xp < 2000:
    nivelheroi = "Bronze"
    print(f"O herói de nome {nomeheroi} está no nível de {nivelheroi}")
elif xp > 2001 and xp < 5000:
    nivelheroi = "Prata"
    print(f"O herói de nome {nomeheroi} está no nível de {nivelheroi}")
elif xp > 5001 and xp < 7000:
    nivelheroi = "Ouro"
    print(f"O herói de nome {nomeheroi} está no nível de {nivelheroi}")
elif xp > 7001 and xp < 8000:
    nivelheroi = "Platina"
    print(f"O herói de nome {nomeheroi} está no nível de {nivelheroi}")
elif xp > 8001 and xp < 9000:
    nivelheroi = "Ascendente"
    print(f"O herói de nome {nomeheroi} está no nível de {nivelheroi}")
elif xp > 9001 and xp < 10000:
    nivelheroi = "Imortal"
    print(f"O herói de nome {nomeheroi} está no nível de {nivelheroi}")
elif xp >= 10001:
    nivelheroi = "Radiante"
    print(f"O herói de nome {nomeheroi} está no nível de {nivelheroi}")