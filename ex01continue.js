// b) quando chegar no número 25 interrompa a instrução e pare o loop


let contando = 0;

while(contando < 20) {

    contando += 1;
  
  if(contando === 10) {
    console.log("CONTINUE")
    continue;
  }

  console.log("contando " + contando)

}