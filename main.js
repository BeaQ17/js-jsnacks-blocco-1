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
    }
}


