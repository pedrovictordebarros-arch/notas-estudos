// entrada - variáveis
// Média aritmética de 3 notas, e menor 3 horrive
// menor que 7 da pra miora, maior 7 gênio
const nota1 = Number(prompt("Digite a primeira nota"))
const nota2 = Number(prompt("Digite a segunda nota"))
const nota3 = Number(prompt("Digite a terceira nota")) 

// Processamento

const soma = nota1 + nota2 + nota3
//const batata = nota1 + nota2
const media = soma / 3

//media menor que 3
//media menor que 7
//media maior que 7
if(media<3) {
    alert ("Média é insuficiente" + media + " - Horrivi")
} else if (media < 7) {
    alert ("Média é insuficiente" + media + " - Da pra miora")
} else { 
    alert ("Média é insuficiente" + media + " - PARABÂINS")

}