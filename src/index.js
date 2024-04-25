let heroi = ["Pikachu", 5000];//vetor que armazena informação de nome e XP de um herói
let nivel = "";//variável para indicar o nível do herói

//laço de classificação do herói com base em seu XP
if(heroi[1] < 1000)
    {nivel = "Ferro";}
else if(heroi[1] >= 1000 && heroi[1] < 2000)
    {nivel = "Bronze";}
else if(heroi[1] >= 2000 && heroi[1] < 5000)
    {nivel = "Prata";}
else if(heroi[1] >= 5000 && heroi[1] < 7000)
    {nivel = "Ouro";}
else if(heroi[1] >= 7000 && heroi[1] < 8000)
    {nivel = "Platina";}
else if(heroi[1] >= 8000 && heroi[1] < 9000)
    {nivel = "Ascendente";}
else if(heroi[1] >= 9000 && heroi[1] < 10000)
    {nivel = "Imortal";}
else
    {nivel = "Radiante";}

console.log("O Herói de nome "+heroi[0]+" está no nível de "+nivel);