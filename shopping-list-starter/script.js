// Write a loop to add items to the list
let shoppingListItems = ["milk", "eggs", "bread"];
// Assign the element 'list' to a variable called 'listElement'
let listElement = document.getElementById("shopping-list-items");

shoppingListItems.forEach((item) => {
    console.log(item);
    let itemElement = document.createElement("li");
    itemElement.innerText = item;
    listElement.appendChild(itemElement);
});

// After adding 'onclick' feat to Submit button in HTML, write function to add items when clicking
function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    console.log(shoppingListItems);
    updateItems()
}

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingListItems.forEach((item) => {
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    });
}

function clearList() {
    shoppingListItems = [];
    // alternatively:
    //shoppingListItems.length = 0; - instead of line 35
    updateItems();
}



