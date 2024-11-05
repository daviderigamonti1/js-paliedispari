/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

"use strict";
console.clear();

//Funzione per generare un numero random da 1 a 5
function random() {
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

//Funzione per definire se la somma dei numeri sarà pari o dispari
function evenOrOdd(sum) {
    if (sum % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

//Chiedo all'utente di scegliere pari o dispari
const evenOddUser = prompt("Scegli pari o dispari").toLowerCase();

//Condizione per far sì che l'utente inserisca solo "pari" o "dispari"
if (evenOddUser === "pari" || evenOddUser === "dispari") {

    //Chiedo all'utente di scegliere un numero da 1 a 5
    let numUser = parseInt(prompt("Scegli un numero da 1 a 5"));

    //Uso un ciclo while in modo che, finchè l'utente non inserisce un numero valido, lo continua a chiedere
    while (numUser < 1 || numUser > 5 || isNaN(numUser)) {
        numUser = parseInt(prompt("Per favore, scegli un numero valido da 1 a 5"));
    }
    
    //Numero scelto dall'utente
    console.log(`Il tuo numero è ${numUser}`);

    //Genero il numero random del computer
    const numPc = random();
    console.log(`Il numero del computer è ${numPc}`);

    //Somma dei due numeri
    const sum = numUser + numPc;
    console.log(`La somma dei due numeri è ${sum}`);

    //Determino se la somma sia pari o dispari con la funzione evenOrOdd
    const sumEvenOdd = evenOrOdd(sum);
    console.log(`La somma dei due numeri è ${sumEvenOdd}`);

    //Condizione per stabilire chi ha vinto
    if (evenOddUser === sumEvenOdd) {
        console.log("Complimenti, hai vinto!");
    } else {
        console.log("Mi dispiace, hai perso. Ritenta, sarai più fortunato");
    }
} else {
    console.log("Scegli  solamente pari o dispari");
}