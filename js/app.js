// Cambia il titolo
const h1Element = document.querySelector("h1");
const apriprom = document.querySelector(".apripro");
apriprom.addEventListener("click", () => {
    let rename = prompt ("Rinomina il tuo titolo");
    h1Element.textContent = rename    
});




// Creazione di <li> allinterno di <ul>
const inputAdd = document.querySelector(".testo")
const lista = document.querySelector("ul");
const addElement = document.querySelector(".addBtn");

const addList = () => {
    const liAdd = document.createElement ('li');
    lista.appendChild(liAdd);
    liAdd.textContent = inputAdd.value;
};

addElement.addEventListener("click", () => {
    addList()
});