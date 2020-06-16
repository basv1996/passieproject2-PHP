var dislikeButton = document.querySelector("#decline");
var likeButton = document.querySelector("#approve");
var mainElement = document.querySelector("#home_main");

function slideCardToLeft() {
     mainElement.classList.remove("animationSlideRight", "animationSlideLeft");
    mainElement.className = '';
     mainElement.classList.add("animationSlideLeft");
}

function slideCardToRight() {
    mainElement.classList.remove("animationSlideRight", "animationSlideLeft");
     mainElement.className = '';
     mainElement.classList.add("animationSlideRight");   
}

function removeClass() {
    setTimeout(function(){
mainElement.className = "";
    }, 700);
}

dislikeButton.addEventListener("click", slideCardToLeft);
dislikeButton.addEventListener("click", removeClass);
likeButton.addEventListener("click", slideCardToRight);
likeButton.addEventListener("click", removeClass);
