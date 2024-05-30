document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productItem = button.closest('.product-item');
            const productId = productItem.getAttribute('data-id');
            const productName = productItem.getAttribute('data-name');
            const productPrice = productItem.getAttribute('data-price');

            const product = { id: productId, name: productName, price: productPrice };
            cart.push(product);
            updateCart();
        });
    });

    function updateCart() {
        cartCount.textContent = cart.length;
        cartItems.innerHTML = '';

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ₹${item.price}`;
            cartItems.appendChild(li);
        });
    }

    document.getElementById('checkout').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to checkout...');
            // Here you would handle the checkout process, e.g., redirect to a payment page
        } else {
            alert('Your cart is empty.');
        }
    });

    document.getElementById('track-order').addEventListener('click', () => {
        const orderId = document.getElementById('order-id').value;
        const orderStatus = document.getElementById('order-status');

        if (orderId) {
            // Simulate an order tracking check
            orderStatus.textContent = `Order ${orderId} is being processed.`;
        } else {
            orderStatus.textContent = 'Please enter a valid order ID.';
        }
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Simulate a login process
        if (email === 'user@example.com' && password === 'password') {
            alert('Login successful!');
        } else {
            alert('Invalid email or password.');
        }
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        // Simulate a registration process
        alert('Registration successful!');
    });
});
