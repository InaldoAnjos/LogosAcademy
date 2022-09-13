
function podeDirigir(idade){
    if(idade > 74){
        return "O Senhor não pode mais dirigir. Chame um UBER!"
    }else if(idade >= 18){
        return "Pode seguir, Senhor. Boa viagem!" 
    }else{
        return "Ei menor, vai pra onde dirigindo?"
    }
}

let vaiOuFica = podeDirigir(55)
console.log(vaiOuFica);