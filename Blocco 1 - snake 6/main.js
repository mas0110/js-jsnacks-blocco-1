// -Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.
// 


const N = 10;

const numeri = [];
for (let i = 1; i <= N; i++) {
    numeri.push(i ** 3);
}

let nUtente = prompt("scrivi un numero")

let  nUtentecubo = nUtente ** 3

let nscelto = numeri.slice(0,nUtente)

if(numeri.includes(nUtentecubo)){
    
    alert(("I numeri elevati al cubo prima del tuo sono... ")+(nscelto))
}else{
    alert("scegli un numero tra 0 e 10")
    location.reload(true);
}
