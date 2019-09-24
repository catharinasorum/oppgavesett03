const formNyhetsartikkel = document.querySelector("#formNyhetsartikkel");
const inpOverskrift = document.querySelector("#inpOverskrift");
const inpImg = document.querySelector("#inpImg");
const nyheter = document.querySelector("#nyheter");

function registrerNyhet(evt) {
    evt.preventDefault();
    
    const nyhetsbilde = inpImg.value;
    // nyhetsbilde.src = inpImg.value;
    const nyhetsoverskrift = inpOverskrift.value;
    nyheter.innerHTML += `
        <img src="${nyhetsbilde}">
        <h2>${nyhetsoverskrift}</h2>
    `;

    formNyhetsartikkel.reset();
}



formNyhetsartikkel.addEventListener("submit", registrerNyhet); 
