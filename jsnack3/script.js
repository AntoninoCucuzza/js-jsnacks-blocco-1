console.log('wewewe');
/*

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

const listaN = []

let tot = 0

for (let i = 0; i < 2 ; i++) {

    const userN = (Number(prompt('inserisci un numero'))) 

    listaN.push(userN)

    tot += (listaN[i])
}

console.log(tot + ' se volete aumentate i < 10 per farlo 10 volte');