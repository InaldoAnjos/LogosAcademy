const json = require('./estados.json')
const meusEstados = json.estados


for(let i=0; i < meusEstados.length; i++){
    if(meusEstados[i].sigla == "PB"){
        console.log("O estado da Paraíba está no índice: ", i)
        for(let j=0; j < meusEstados[i].cidades.length; j++){
            if(meusEstados[i].cidades[j] == "João Pessoa"){
                console.log("A capital da Paraíba está no índice: ", j)
            }
        }        
    }
}
