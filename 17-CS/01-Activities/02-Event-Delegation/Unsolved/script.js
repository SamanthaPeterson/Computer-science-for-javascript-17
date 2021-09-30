const listEl = document.querySelector('#grocery-list');
const shoppingCartEl = document.querySelector('#shopping-cart');
const fruits = ['Bananas', 'Apples', 'Oranges', 'Grapes', 'Blueberries'];

// Create an event listener on the common parent element of the groceries
// YOUR CODE HERE
//

listEl.addEventListener('click',(evt) => {
    evt.preventDefault()
    console.log(evt.path[1].innerText.split(" ")[0])
var div = document.createElement('div');
div.innerText = evt.path[0].innerText.split(" Add to Cart")

shoppingCartEl.appendChild(div)
})

