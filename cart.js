const cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartContainer = document.getElementById('cart');
const totalContainer = document.getElementById('total');

if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty!</p>";
    totalContainer.textContent = ""; 
} else {
    let totalAmount = 0; 

    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        const foodImage = document.createElement('img');
        foodImage.src = item.image;
        cartItemDiv.appendChild(foodImage);

        const foodTitle = document.createElement('p');
        foodTitle.textContent = item.title;
        cartItemDiv.appendChild(foodTitle);

        const foodPrice = document.createElement('span');
        foodPrice.textContent = item.price;
        cartItemDiv.appendChild(foodPrice);

        // Parsing the price to a float
        const priceValue = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
        totalAmount += priceValue; 

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
    
        deleteBtn.addEventListener('click', () => {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            location.reload(); 
        });

        cartItemDiv.appendChild(deleteBtn);
        cartContainer.appendChild(cartItemDiv);
    });

    // Corrected string interpolation for total amount
    totalContainer.textContent = `Total Amount: ${totalAmount} RS`;
}