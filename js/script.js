//Made by Jody


//Variabelen

var games = [];
var liEl = document.querySelectorAll('a');
var clear = document.querySelector('#clear');
var volgendSchermKnop = document.querySelector('.goToNextPage');
//var enterBtn = document.querySelector('.enter');

volgendSchermKnop.hidden=true;

//EventHandlers
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.querySelectorAll("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function kiesApex() {
    games.push("Apex Legends");
    localStorage.setItem("games", JSON.stringify(games));
    liEl[0].classList.toggle('chosen');
    volgendSchermKnop.hidden = false;
    console.log(games);
    console.log(localStorage);
}

function kiesCodMW() {
    games.push("Call of Duty: Modern Warfare");
    localStorage.setItem("games", JSON.stringify(games));
    liEl[1].classList.toggle('chosen');
    volgendSchermKnop.hidden = false;
    console.log(games);
    console.log(localStorage);
}

function kiesCodWar() {
    games.push("Call of Duty: Warzone");
    localStorage.setItem("games", JSON.stringify(games));
    liEl[2].classList.toggle('chosen');
    volgendSchermKnop.hidden = false;
    console.log(games);
    console.log(localStorage);
}

function kiesDestiny2() {
    games.push("Destiny 2");
    localStorage.setItem("games", JSON.stringify(games));
    liEl[3].classList.toggle('chosen');
    volgendSchermKnop.hidden = false;
    console.log(games);
    console.log(localStorage);
}

function kiesFifa20() {
    games.push("FIFA 20");
    localStorage.setItem("games", JSON.stringify(games));
    liEl[4].classList.toggle('chosen');
    volgendSchermKnop.hidden = false;
    console.log(games);
    console.log(localStorage);
}

function kiesFortnite() {
    games.push("Fortnite");
    localStorage.setItem("games", JSON.stringify(games));
    liEl[5].classList.toggle('chosen');
    volgendSchermKnop.hidden = false;
    console.log(games);
    console.log(localStorage);
}

function kiesGta() {
    games.push("Grand Theft Auto 5");
    localStorage.setItem("games", JSON.stringify(games));
    liEl[6].classList.toggle('chosen');
    volgendSchermKnop.hidden = false;
    console.log(games);
    console.log(localStorage);
}

function kiesMinecraft() {
    games.push("Minecraft");
    localStorage.setItem("games", JSON.stringify(games));
    liEl[7].classList.toggle('chosen');
    volgendSchermKnop.hidden = false;
    console.log(games);
    console.log(localStorage);
}

function kiesOverwatch() {
    games.push("Overwatch");
    localStorage.setItem("games", JSON.stringify(games));
    liEl[8].classList.toggle('chosen');
    volgendSchermKnop.hidden = false;
    console.log(games);
    console.log(localStorage);
}

function clearList() {
    games.length = 0;
    localStorage.clear();
    volgendSchermKnop.hidden = true;
    
    
    for (var i = 0; i < liEl.length; i++) {
        liEl[i].classList.remove('chosen');
    }
    
    console.log(games);
    console.log(localStorage);
}

function removeColor() {
    console.log("hello world");
    
    for (var i = 0; i < liEl.length; i++) {
        liEl[i].classList.remove('chosen');
    }

}


//EventListeners
liEl[0].addEventListener('click', kiesApex);
liEl[1].addEventListener('click', kiesCodMW);
liEl[2].addEventListener('click', kiesCodWar);
liEl[3].addEventListener('click', kiesDestiny2);
liEl[4].addEventListener('click', kiesFifa20);
liEl[5].addEventListener('click', kiesFortnite);
liEl[6].addEventListener('click', kiesGta);
liEl[7].addEventListener('click', kiesMinecraft);
liEl[8].addEventListener('click', kiesOverwatch);
clear.addEventListener('click', clearList);

terugKnop.addEventListener('click', paginaTerug)



window.addEventListener('load', (event) => {
  console.log(localStorage);
  games.length = 0;
  localStorage.clear();
    
});

