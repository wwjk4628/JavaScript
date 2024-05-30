const subImage = Array.from(document.getElementsByClassName("sub-image"));
const mainImage = document.getElementById("main-image");

// let image = "";

function onclick(event){
    console.dir(event.target.src);
    const image = event.target.src;
    mainImage.setAttribute("src", image);
    
}

subImage.forEach(subImage => subImage.addEventListener("click", onclick));