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

    const pc = userN[i - 1]

    const numero = listaN[i];

    if(numero[i] > pc ){
        console.log('il primo nummero e piu alto ');
    }else{
        console.log('il secondo numero e piu alto ');
    }

    i++
}