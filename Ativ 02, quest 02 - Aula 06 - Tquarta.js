//Criando um array times e armazenando os nomes dos times
var times = ['Santos', 'Sport', 'Santa Cruz', 'Vasco', 'Chapecó'];
//Adicionando o time Flamengo no final do array. Na posição 5, adicionar 1 item
times.splice(5,1,'Flamengo');
//removendo o time que está no início do array
times.shift();
//Adcionando o time Palmeiras no início do array
times.unshift('Palmeiras');
//Adicionando o time Grêmio no final do array. Na posição 6, adicionar 1 item
times.splice(6,1,'Grêmio');
//Adicionando os times São Paulo e Santos do início do array e exibindo no console
times.unshift('São paulo','Santos');
console.log(times);
//Exibindo no console a quantidade total de times no array 
console.log(times.length);
//Removendo o time que está no final do array e exibindo no console
times.pop();
console.log(times);
//Colocando os times em ordem crescente e exibindo no console
times.sort();
console.log(times);