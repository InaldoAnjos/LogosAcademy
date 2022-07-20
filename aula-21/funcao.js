let carro = {
    fabrica: 'Logos',
    modelo: 'Uno',
    ano: 2022,
}

let modelCarro = (modelo, ano, cor, preco) => {
    let concessionariaCarro = {/* ...carro */}

    concessionariaCarro.fabrica = carro.fabrica;
    concessionariaCarro.modelo = modelo, 
    concessionariaCarro.ano = ano,
    concessionariaCarro.cor = cor,
    concessionariaCarro.preco = preco;
    
    return concessionariaCarro;
}

console.log(modelCarro('Palio', 1997, 'Verde', 19999.99))
console.log(modelCarro('D-20', 1993, 'Bege', 59999.99))
console.log(modelCarro('C-10', 1980, 'Azul', 39999.99))
console.log(modelCarro('F-1000', 1999, 'Prata', 79999.99))