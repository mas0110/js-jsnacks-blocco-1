// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

let nome1 = prompt("scegli il primo nome ")

let nome2 = prompt("scegli il secondo nome ")
// 
let nome3 = prompt("scegli il terzo nome ")

let cognome1 = prompt("scegli il primo cognome")

let cognome2 = prompt("scegli il secondo cognome")
// 
let cognome3 = prompt("scegli il terzo cognome")
// 



// 
const getRandomInt = ( min = 0, max = 1 ) => {
	return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

let nomerandom = document.querySelector("div.risultatonomi")

const listanomi = [ nome1, nome2, nome3 ],

	totnomi = listanomi.length,
	totnomirandom = totnomi - 1,
	resultnomi = getRandomInt( 0, totnomirandom );
	
nomerandom.innerHTML = ( listanomi[resultnomi] );


let cognomerandom = document.querySelector("div.risultatocognomi")

 const listacognomi = [ cognome1, cognome2, cognome3 ],
 
 	totcognomi = listacognomi.length,
 	totcognomirandom = totcognomi - 1,
 	resultcognome = getRandomInt( 0, totcognomirandom );
 	
 cognomerandom.innerHTML = ( listacognomi[resultcognome] );




document.getElementById("again").addEventListener("click", function(){

    let nomerandom = document.querySelector("div.risultatonomi")

    const listanomi = [ nome1, nome2, nome3 ],
    
    	totnomi = listanomi.length,
    	totnomirandom = totnomi - 1,
    	resultnomi = getRandomInt( 0, totnomirandom );
    	
    nomerandom.innerHTML = ( listanomi[resultnomi] );
    
    
    let cognomerandom = document.querySelector("div.risultatocognomi")
    
    const listacognomi = [ cognome1, cognome2, cognome3 ],
    
    	totcognomi = listacognomi.length,
    	totcognomirandom = totcognomi - 1,
    	resultcognome = getRandomInt( 0, totcognomirandom );
    	
    cognomerandom.innerHTML = ( listacognomi[resultcognome] );

})
