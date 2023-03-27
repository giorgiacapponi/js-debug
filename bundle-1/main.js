/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

// è una funzione che controlla l'età e mi dice se sono maggiorenne o meno
// CORREZIONE
// const myAge = 32;

// function checkAge(age) {
    
//     let message = '';

//     if (age < 18) {
//         message = `Sei troppo giovane! Hai ${age} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
//     return message
// }

// const checkMyAge =checkAge(myAge)
// console.log(checkMyAge);


// // ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

// funzione che mi dicw il numero di colori presenti nell'Array
// CORREZIONE
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();


// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// funzione che somma il numero 12 al volore inserito dall utente

// CORREZIONE trasformare in tipo numero il valore stringa ricevuto
// function addNumbers() {
//     const userNumber = parseInt( prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();


// // ESERCIZIO 4
// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();



// ESERCIZIO 4

// funzione che permette l'accesso solo ad elementi appartenenti all'Array
// CORREZIONE
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
        console.log('Accesso consentito!');
    }else {
        console.log('Accesso negato!');
    }

    // if (grantAccess === true) {
    //     console.log('Accesso consentito!');
    // } else {
    //     console.log('Accesso negato!');
    // }
}
checkAccess();
