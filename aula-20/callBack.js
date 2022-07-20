console.log('Executei...')
setTimeout(()=>{
    console.log('Passaram 5 segundos...')
}, 5000);

let somar = (n1, n2) => n1 + n2;
let subtrair = (n1, n2) => n1 - n2;
let multiplicar = (n1, n2) => n1 * n2;
let dividir = (n1, n2) => n1 / n2;

let calculadora = (n1, n2, callback) => callback(n1, n2);

console.log(calculadora(12, 3, somar));
console.log(calculadora(12, 3, subtrair));
console.log(calculadora(12, 3, dividir));
console.log(calculadora(12, 3, multiplicar));