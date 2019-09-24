// Boks 1
const div1 = document.querySelector("#div1");

const bredde = prompt("Hvilken bredde vil du ha?");
const hoyde = prompt("Hvilken høyde vil du ha?");
const farge = prompt("Hvilken farge vil du ha?");

div1.style.width = bredde + "px";
div1.style.height = hoyde + "px";
div1.style.backgroundColor = farge;

// Boks 2
const div2 = document.querySelector("#div2");

const bredde2 = prompt("Hvilken bredde vil du ha på boks 2?");
const hoyde2 = prompt("Hvilken høyde vil du ha på boks 2?");
const farge2 = prompt("Hvilken farge vil du ha på boks 2?");

div2.style.width = bredde2 + "px";
div2.style.height = hoyde2 + "px";
div2.style.backgroundColor = farge2;