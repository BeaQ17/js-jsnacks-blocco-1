//SNACK OTTO
//1a:
//Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10

var palla_obj = {
    nome: "palla",
    peso: 10
};

console.log(palla_obj);

//1b
//Attraverso un prompt dare possibilità all'utente di modificare il peso della palla
var new_w = Number(prompt("Cambia il peso della palla:"));

palla_obj.peso = new_w;
console.log(palla_obj.peso);
