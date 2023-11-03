//DESAFIO DIO

//DECLARANDO AS VARIÁVEIS
let nomePersonagem = "João Aprendiz de mago"
let xp = 10100

//ESTRUTURA DE DECISÃO DE ACORDO COM O VALOR ESCOLHIDO
if(xp < 1000){
    console.log("O Herói de nome "+ nomePersonagem + " está no nível FERRO.")
}else if((xp >= 1001) && (xp <= 2000)) {
    console.log("O Herói de nome "+ nomePersonagem + " está no nível BRONZE.")
}else if((xp >=2001) && (xp <= 5000)){
    console.log("O Herói de nome "+ nomePersonagem + " está no nível PRATA.")
}else if((xp >=5001) && (xp<=6000)){
    console.log("O Herói de nome "+ nomePersonagem + " continua no nível PRATA.Alcance mais de 6000 em XP para evoluir para OURO")
}else if((xp>=6001) && (xp <=7000)){
    console.log("O Herói de nome "+ nomePersonagem + " está no nível OURO.")
}else if((xp >=7001) &&(xp <=8000)){
    console.log("O Herói de nome "+ nomePersonagem + " está no nível PLATINA.")
}else if((xp >=8001) && (xp <=9000)){
    console.log("O Herói de nome "+ nomePersonagem + " está no nível ASCENDENTE.")
}else if((xp >=9001) && (xp <=10000)){
    console.log("O Herói de nome "+ nomePersonagem + " está no nível IMORTAL.")
}else if(xp >=10001){
    console.log("O Herói de nome "+ nomePersonagem + " está no nível RADIANTE.")
}


