/*

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

"use strict";
console.clear;

//Funzione per verificare se la parola è un palindromo
function isPalindrome(word) {
    //Uso toLowerCase per gestire i casi con eventuali lettere maiuscole
    word = word.toLowerCase();
    //Prima converto la parola in un array di caratteri, poi lo inverto e infine lo riconverto in una stringa
    const reverseWord = word.split("").reverse().join("");
    return word === reverseWord;
}

//Chiedo all'utente di inserire una parola
const word = prompt("Inserisci una parola");

//Condizione per verificare se la parola è un palindromo
if (isPalindrome(word)) {
    console.log(`La parola "${word}" è un palindromo!`);
} else {
    console.log(`La parola "${word}" non è un palindromo.`)
}