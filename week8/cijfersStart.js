function Opdracht(vak, beschrijving) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.beschrijving = beschrijving;
}

// OPDRACHT 1.
// Maak de Cijfer functie af.

// opdracht is een object die met behulp van de bovenstaande
// functie is aangemaakt.

// Cijfer een nummer van 0 tot 10
let cijfer = Math.floor(Math.random() * 11);

function Cijfer(opdracht, cijfer) {
    let cijferObj = this;

    cijferObj.opdracht = opdracht;
    cijferObj.cijfer = cijfer;
}

// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.
// Minimaal 3 opdrachten voor 3 verschillende vakken.
// Totaal dus 9 opdrachten
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new

let opdrachtCMS = new Opdracht('CMS', 'Opdracht 1');
let opdrachtCMS = new Opdracht('CMS', 'Opdracht 2');
let opdrachtCMS = new Opdracht('CMS', 'Opdracht 3');
let opdrachtBAP = new Opdracht('BAP', 'Opdracht 1');
let opdrachtBAP = new Opdracht('BAP', 'Opdracht 2');
let opdrachtBAP = new Opdracht('BAP', 'Opdracht 3');
let opdrachtFRO = new Opdracht('FRO', 'Opdracht 1');
let opdrachtFRO = new Opdracht('FRO', 'Opdracht 2');
let opdrachtFRO = new Opdracht('FRO', 'Opdracht 3');

console.log(opdrachtFRO);

opdrachtCMS.cijfer('7');
opdrachtBAP.cijfer('8');
opdrachtFRO.cijfer('6');

// Maak voor al deze opdrachten een cijfer variabele aan
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new

// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!
let opdrachten = [
    opdrachtCMS.push(new Opdracht('CMS', 'Opdracht 1', 'Opdracht 2', 'Opdracht 3')),
    opdrachtBAP.push(new Opdracht('BAP', 'Opdracht 1', 'Opdracht 2', 'Opdracht 3')),
    opdrachtFRO.push(new Opdracht('FRO', 'Opdracht 1', 'Opdracht 2', 'Opdracht 3'))
];

let cijfers = [
    opdrachtCMS.pust(cijfer('7')),
];

function Periode(opdrachten, cijfers) {
    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}

// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie

// OPDRACHT 5.
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft