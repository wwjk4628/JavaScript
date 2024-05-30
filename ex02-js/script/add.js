const cartInput = document.getElementById("cart-input");
const cartList = document.getElementById("cart-list");
const list = document.getElementById("list");
let listAdd = "";

function onchange(event){
    console.log(event.target.value);
    list.document.write("<h1>Welcome, </h1>");
}

cartInput.addEventListener("change", onchange);
