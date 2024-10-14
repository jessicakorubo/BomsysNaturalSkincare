function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to loas product details based on the product ID
function loadProductDetails() {

   
      
    

    const productId = getQueryParam('id'); //get the product ID from the URL

    fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const product = products.find(p => p.id == productId);

        if (product) {
            // populate the product details section
            const productDetails = document.getElementById('product-details');
            productDetails.innerHTML = `
            
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}">
                <p>${product.descrciption}</p>
            `;
        }
        else {
            // handle the case where the product id is not found
            document.getElementById('product-details').innerHTML = '<p>Product not found </p>'
        }
    })
    .catch(error => {
        console.error("Error fetching product details: ", error)
    })
}

// Load product details when the page is loaded
window.onload = loadProductDetails;