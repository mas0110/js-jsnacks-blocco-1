// -Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.
// 


const numeri = ["1"** 3,"2"** 3,"3"** 3,"4"** 3,"5"** 3,"6"** 3,"7"** 3,"8"** 3,"9"** 3,"10"** 3,]

let nUtente = prompt("scrivi un numero")

let  nUtentecubo = nUtente ** 3

let nscelto = numeri.slice(0,nUtente)

if(numeri.includes(nUtentecubo)){
    
    alert(("I numeri elevati al cubo prima del tuo sono... ")+(nscelto))
}else{
    alert("scegli un numero tra 0 e 10")
    location.reload(true);
}
