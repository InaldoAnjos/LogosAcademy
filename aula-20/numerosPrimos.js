/*Definição de número primo: 
    o número que só é divido por 1 e por ele mesmo*/

let funcaoPrimo = (n) => {   //ArrowFunction 
    let acm = 0;
    for(let div=1; div<=n; div++){//Teste de número primo
        let res = n % div;
            if(res==0){
                acm++;
                }if(acm>2){
                    console.log(`${n} não é primo`);
                    break;
            }
        }if(acm<=2){
            console.log(`${n} é primo`);
    }
}//Fim do programa

funcaoPrimo(2);
funcaoPrimo(3);
funcaoPrimo(4);
funcaoPrimo(5);
funcaoPrimo(7);
funcaoPrimo(8);
funcaoPrimo(17);
funcaoPrimo(25);
funcaoPrimo(36);