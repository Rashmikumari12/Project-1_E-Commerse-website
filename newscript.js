document.addEventListener('DOMContentLoaded', () => {
    const cart = {};
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    const updateCartDisplay = () => {
        cartItemsElement.innerHTML = '';
        let total = 0;

        for (const productId in cart) {
            const { name, price, quantity } = cart[productId];
            const itemElement = document.createElement('li');
            itemElement.textContent = `${name} - ₹${price} x ${quantity}`;
            cartItemsElement.appendChild(itemElement);
            total += price * quantity;
        }

        cartTotalElement.textContent = total;

        // Save the total amount in localStorage
        localStorage.setItem('totalAmount', total);
    };

    const buttons = document.querySelectorAll('.product-item button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-item');
            const productId = productCard.getAttribute('data-id');
            const productName = productCard.getAttribute('data-name');
            const productPrice = parseFloat(productCard.getAttribute('data-price'));

            if (cart[productId]) {
                cart[productId].quantity += 1;
            } else {
                cart[productId] = {
                    name: productName,
                    price: productPrice,
                    quantity: 1
                };
            }

            updateCartDisplay();
        });
    });

    // Add event listener for the "Proceed to checkout" button
    const checkoutButton = document.querySelector('.payment_div a.payment_stripe');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            const totalAmount = cartTotalElement.textContent;
            localStorage.setItem('totalAmount', totalAmount);
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const trackOrderButton = document.getElementById('track-order');
    const orderStatus = document.getElementById('order-status');

    trackOrderButton.addEventListener('click', function () {
        const orderId = document.getElementById('order-id').value;
        if (!orderId) {
            orderStatus.textContent = 'Please enter a valid order ID.';
            return;
        }

        // Simulate tracking order process
        orderStatus.textContent = 'Tracking your order...';

        setTimeout(function () {
            // Randomly decide if the order is found or not
            const orderFound = Math.random() > 0.5;

            if (orderFound) {
                orderStatus.textContent = `Order ${orderId} is currently in transit and will be delivered soon.`;
            } else {
                orderStatus.textContent = `Order ${orderId} not found. Please check the order ID and try again.`;
            }
        }, 2000); // Simulate a delay for tracking
    });
});
