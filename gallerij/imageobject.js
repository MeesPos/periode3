let objectArray = [];

function ImageObject(name, description) {
    let imgObj = this;
    imgObj.name = name;
    imgObj.description = description;
}

function createObject() {
    for (let counter = 0; counter < deFotootjes.length; counter++) {
        objectArray.push(new ImageObject(deFotootjes[counter], counter));
    }
}

function plaatsDeFotos(obj) {
    let item = document.createElement('div');
    item.className = 'item';
    let deFotos = document.createElement('img');
    deFotos.src = obj.name;
    deFotos.alt = obj.description;
    deFotos.title = obj.description;
    item.append(deFotos);
    houdertje.append(item);
}

function showRandomImages() {
    for (let counter = objectArray.length; counter > 0; counter--) {
        let getall = Math.floor(Math.random() * objectArray.length);
        // plaatsDeFotos(deFotootjes[getall]);
        plaatsDeFotos(objectArray[getall]);
        objectArray.splice(getall, 1);
    }
}

function createJSON() {
    let id = document.getElementById('json');

    let applicationData = "application/json;charset=utf-8,"
        + encodeURIComponent(JSON.stringify(objectArray));

    let json = document.createElement('a');
    json.href = 'data:' + applicationData;
    json.download = 'json.json';
    json.innerHTML = 'Ready to download your JSON file';

    id.appendChild(json);
}

function requestListener(){
    let obj = JSON.parse(this.responseText);
    objectArray = obj.slice();
}

function createGetRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", requestListener);
    
    request.open("GET", "data/json.json", false);
    request.send();
}

// function setStorage(){
//     let storage = prompt('background color', 'green');
//     window.localStorage.setItem("background");
// }

// createObject();
// createJSON();
createGetRequest();
showRandomImages();