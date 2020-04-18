// Het resultaat van de JSON bestaat voor een user uit:
// Let op, een property kan uit meerdere objecten bestaan.
// De beschrijving kun je terugvinden op
// https://randomuser.me/documentation#results

// gender
// name
// location
// email
// login
// dob
// registered
// phone
// cell
// id
// picture
// nat

function Street(item) {
    streetObj = this;
    streetObj.street = item.street;
}

 function Id(item) {
    idObj = this;
    idObj.id = item;
 }

function Email(item) {
    emailObj = this;
    emailObj.email = item;
}

function Name(item) {
    nameObj = this;
    nameObj.title = item.title;
    nameObj.first = item.first;
    nameObj.last = item.last;
}

function Coordinates(item) {
    locationObject = this;
    locationObject.longitude = item.longitude;
    locationObject.latitude = item.latitude;
}

function Address(item) {
    addressObj = this;
    addressObj.street = item.street;
    addressObj.city = item.city;
    addressObj.state = item.state;
    addressObj.country = item.country;
    addressObj.postcode = item.postcode;

    // GEDAAN:    maak de constructor voor address af,
    //          het object bevat meerdere objecten.
    //          Het adres bestaat uit de onderdelen
    //          street, city, state, country, postcode

    addressObj.showStreet = function() {
        console.log(
            addressObj.street.name,
            addressObj.street.number
        );
    };

    addressObj.showAddress = function() {
        console.log(
            addressObj.city,
            addressObj.state,
            addressObj.country,
            addressObj.postcode
        );
    };
}

function Email(item) {
    let emailObject = this;
    emailObject.email = item;
}

// TODO:    Maak de ontbrekende objecten voor
//          gender
//          location
//          email
//          login
//          dob
//          registered
//          phone
//          cell
//          id
//          picture
//          nat