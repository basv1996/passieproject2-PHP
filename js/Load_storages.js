var displaystoragesElement = document.querySelector("#displaystorages");
var displaystoragesElement2 = document.querySelector("#displaystorages2");

window.addEventListener('load', () => {
  console.log(localStorage);
});

displaystoragesElement.textContent = (options[0]);
displaystoragesElement2.textContent = (rememberConsole[0]);