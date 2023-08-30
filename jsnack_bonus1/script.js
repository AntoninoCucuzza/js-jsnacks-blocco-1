/*

Da fare con WHILE 

L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

*/


i = 0
listaN = []
while (i < 2) {
    const userN = prompt ('inserisci un numero')

    listaN.push(userN)

    i++
}

const numeroUno = listaN[0] 

const numeroDue = listaN[1]

if (numeroUno < numeroDue) {
    console.log(`${numeroUno} < ${numeroDue}`);
} else if (numeroUno == numeroDue ){
    console.log('sono uguali');
}else if( numeroUno > numeroDue){
    console.log(`${numeroUno} > ${numeroDue}`);
}