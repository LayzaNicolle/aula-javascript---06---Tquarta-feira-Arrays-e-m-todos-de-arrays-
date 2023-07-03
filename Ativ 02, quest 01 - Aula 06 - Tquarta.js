
//Criando a minha array valores e nela armazenando os numeros desordenados para poder colocar em ordem
var valores = [25, 23, 11, 55, 30, 6, 4, 21, 34, 89, 56];

//Aqui estou usando o sort() para colocar os numeros em ordem, mas não fica em ordem crescente. Para conseguir colocar em ordem crescente, usei uma função de comparação e adicionei dois parâmetros para retornar a sua subtração o que vai resultar em um valor negativo, zero ou positivo. O sort() vai usar o valor retornado pela função de comparação para determinar a ordem dos elementos. Retornando a - b, a função de comparação vai classificar os elementos em ordem crescente.
valores.sort(function(a, b){
  return a - b;
});
//Aqui estou usando o console.log(valores) para exibir os numeros em ordem crescente no console.
console.log(valores);