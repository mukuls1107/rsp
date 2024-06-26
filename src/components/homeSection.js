const txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quasi sapiente, asperiores fugit reprehenderit placeat nobis tenetur voluptate similique omnis at repellat, nemo aperiam vero magni possimus? Porro nemo vitae quae est!";

function displayHome() {
    const container = document.createElement("div");
    container.classList.add("container");

    const home = document.createElement("div");
    home.classList.add("main-content");

    // Left and Right div
    const leftDiv = document.createElement("div");
    const rightDiv = document.createElement("div");

    // Adding classes to the left and right div
    leftDiv.classList.add("content");
    rightDiv.classList.add("cnt-img");

    // Adding the text content in the left div.
    const textContent = document.createElement("h1");
    const txtCnt2 = document.createElement("h2");
    const txtPara = document.createElement("p");

    textContent.innerText = "Authentic";
    txtCnt2.innerText = "Indian Cuisine";
    txtPara.innerText = txt;

    leftDiv.append(textContent, txtCnt2, txtPara);

    // Adding the divs into main content
    home.append(leftDiv, rightDiv);
    container.appendChild(home);

    return container;
}

export default displayHome;
