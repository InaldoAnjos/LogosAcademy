//Função que retorna a soma de dois elementos
function somar(elemento1, elemento2) {
    console.log(elemento1 + elemento2)
}

somar(10, 10);

//Função que retorna a subtração de dois elementos
function subtrair(elemento1, elemento2){
    return elemento1 - elemento2;
}

let subtractResult = subtrair(25, 5);
console.log(subtractResult); 

//Função que retorna a concatenação de dois nomes
let fullName = function(name, sobrenome){
    return name + " " + sobrenome;
}

console.log(fullName("Inaldo", "Junior"));