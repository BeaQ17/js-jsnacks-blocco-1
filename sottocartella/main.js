/*
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
var new_w = parseInt(prompt("Cambia il peso della palla:"));
palla_obj.peso = new_w;
console.log(palla_obj);
*/


//SNACK NOVE
//Creare oggetto che rappresenti triangolo rettangolo, con le seguenti proprietà:
//base e altezza.
//Calcolare perimetro e area
var triangolo = {
    base: 3,
    altezza: 4
}

console.log(triangolo);

//trova ipotenusa
var ipotenusa = Math.sqrt(Math.pow(3,2) + Math.pow(4,2));
console.log(ipotenusa);

//trova perimetro
var perimetro = ipotenusa + triangolo.base + triangolo.altezza;
console.log(perimetro);

//trova area
var area = (triangolo.base * triangolo.altezza) / 2;
console.log(area);