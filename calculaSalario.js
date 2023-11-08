

/*APLICAÇÃO FEITA COM A POSSIBIDADE DE INSERÇÃO DE DADOS PELO CLIENTE
ATRAVÉS DO COMANDO READLINE*/

//DECLARAÇÃO VARIÁVEIS E CAPTURA DE DADOS COM COMANDO READLINE
let readline = require('readline-sync')
let salarioBruto = readline.questionFloat("Digite o salario bruto: ")
let beneficios = readline.questionFloat("Valor total dos benefcios: ")
let liquido
let imposto

//CONDICÕES
if(salarioBruto >=0 && salarioBruto <=1100){
    imposto = salarioBruto * 0.05
}else if(salarioBruto >=1100.01 && salarioBruto <=2500.00){
    imposto = salarioBruto * 0.10
 }else if(salarioBruto > 2500.00){
    imposto = salarioBruto * 0.15
 }

//CALCULO
liquido = salarioBruto  - imposto + beneficios

//EXIBINDO EM TELA
console.log("Salario bruto: "+ salarioBruto + " reais.")
console.log("Valor total de benefícios: " + beneficios + " reais.")
console.log("Impostos descontados: " + imposto + " reais.")
console.log("Líquido a receber: "+ liquido + " reais.")



/*APLICAÇÃO FEITA SEM A POSSIBIDADE DE INSERÇÃO DE DADOS PELO CLIENTE

//DECLARAÇÃO VARIÁVEIS E ATRIBUINDO VALORES
let salarioBruto = 2000.00
let beneficios = 250.00
let liquido
let imposto

//CONDIÇÕES
if(salarioBruto >=0 && salarioBruto <=1100){
    imposto = salarioBruto * 0.05
}else if(salarioBruto >=1100.01 && salarioBruto <=2500.00){
    imposto = salarioBruto * 0.10
 }else if(salarioBruto > 2500.00){
    imposto = salarioBruto * 0.15
 }

//CALCULO
liquido = salarioBruto  - imposto + beneficios

//EXIBINDO EM TELA
console.log("Salario bruto: "+ salarioBruto + " reais.")
console.log("Valor total de benefícios: " + beneficios + " reais.")
console.log("Impostos descontados: " + imposto + " reais.")
console.log("Líquido a receber: "+ liquido + " reais.")

*/



