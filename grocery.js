const message = document.querySelector("#message");
const themeBtn = document.querySelectorAll('.theme');

const addGroceryList = (evt) => {
    evt.preventDefault();
    
    let inputField = document.querySelector("input");
    let grocery = document.createElement("li");
    let groceryList = document.createElement("span");
    let newUL = document.querySelector("ul");

    groceryList.textContent = inputField.value;

    groceryList.addEventListener('click', crossOff);

    grocery.appendChild(groceryList);
    newUL.appendChild(grocery);
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteGrocery);

    grocery.appendChild(deleteBtn);

    inputField.value = "";
}

document.querySelector("form").addEventListener('submit', addGroceryList);

const deleteGrocery = (evt) => {
    evt.target.parentNode.remove();
};

const crossOff = (evt) => {
    evt.target.classList.toggle('checked');

    if(evt.target.classList.contains("checked")) {
        message.textContent = "GOT IT!";
    }
};

const selectTheme = (evt) => {
    const theme = evt.target.textContent;
    const allBtns = document.querySelectorAll('button');

    document.querySelector('body').className = theme;
    document.querySelector('main').className = theme;

    for (let i = 0; i < allBtns.length; i++) {
        allBtns[i].className = theme;
    }
}

for (let i = 0; i < themeBtn.length; i++) {
     themeBtn[i].addEventListener('click', selectTheme)
}