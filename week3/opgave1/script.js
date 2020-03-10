// Opgave 1

let persoon = {
    voornaam: 'Mees',
    achternaam: 'Postma',
    tussenvoegsel: '',
    fullName : function() {
        return this.voornaam + " " + this.tussenvoegsel + " " + this.achternaam;
    }
};

document.getElementById("persoon").innerHTML = persoon.fullName();

// Opgave 2

let Boek = {
        titel: 'The Hunger Games',
        uitgavejaar: '2012',
        schrijver: 'Suzanne Collins',
        paginas: '344',
        uitgever: 'van Goor',
        boekomschrijving : function() {
            return this.titel + " " + this.uitgavejaar + " " + this.schrijver + " " + this.paginas + " " + this.uitgever;
    },
        hoofdletter : function() {
            return this.titel.toUpperCase();
    }
};

document.getElementById("boekomschrijving").innerHTML = Boek.boekomschrijving();
document.getElementById("hoofdletter").innerHTML = Boek.hoofdletter();

// Opgave 3

function Auto(merk, model, gewicht, inhoud, kleur) {
    this.autoMerk = merk;
    this.model = model;
    this.gewicht = gewicht;
    this.motorinhoud = inhoud;
    this.kleur = kleur;
}

let fiat = new Auto("Fiat", "Panda", "850KG", "1100", "Geel");
let tesla = new Auto("Texla", "Model S", "3500KG", "1000", "Wit");

document.getElementById("Auto").innerHTML = fiat;
document.getElementById("Auto").innerHTML = tesla;