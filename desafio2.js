//FUNÇÃO QUE FAZ OS CALCULOS E EXIBE EM TELA
function partidasHankeadas(vitoria, derrota){
    let saldoHankeadas = vitoria-derrota
    let totalPartidas = vitoria+derrota
    console.log("Total de partidas: "+totalPartidas)
    console.log("Vitórias: "+vitoria)
    console.log("Derrotas: "+derrota)
    return saldoHankeadas
}

//ATRIBUINDO RETORNO DE FUNÇÃO A UMA VARIAVEL E ESTRUTURAS
let resultado=partidasHankeadas(50,30)
if(resultado<10){
    console.log("O Herói tem saldo de "+resultado+". Está no nível de FERRO.")
}else if(resultado>=11 && resultado<=20){
    console.log("O Herói tem saldo de "+resultado+". Está no nível de BRONZE.")
}else if(resultado>=21 && resultado<=50){
    console.log("O Herói tem saldo de "+resultado+". Está no nível de PRATA.")
}else if(resultado>=51 && resultado<=80){
    console.log("O Herói tem saldo de "+resultado+". Está no nível de OURO.")
}else if(resultado>=81 && resultado<=90){
    console.log("O Herói tem saldo de "+resultado+". Está no nível de DIAMANTE.")
}else if(resultado>=91 && resultado<=100){
    console.log("O Herói tem saldo de "+resultado+". Está no nível de LENDÁRIO.")
}else if(resultado>=101){
    console.log("O Herói tem saldo de "+resultado+". Está no nível de IMORTAL.")
}

