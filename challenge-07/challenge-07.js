/*
Crie um array com 5 items (tipos variados).
*/
var arr = ['Olá Mundo', 12, true, { carro: 'gol g5' }, ['abacaxi', 'limão'] ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem (item) {
    arr.push(item);
    return arr;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

addItem([ 'Novo Array', 2.5, function(){} ]);

console.log(arr);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log('O segundo elemento do segundo array é ' + arr[5][1] + ' ');

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + arr[5].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.

o numero é par, quando ele é dividido por 2 e o resto da divisao é 0, caso contrário ele é impar.
*/

var counter = 10;

while (counter <= 20) {
    counter++;
    if (counter % 2 === 0) {
        console.log( 'Números pares entre 10 e 20: ' + counter );
    }
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var counter = 10;

while (counter <= 20) {
    counter++;
    if (counter % 2 !== 0) {
        console.log( 'Números ímpares entre 10 e 20: ' + counter);
    }
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for (var j = 100; j <= 120; j++) {
    if (j % 2 === 0) {
        console.log( 'Números pares entre 100 e 120: ' + '[' + j + ']');
    }
}

for (var k = 111; k <= 125; k++) {
    if (k % 2 !== 0) {
        console.log( 'Números ímpares entre 111 e 125: ' + '[' + k + ']');
    }
}
// ?
