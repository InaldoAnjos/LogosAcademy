let alunos = ["João", "Pedro", "Jorge", "Francisco"]

for(let i=0; i<alunos.length; i++){
    if(alunos[i]=='João'){
        var indiceJoao = i;
    }else if(alunos[i]=='Francisco'){
        var indiceFrancisco = i;
    }
}
    console.log('O indice de João é: ', indiceJoao);
    console.log('O indice de Francisco é: ', indiceFrancisco);