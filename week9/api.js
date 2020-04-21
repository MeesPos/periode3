// GEDAAN:    Haal alle fouten uit de scripts.
//          Fouten zijn niet alleen beperkt tot var, let o const!
//          maar ook bijvoorbeeld de afsluiting van een statement
//          een komma die verkeerd staat, of variabelen die niet
//          bekend zijn.

let results = [];
let item, coordinates, address, id, email, street = {};

function users(items) {
    for (let count = 0; count < items.length; count++) {

        item = new Name(items[count].name);
        coordinates = new Coordinates(items[count].location.coordinates);
        address = new Address(items[count].location);
        email = new Email(items[count].email);
        street = new Street(items[count].location);
        id = new Id(items[count].id);
        gender = new Gender(items[count].gender);
        login = new Login(items[count].login);
        dob = new Dob(items[count].dob);
        registered = new Registered(items[count].registered);
        phone = new Phone(items[count].phone);
        cell = new Cell(items[count].cell);
        picture = new Picture(items[count].picture);
        nat = new Nat(items[count].nat);
    }
    console.table(item);
    console.table(coordinates);
    console.table(address.street);
    console.log(address);
    console.table(id);
    console.table(email);
    console.table(street);
    console.table(address);
    console.table(gender);
    console.table(login);
    console.table(dob);
    console.table(registered);
    console.table(phone);
    console.table(cell);
    console.table(picture);
    console.table(nat);
}

function createGetRequest(url, callBack) {

    let request = new XMLHttpRequest()

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let response = JSON.parse(this.response)
            callBack(response)

        }
    }

    request.open(
        'GET',
        url,
        true
    );

    request.send()
}

function randomUser(json) {
    results = json.results.slice();
    users(results);
}

let url = 'https://randomuser.me/api/?results=1'
createGetRequest(url, randomUser);
// TODO:    check de xhr tab en waarschuwingen tab
//          De xhr tab heeft subtabs, check deze allemaal
//          In deze subtabs staat veel informatie voor je
//          als je call bijvoorbeeld geen antwoord heeft