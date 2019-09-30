const oppgave05Boks = document.querySelector("#oppgave05-boks");
const inpX = document.querySelector("#inpX");
const inpY = document.querySelector("#inpY");

function flyttBoks(evt) {
    oppgave05Boks.style.left = Number(inpX.value) + "px", 
    oppgave05Boks.style.top = Number(inpY.value) + "px";
}

inpX.addEventListener("input", flyttBoks);
inpY.addEventListener("input", flyttBoks);