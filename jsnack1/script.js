console.log('we');
/*

L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

*/

const userFirst = prompt('inserisci un numero')
console.log(Number(userFirst));

const userSecond = prompt('inserisci un numero')
console.log(Number(userSecond));

if(userFirst > userSecond){
    console.log('il primo numero inserito e maggiore');
}else if(userSecond > userFirst){
    console.log('il secondo numero inserito e maggiore ');
}else{
    console.log('inserisci solo numeri');   
}