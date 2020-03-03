const deTijd = document.getElementById('theTime').innerHTML

// Gebruik de codestandaarden om dit bestand aan te passen
let vandaag = new Date();
document.write("<br />Vandaag is: " + vandaag);

const maanden = new Array('januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december');
const weekdag = new Array('zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag')

document.write("<br />Vandaag is: "
    + weekdag[vandaag.getDay()] +
    ' ' + vandaag.getDate() +
    ' ' + maanden[vandaag.getMonth()] +
    ' ' + vandaag.getFullYear());

// Bekijk ook het bestand datemethodes.html voor extra informatie
let einddatum = prompt('Wat is de einddatum JJJJ-MM-DD?');
let deadline = new Date(einddatum);
document.write('<br/>Deadline:'+deadline );

// Haal nu één dag van de deadline af
document.write('<br/>Deadline:'+deadline );