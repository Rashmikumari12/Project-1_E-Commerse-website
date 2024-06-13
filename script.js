const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})

window.onload = function () {
    const firebaseConfig = {
      apiKey: "AIzaSyBQdK0d0EAKjXFTEUvqFeQJeKLQYeAYzYI",
      authDomain: "e-tech-68f64.firebaseapp.com",
      projectId: "e-tech-68f64",
      storageBucket: "e-tech-68f64.appspot.com",
      messagingSenderId: "27323460686",
      appId: "1:27323460686:web:b9ce724c29786e01a9271f",
    };
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    // Function to handle Google Sign-In
    window.googleSignIn = function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    };
  
    window.signOut = function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful, refresh the page
          location.reload();
        })
        .catch((error) => {
          // An error happened
          console.error(error);
        });
    };
  
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        document.getElementById("signInButton").style.display = "none";
  
        // this line will diplay the username and direct to the page you want just edit the userDetail thing
        document.getElementById("userDetails"). textContent = user.email;
      } else {
        // User is signed out
        document.getElementById("signInButton").style.display = "block";
        document.getElementById("userDetails").textContent = "";
      }
    });
  
    firebase
      .auth()
      .getRedirectResult()
      .then((result) => {
        if (result.credential) {
          // This gives you a Google Access Token.
          var token = result.credential.accessToken;
        }
        var user = result.user;
      })
      .catch((error) => {
        // Handle errors
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorMessage);
      });
  };
  
  
     function myMenuFunction() {
      var i = document.getElementById("navMenu");
  
      if(i.className === "nav-menu") {
          i.className += " responsive";
      } else {
          i.className = "nav-menu";
      }
     }
  
      var a = document.getElementById("loginBtn");
      var b = document.getElementById("registerBtn");
      var x = document.getElementById("login");
      var y = document.getElementById("register");
  
      function login() {
          x.style.left = "4px";
          y.style.right = "-520px";
          a.className += " white-btn";
          b.className = "btn";
          x.style.opacity = 1;
          y.style.opacity = 0;
      }
  
      function register() {
          x.style.left = "-510px";
          y.style.right = "5px";
          a.className = "btn";
          b.className += " white-btn";
          x.style.opacity = 0;
          y.style.opacity = 1;
      }
  
  // before login page

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

//     document.getElementById('login-form').addEventListener('submit', (e) => {
//         e.preventDefault();
//         const email = document.getElementById('login-email').value;
//         const password = document.getElementById('login-password').value;

//         // Simulate a login process
//         if (email === 'user@example.com' && password === 'password') {
//             alert('Login successful!');
//         } else {
//             alert('Invalid email or password.');
//         }
//     });

//     document.getElementById('register-form').addEventListener('submit', (e) => {
//         e.preventDefault();
//         const name = document.getElementById('register-name').value;
//         const email = document.getElementById('register-email').value;
//         const password = document.getElementById('register-password').value;

//         // Simulate a registration process
//         alert('Registration successful!');
//     });

//
const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
menu.style.visibility = "visible";
});

});
