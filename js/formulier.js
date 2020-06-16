
var usernameElement = document.querySelector("#username");
var passwordElement = document.querySelector("#password");
var dobElement = document.querySelector("#DOB");
var countryElement = document.querySelector("#country");
var emailElement = document.querySelector("#email");
var volgendSchermKnop = document.querySelector(".goToNextPage");


//deze functie checkt elke 100 micro seconden (1/10 seconden) of 1 van de input elementen van het formulier leeg is.
setInterval(function(){
    if(usernameElement.value.length == "" || passwordElement.value.length == "" || dobElement.value.length == "" || countryElement.value.length == "" || emailElement.value.length == "") {
        volgendSchermKnop.hidden=true;
    } else {
    volgendSchermKnop.hidden=false;}
}, 100);