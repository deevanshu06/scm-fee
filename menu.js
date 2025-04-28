function addToCart(event) {
    const foodCard = event.target.closest('.food-card');
    const foodTitle = foodCard.querySelector('p').textContent;
    const foodPrice = foodCard.querySelector('span').textContent;
    const foodImage = foodCard.querySelector('img').src;

    const cartItem = {
        title: foodTitle,
        price: foodPrice,
        image: foodImage
    };

    // Corrected the missing dot
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(cartItem);

    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Changed to backticks for template literals
    alert(`${foodTitle} added to cart`);   
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
});