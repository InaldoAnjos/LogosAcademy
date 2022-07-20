//Function Normal
function somaDoisNumeros(numero1, numero2){
    return numero1 + numero2;
}

console.log(somaDoisNumeros(10, 10));

//Function 'declarada'
let somaNNumeros = function (n1, n2){
    return n1 + n2;
}

console.log(somaNNumeros(10,10));

//Arrow Function
let somaDeDoisNumeros = (num1, num2) => {
    return num1 + num2;
}

console.log(somaDeDoisNumeros(10,10));

//Arrow Function
let subDeDoisNumeros = (num1, num2) => {
    return num1 - num2;
}

console.log(subDeDoisNumeros(10,10));

//Arrow Function Reduzido
let multDoisNumeros = (n1, n2) => n1 * n2;

console.log(multDoisNumeros(10,10));

//Arrow Function Maior de Idade
let maiorDeIdade = (idade) => idade>17 ? `Idade: ${idade}. Sim, é maior de idade` : `Idade: ${idade}. Não, é menor de idade`;

console.log(maiorDeIdade(18));
console.log(maiorDeIdade(17));
