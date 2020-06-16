"use strict";

var terugKnop = document.querySelector("#terugknop");
var previousConsoleKnop = document.querySelector("#previousConsole");
var nextConsoleKnop = document.querySelector("#nextConsole");
var consoleTekstElement = document.querySelector("#yourConsole");
var consoleImgElement = document.querySelector("#consoleImage");
var volgendSchermKnop = document.querySelector(".goToNextPage");
var dobElement = document.querySelector("#DOB");

var consolesImgs = ["Playstation.png", "XBOX.png", "Nintendo.png", "Desktop.png", ];
var nameConsole = ["Playstation", "XBOX", "Nintendo", "Desktop"];

var rememberConsole = [];


var nummertje = 0;
//is de terug knop links bovin het scherm
function paginaTerug() {
    window.history.back()
}
terugKnop.addEventListener("click", paginaTerug);

function nextConsole() {
    nummertje++;
    consoleImgElement.src = "../img/icons/" + consolesImgs[nummertje]
    consoleTekstElement.textContent = nameConsole[nummertje];
    getConsoleName();
    if (nummertje > nameConsole.length -1) {
        nummertje = 0;
        consoleImgElement.src = "../img/icons/" + consolesImgs[nummertje]
        consoleTekstElement.textContent = nameConsole[nummertje];  
        getConsoleName();
    }
}


function previousConsole() {
    nummertje--;
    consoleImgElement.src = "../img/icons/" + consolesImgs[nummertje]
    consoleTekstElement.textContent = nameConsole[nummertje];
     getConsoleName();
     if (nummertje < 0) {
        nummertje = nameConsole.length -1;
        consoleImgElement.src = "../img/icons/" + consolesImgs[nummertje]
        consoleTekstElement.textContent = nameConsole[nummertje];
        getConsoleName();
    }
}

function getConsoleName() {
    //checkt of de string van de nameConsole undifined is
    if(typeof nameConsole[nummertje] == "undefined"){
    console.log("dit werkt niet")}
    else {
        localStorage.clear();
        rememberConsole = nameConsole[nummertje];
        localStorage.setItem("Gekozen Game Console", JSON.stringify(rememberConsole))
        console.log(rememberConsole); //string
        console.log(localStorage); // node array
    }
}
getConsoleName();

function saveConsoleName() {
    // hier moet localstorage worden gesaved ofzo??
}

terugKnop.addEventListener("click", paginaTerug);
nextConsoleKnop.addEventListener("click", nextConsole);
previousConsoleKnop.addEventListener("click", previousConsole);