console.log('wewe');
/* 

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const userX = prompt('inserisci una parola')
console.log(userX);

const userY = prompt('inserisci una parola')
console.log(userY);

if(userX.length > userY.length) {
    console.log('la prima parola inserita ha piu caratteri');

}else if(userY.length > userX.length){
    console.log('la seconda parola inserita ha piu caratteri');
}else{
    console.log('le due parole hanno lo stesso numero di cartatteri');
}