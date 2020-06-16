var terugKnop = document.querySelector("#terugknop");

function paginaTerug() {
window.history.back()
}

terugKnop.addEventListener("click", paginaTerug);