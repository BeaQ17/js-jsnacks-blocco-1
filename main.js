/*
//SNACK DUE
//Chiedi all'utente di inserire due parole in successione, con due prompt
var word1 = prompt("Scrivi una parola:");
var word2 = prompt("Scrivi un'altra parola:");

//Il software stampa prima la parola più corta e poi quella più lunga
if (word1.length > word2.length) {
    console.log(word2, word1);
} else if (word1.length < word2.length){
    console.log(word1, word2);
} else if (word1.length == word2.length){
    console.log("Le parole hanno lunghezza uguale");
}
*/

/*
//SNACK TRE
//Chiedi per 10 volte all'utente di inserire un numero
var sum = 0;
var num = Number(prompt("Inserisci un numero:"));


for (var i = 0; i < 10; i++){
    var num_user = Number(prompt("Inserisci un numero:"));
    sum += num_user; //sum = sum + num_user
}

//Il software stampa la somma di tutti i numeri inseriti
console.log(sum);
*/

/*
//SNACK QUATTRO
//In un array sono contenuti i nomi degli invitati alla festa di Gatsby
var guests = ["guest1", "guest2", "guest3", "guest4", "guest5"];

//chiedi all'utente il suo nome 
var asker = prompt("E lei chi è?");

//e comunicagli se può entrare
var guard = false;

for (var i = 0; i < guests.length; i++){
    if (asker == guests[i]){
        guard = true;
        console.log("Sì");
        document.getElementById("enter").innerHTML = "Lei può entrare";
    } else if (asker != guests[i]){
        console.log("no");
    }
    
}
*/

/*
//SNACK CINQUE
//Crea array vuoto
var numbers = [];

//Chiedi all'utente di inserire un numero per sei volte e inserisci i numeri dispari nell'array
for (var i = 0; i < 6; i++){
    var ask_num = Number(prompt("Inserisci un numero:"));
    if (ask_num % 2 != 0){
        numbers.push(ask_num)
        console.log(numbers);
    }
}
*/

/*
//SNACK SEI
//Stampa il cubo dei primi N numeri, dove N è indicato dall'utente
var num_user = Number(prompt("Scegli un numero:"));
var i = 0;

while (i < num_user){
    i++
    var cube = i ** 3;
    console.log(cube);

    i > num_user == false;
}
*/



/*
//SNACK OTTO - VERSIONE UNO: SPLIT
//Chiedi un numero di 4 cifre all’utente
var userNum = Number(prompt("Scegli un numero di quattro cifre:"));

//calcola somma di tutte e quattro le cifre

var userNum = "1234";
var numArray= userNum.split("");
var sum = 0;

for (var i = 0; i < numArray.length; i++) {
    var elem = numArray[i];
    sum += Number(elem);
}

console.log(sum);


//SNACK OTTO - VERSIONE DUE: STRINGA
//Chiedi un numero di 4 cifre all’utente

//calcola somma di tutte e quattro le cifre
var sum2 = 0;

for (var i = 0; i < userNum.length; i++) {
    var elem = userNum[i];
    sum2 += Number(elem);
}

console.log(sum2);
*/

/*
//SNACK SETTE
//Stampa le potenze di 2 fino a 1000 (2n)
var counter = 0;
while (Math.pow(2, counter) < 1000) {
    console.log(Math.pow(2, counter));
    counter++;
}
*/


