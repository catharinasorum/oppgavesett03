const inpX = document.querySelector("#inpX");
const inpY = document.querySelector("#inpY");
const oppgave05Boks = document.querySelector("#oppgave05-boks");

function flyttBoks() {
    oppgave05Boks.moveto = Number(inpX.value), Number(inpY.value);
}

inpX.addEventListener("input", flyttBoks);
inpY.addEventListener("input", flyttBoks);