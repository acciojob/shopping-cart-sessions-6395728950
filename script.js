// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartlist = document.getElementById('cart-list');

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" value="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
// Add item to cart
function addToCart(productId) {
    let obj = [{"name": `Product ${productId}`}, {"price": `$${productId * 10}`}];
    sessionStorage.setItem(`${productId}`, JSON.stringify(obj));
}

// Render cart list
function renderCart() {
    const sessionData = {};
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        sessionData[key] = JSON.parse(sessionStorage.getItem(key));
    }
    
    Object.values(sessionData).forEach((data, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${data[0].name} - ${data[1].price} <button class="btn" value="${index}">Remove Item</button>`;
        cartlist.appendChild(li);
    });
}

// Remove item from cart
function removeFromCart(productId) {
    sessionStorage.removeItem(productId);
    
}

// Initial render
renderProducts();
renderCart();
function clearCart(){
	sessionStorage.clear();
}

document.getElementById('clear-cart-btn').addEventListener("click", () => {
    clearCart();
});

const addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
Array.from(addToCartButtons).forEach(button => {
    button.addEventListener("click", (e) => {
        addToCart(e.target.value);
    });
});
 const removeFromCartButtons = document.getElementsByClassName('btn');
Array.from(removeFromCartButtons).forEach(button => {
    button.addEventListener("click", (e) => {
        removeFromCart(e.target.value);
    });
});

