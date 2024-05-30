const keywordInput = document.getElementById("keyword");
const btnSearch = document.getElementById("btn-search");
const subImage = Array.from(document.getElementsByClassName("sub-image"));
const mainImage = document.getElementById("main-image");


let message = "";



function onchange(event) {
    message = event.target.value;
    console.dir(event.target.value);
    btnSearch.innerText = message + "검색";
}

function onclick() {
    btnSearch.innerText = message + "검색";
}
function onclickImage(event) {
    console.dir(event.target.src);
    const image = event.target.src;
    mainImage.setAttribute("src", image);
    mainImage.getAttribute(`title`)
    mainImage.setAttribute("title", `${event.target.title}`)
    let myH2 = document.querySelector("#product-info > h2");
    myH2.innerText = event.target.getAttribute("title");

}

function mainOnclick(x) {
    alert("hi");
    console.log(x);
    console.log(x.type);
    console.log(x.target);


}

// function onload(){
//     mainImage.setAttribute("title", `제품: ${mainImage.getAttribute(`title`)}`);
// }

// function onloadsub(){
//     subImage.setAttribute("title", `제품: ${subImage.getAttribute(`title`)}`);

// }

keywordInput.addEventListener("change", onchange);
btnSearch.addEventListener("click", onclick);
subImage.forEach(subImage => subImage.addEventListener("click", onclickImage));
mainImage.addEventListener("click", mainOnclick);
// mainImage.addEventListener("load", onload);
// subImage.forEach(subImage => subImage.addEventListener("load", onloadsub));