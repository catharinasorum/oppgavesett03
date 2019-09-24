const inpSkriftfarge = document.querySelector("#inpSkriftfarge");
const inpBakgrunnsfarge = document.querySelector("#inpBakgrunnsfarge");
const inpSkriftstørrelse = document.querySelector("#inpSkriftstørrelse");

function endreUtseende() {
    document.body.style.color = inpSkriftfarge.value;
    document.body.style.backgroundColor = inpBakgrunnsfarge.value;
    document.body.style.fontSize = inpSkriftstørrelse.value + "px";
}

inpSkriftfarge.addEventListener("input", endreUtseende);
inpBakgrunnsfarge.addEventListener("input", endreUtseende);
inpSkriftstørrelse.addEventListener("input", endreUtseende);