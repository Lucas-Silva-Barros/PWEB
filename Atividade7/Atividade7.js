var n1 = parseFloat(prompt("Digite um número:"));
var n2 = parseFloat(prompt("Digite um número:"));
var n3 = parseFloat(prompt("Digite um número:"));

function maiorDosTres() {
    var a = [].sort.call(arguments);
    var maior = a[2]; // seleciona o último número
    var menor = a[0] // seleciona o primeiro número
    var msg = maior == a[1] || menor == a[1] ? // se o primeiro ou o último for igual ao segundo
      "Número repetido: "+ (maior == a[1] ? maior : menor) // mostra essa mensagem selecionando o que foi igual
      :
      "O maior número é: " + maior + " e o menor é: " + menor; // ou então mostra essa mensagem quando não houve repetidos

    alert(msg);
}

maiorDosTres(n1, n2, n3);