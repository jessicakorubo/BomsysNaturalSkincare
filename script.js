const popup = document.querySelector('.popup');
const closepopup = document.getElementById('close-popup');

window.onload = function() {
    const productList = document.getElementById('product-list');
    
    // productList.appendChild('How are you?');

// Fetch the product data
fetch('products.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Response was not okay!");
        }
        return response.json(); })
    .then(products => {
        products.forEach(product => {
            // Create a product item
            let productItem = document.createElement('div');
            productItem.classList.add('product');
            productItem.innerHTML = `
                <img class="product-image" src= "images/products/${product.image}" alt="${product.name}">
                <div class="absolute-prod-desc">
                 <p>Click to view</p>
                <div>
            `;

            // Add click event to load product details
            productItem.addEventListener('click', ()=> {
                popup.classList.add('open');
                loadProductDetails(product);
            });

            // Append the product item to the product list
            productList.appendChild(productItem);
         
        });
    });

}

function loadProductDetails (product) {

    const productDetails = document.getElementById('product-details');
    // Insert the products to the existing div

    productDetails.innerHTML = 
    `
        <div class="product-headings">
        <img src="images/products/${product.image}" alt="${product.name}">
        
        </div>
        
        <div class="product-desc"> 
            <h3 id='prod-head'>${product.name} </h3>
            <h4 id="ingredients">INGREDIENTS</h4>
            <p>${product.ingredients}</p>
            <h4 id="key-benefits">KEY BENEFITS</h4>
            <p>${product.key_benefits}</p>
            <div class="close-popup">
                <button id="close-popup" onclick="close_popup()">Close</button>
            </div>
        </div>
        
    `
}

function close_popup() {
    popup.classList.remove('open');
}