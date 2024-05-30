window.addEventListener("load", (evt) => {
    let products = document.getElementsByClassName("sub-image");
    Array.from(products).forEach(x => {
      x.addEventListener("click", (x) => {
        console.log(x.target);
        mainImage = document.getElementById("main-image");
        mainImage.setAttribute("src", x.target.getAttribute("src"));
        mainImage.setAttribute("title", x.target.getAttribute("title"));
        let myH2 = document.querySelector("#product-info > h2");
        myH2.innerText = x.target.getAttribute("title");
      }, false);
    });

    document.getElementById("keyword").addEventListener("change", event => {
      console.log(event.target.value);
      let btnSearch = document.getElementById("btn-search");
      btnSearch.innerText = `검색: ${event.target.value}`;
    });

  });



function testAttributes() {
    let mainImage = document.getElementById("main-image");
    console.log(mainImage);
    console.log(mainImage.getAttributeNames());
    console.log(mainImage.getAttribute("title"));
    console.log(mainImage.getAttribute("class"));

    console.log(mainImage.setAttribute("title", "Coolest Phone"));
    console.log(mainImage.getAttribute("title"));

    let subs = document.getElementsByClassName("sub-image");
    console.log(subs);
    for (let i = 0; i < subs.length; i++) {
      subs[i].setAttribute("title", `제품: ${subs[i].getAttribute("title")}`);
    }
  }
  // testAttributes();

  function testMainImgClick() {
    const mainImage = document.getElementById("main-image");
    mainImage.addEventListener("click", (x) => {
      alert("hi");
      console.log(x);
      console.log(x.type);
      console.log(x.target);
    }, false);
  }
  // testMainImgClick();



