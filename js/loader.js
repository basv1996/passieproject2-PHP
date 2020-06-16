var loaderDivElement = document.querySelector(".loader");
var loaderCircleElement = document.querySelector(".loading_circle");

function removeLoadingCircle() {
    loaderDivElement.style.display = "none";
    loaderCircleElement.style.display = "none";

}

//zet een timer om na 300 ms (3 seconden) de functie aan te roepen.
window.addEventListener('load', (event) =>{
    window.setTimeout(() =>{
removeLoadingCircle();
    }, 1500);
})


//Bronnen:
// https://www.w3schools.com/js/js_timing.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event