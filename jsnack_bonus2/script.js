console.log('wewe');

/* 

(con while) Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/


i = 0
listaParole = [] 
while (i < 2) {
    const userX = prompt('inserisci una parola')
    //console.log(userX);
    
    listaParole.push(userX)
    //console.log(listaParole);
    
    i++
}

const parolaUno = listaParole[0]
const parolaDue = listaParole[1]

if (parolaUno < parolaDue) {
    console.log( `la ${parolaUno} ha meno caratteri della parola ${parolaDue}`);
} else if (parolaUno == parolaDue ){
    console.log('le due parole hanno lo stesso numero di caratteri');
}else{
    console.log(`la parola ${parolaDue} ha mneno caratteri della parola ${parolaUno}`);
}