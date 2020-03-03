// Pas het script aan volgens de richtlijnen
let palet = new Array('wit','blauw','groen','rood','zwart');
document.write('<br />palet is nu: ' + palet);

let nieuwekleur = prompt('Typ een nieuwe kleur in');

// Stop de nieuwekleur ACHTERAAN in de palet array
palet.push(nieuwekleur);
document.write('<br />palet is nu: ' + palet);

// Stop de nieuwekleur VOORAAN in de palet array
palet.unshift(nieuwekleur);
nieuwekleur = prompt( 'Typ een nieuwe kleur in:');

document.write('<br />palet is nu: ' + palet);
// Sorteer de array

palet.sort();
document.write('<br />palet is nu: ' + palet);
