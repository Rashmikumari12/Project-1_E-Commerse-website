// window.onload = function () {
//     const firebaseConfig = {
//       apiKey: "AIzaSyBQdK0d0EAKjXFTEUvqFeQJeKLQYeAYzYI",
//       authDomain: "e-tech-68f64.firebaseapp.com",
//       projectId: "e-tech-68f64",
//       storageBucket: "e-tech-68f64.appspot.com",
//       messagingSenderId: "27323460686",
//       appId: "1:27323460686:web:b9ce724c29786e01a9271f",
//     };
//     // Initialize Firebase
//     const app = firebase.initializeApp(firebaseConfig);
//     // Function to handle Google Sign-In
//     window.googleSignIn = function () {
//       var provider = new firebase.auth.GoogleAuthProvider();
//       firebase.auth().signInWithRedirect(provider);
//     };
  
//     window.signOut = function () {
//       firebase
//         .auth()
//         .signOut()
//         .then(() => {
//           // Sign-out successful, refresh the page
//           location.reload();
//         })
//         .catch((error) => {
//           // An error happened
//           console.error(error);
//         });
//     };
  
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         // User is signed in
//         document.getElementById("signInButton").style.display = "none";       
//         window.location.href='homepage.html';
          
//         // this line will diplay the username and direct to the page you want just edit the userDetail thing
//         document.getElementById("userDetails"). textContent = user.email;
//         document.getElementById("loggedUserFName"). textContent = user.email;
//       } else {
//         // User is signed out
//         document.getElementById("signInButton").style.display = "block";
//         document.getElementById("userDetails").textContent = "";
//       }
//     });
  
//     firebase
//       .auth()
//       .getRedirectResult()
//       .then((result) => {
//         if (result.credential) {
//           // This gives you a Google Access Token.
//           var token = result.credential.accessToken;
//         }
//         var user = result.user;
//       })
//       .catch((error) => {
//         // Handle errors
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.error(errorMessage);
//       });
//   };
  
  
//      function myMenuFunction() {
//       var i = document.getElementById("navMenu");
  
//       if(i.className === "nav-menu") {
//           i.className += " responsive";
//       } else {
//           i.className = "nav-menu";
//       }
//      }
  
//       var a = document.getElementById("loginBtn");
//       var b = document.getElementById("registerBtn");
//       var x = document.getElementById("login");
//       var y = document.getElementById("register");
  
//       function login() {
//           x.style.left = "4px";
//           y.style.right = "-520px";
//           a.className += " white-btn";
//           b.className = "btn";
//           x.style.opacity = 1;
//           y.style.opacity = 0;
//       }
  
//       function register() {
//           x.style.left = "-510px";
//           y.style.right = "5px";
//           a.className = "btn";
//           b.className += " white-btn";
//           x.style.opacity = 0;
//           y.style.opacity = 1;
//       }
  


// down is the previous edit 
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