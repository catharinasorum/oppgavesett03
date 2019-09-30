const formArrangement = document.querySelector("#formArrangement");
const oppgave08InpImg = document.querySelector("#oppgave08InpImg");
const oppgave08InpNavn = document.querySelector("#oppgave08InpNavn");
const oppgave08InpDag = document.querySelector("#oppgave08InpDag");
const oppgave08InpSted = document.querySelector("#oppgave08InpSted");
const oppgave08InpGjester = document.querySelector("#oppgave08InpGjester");
const arrangementer = document.querySelector("#arrangementer");

function registrerArrangement(evt) {
    evt.preventDefault();
    const arrangementBilde = oppgave08InpImg.value;
    const arrangementNavn = oppgave08InpNavn.value;
    const arrangementDag = oppgave08InpDag.value;
    const arrangementSted = oppgave08InpSted.value;
    const arrangementGjester = oppgave08InpGjester.value;

    arrangementerliste.innerHTML += `
    <div id="arrangementer">
        <img src="${arrangementBilde}">
        <h2 id="oppgave08-navn-styling">${arrangementNavn}</h2>
        <h3 id="oppgave08-sted-styling">${arrangementDag} på ${arrangementSted}</h3>
        <h4 id="oppgave08-gjester-styling">${arrangementGjester} guests</h4>
        <p id="oppgave08-interested-going">Interested · Going</p>
    <div>
    `;


    formArrangement.reset();
}

formArrangement.addEventListener("submit", registrerArrangement);