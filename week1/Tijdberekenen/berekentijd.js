let startTijd;
let eindTijd;

const tijdButton = document.getElementById('tijdButton');
const verlopenTijdH1 = document.getElementById('verlopenTijd');

const list = document.getElementById('vorigTijdLijst');

function startTellen() {
    startTijd = new Date();
    veranderButtonStart();
}
function stopTellen() {
    eindTijd = new Date();
    let timeDiff = eindTijd - startTijd;
    timeDiff /= 1000;

    let seconds = Math.round(timeDiff);
    verlopenTijdH1.innerHTML = seconds + ' seconds.';

    veranderButtonStop();
    maakLijst(startTijd, eindTijd, seconds);
}

function veranderButtonStart() {
    tijdButton.style.backgroundColor = "red";
    tijdButton.style.Color = "black";
    tijdButton.innerHTML = "STOP";
    tijdButton.setAttribute('onclick', 'stopTellen()');
}


function veranderButtonStop() {
  tijdButton.style.backgroundColor = "green";
  tijdButton.style.Color = "white";
  tijdButton.innerHTML = "START";
  tijdButton.setAttribute('onclick', 'startTellen()');
}

function maakLijst(startingDate, endingDate, timePassed){
    const listItem = document.createElement('li');
    listItem.className = 'listItem';
    listItem.innerHTML = 'Start geklikt om: ' + startingDate + '. <br><br> Stop geklikt om: ' + endingDate +'. <br><br>' + 'Verstreken tijd is: ' + timePassed + '.';
    list.prepend(listItem);

}