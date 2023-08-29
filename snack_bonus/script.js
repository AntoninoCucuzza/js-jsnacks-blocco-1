console.log('wewewewe');

/*

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/

const array = []

for (let i = 0; i < 6; i++) {
   
    const userN = (Number(prompt('inserisci un numero'))) 

    if (userN % 2 == 0) {
       
    } else {
        array.push(userN)
    }

}

console.log(array);

