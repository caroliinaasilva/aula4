//10 em 10` | Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".|

let contando = 10

while(contando  < 100) {

    contando  += 10;
  
  if(contando  === 60 || contando === 90) {
    console.log("CONTINUE")
    continue;
  }

  console.log("contando  " + contando)

}