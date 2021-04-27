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