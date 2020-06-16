//var accountSetupFormElement = document.querySelector("#accountSetupForm");
//var accountSetupPartElement = document.getElementsByClassName("steps");

var gotToStep2Element = document.querySelector(".gotToStep2");
var gotToStep3Element = document.querySelector(".gotToStep3");
var currentSetupElement = document.querySelector(".currentSetup");
var part1Element = document.querySelector("#part1");
var part2Element = document.querySelector("#part2");
var part3Element = document.querySelector("#part3");

var currentStep = 0;
//
//showStep(currentStep);


function showStep2() {
    part1Element.className = "";
    part1Element.classList.add("stepsHidden");
     part2Element.className = "";
    part2Element.classList.add("currenSetup");

}

function showStep3() {
     part2Element.className = "";
    part2Element.classList.add("stepsHidden");
     part3Element.className = "";
    part3Element.classList.add("currenSetup");
    
}

gotToStep2Element.addEventListener("click", showStep2);
gotToStep3Element.addEventListener("click", showStep3);