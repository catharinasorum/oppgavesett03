const inpBredde = prompt("Hva er bredden til rektangelet?");
const inpHoyde = prompt("Hva er høyden til rektangelet?");

const bredde = Number(inpBredde);
const hoyde = Number(inpHoyde);

function finnArealet(b, h) {
    const arealet = b * h;
    document.write("Arealet av trekanten er " + arealet + " cm");
}

finnArealet(bredde, hoyde);