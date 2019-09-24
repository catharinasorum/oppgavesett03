const inpRett = prompt("Hva er din første favorittrett?");
const inpRett2 = prompt("Hva er din andre favorittrett?");
const inpRett3 = prompt("Hva er din tredje favorittrett?");

const favorittRetter = document.querySelector("#favorittRetter");

function registrerRett(rett, rett2, rett3) {
    
    favorittRetter.innerHTML += `
        <li>Fiskeboller</li>
        <li>${rett}</li>
        <li>${rett2}</li>
        <li>${rett3}</li>
    `;
}

registrerRett(inpRett, inpRett2, inpRett3);
