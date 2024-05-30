
window.addEventListener("load", event => {
    // ul#list로 부터 자식 li 모두 삭제
    let cartItems = document.querySelectorAll("#list > li");
    console.log(cartItems);



    // let parent = document.getElementById("list");
    // console.log(parent);
    // console.log(parent.hasChildNodes());
    // console.log(parent.children);

    for (let i = 0; i < cartItems.length; i++) {
        let parent = cartItems[i].parentNode;
        console.log(parent);

        parent.removeChild(cartItems[i]);
    }

    document.getElementById("btn-add").addEventListener("click", addItem);




});
function addItem() {
    const itemInput = document.getElementById("item");
    const item = itemInput.value.trim();

    if (item.length > 0) {
        console.log(item);

        let itemNode = document.createElement("li");
        itemNode.innerText = item;
        let toolbar = document.createElement("div");
        toolbar.style.display = "inline";
        toolbar.style.float = "right";
        let btnDel = document.createElement("button");
        btnDel.innerText = "삭제";

        toolbar.append(btnDel);
        itemNode.append(toolbar);

        let container = document.getElementById("list");
        container.appendChild(itemNode);

        itemInput.value = "";
        itemInput.focus();

        btnDel.addEventListener("click", event => {
            console.log(event.target.parentNode.parentNode);
            let removeItem = event.target.parentNode.parentNode;
            container.removeChild(removeItem);

        });
    }
}



