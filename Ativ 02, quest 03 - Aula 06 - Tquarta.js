// Questão 03

//Criando um array ativdiaria(atividade diária) e armazenando as 7 atividades que faço no meu dia a dia
var ativdiaria =  ['arrumar a cama','tomar banho','café da manhã','assistir aula','atividades do curso','reunião com a equipe do projeto', 'ir à academia'];

//Exibindo no console as atividades armazenadas no array ativdiaria em ordem inversa
console.log(ativdiaria.reverse());
console.log(ativdiaria);

//Selecionando e exibindo no console, as atividades nas posições 3 e 6
console.log (ativdiaria[3]);
console.log (ativdiaria[6]);

//Exibindo no console o array transformado em string, usando o join() e substituindo a vírgula pelo símbolo " - " (hífen)
console.log(ativdiaria.join('-'));

//Criando um array com 2 atividades que eu mais gosta e juntando com o array das atividades que eu faço durante o dia e exibindo no console o resultado
var atividade_2 = ['sair para jantar','assistir filme'];
var novaAtividade = ativdiaria.concat(atividade_2);
console.log(novaAtividade);