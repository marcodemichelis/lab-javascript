let variable1 = "ciao mondo!";   // Can change the variable value
variable1 = "'let' variable changed!!";
console.log(variable1);
const const1 = "const value"; // Cannot change the constant value

// Primitive Types
let myname = "Marco";             // Literal String 
let myFavouriteNumber = 10;     // Literal Number 
let isFavourite = true;         // Boolean String 
let selectedColor = undefined;  // "undefined" is a value and a type as well
let selectedPlace = null;       // typeof null is "object"

// "Dynamic language" feature
console.log(typeof myname);
myname = 99;
console.log(typeof myname);

// ####### Object and Properties #######
console.log("####### Object and Properties #######");
let person = {
    name: "Joe",
    age: 44
};
console.log(person);
console.log(`${person.name} ${person["name"]}`);

var list = [
    { nome: "nome1", cognome: "cognome1"},
    { nome: "nome2", cognome: "cognome2"},
    { nome: "nome3", cognome: "cognome3"},
    { nome: "nome4", cognome: "cognome4"},
];




