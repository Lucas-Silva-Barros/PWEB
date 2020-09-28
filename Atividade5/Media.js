var nome = prompt("Digite o nome: ");
var nota1 = prompt("Digite a nota 1: ");
var nota2 = prompt("Digite a nota 2: ");
var nota3 = prompt("Digite a nota 3: ");

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
alert(media.toFixed(2));