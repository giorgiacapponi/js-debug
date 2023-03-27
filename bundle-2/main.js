/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// come situazione di partenza abbiamo i=0 e la condizione per cui il ciclo si esegua è i >5 quindi non inizia proprio

// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// // ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// ESERCIZIO 2

// funzione che se il numero inserito è pari allora aggiunge 5 senno da undefined

// CORREZIONE
// function addIfEven(num) {
//     let sum;
//     if (num % 2 === 0) {
//         sum= num +5;

//     }
    
//     return  sum;
// }
// const number=addIfEven()
// console.log(number);


// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// ESERCIZIO 3
// funzione che stampa numeri fino a 5
// CORREZIONE
// function loopToFive() {
//     for (let i = 0; i <= 5; i++) {
//         console.log(i);
//     }
// }
// loopToFive();

// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // [2,4,6,8]

// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)

// funzione che crea un array soltanto con i numeri pari
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// function displayEvenNumbers() {
//     let evenNumbers = [];
   
//     for (let i = 0; i < numbers.length; i++) {
        
//         // console.log(numbers[i]);
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
      
//     }
//     return evenNumbers;
// }
//  displayEvenNumbers(); // [2,4,6,8]
//  const evenNumbers= displayEvenNumbers();
// console.log(evenNumbers);