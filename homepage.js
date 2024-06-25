import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {

     apiKey: "AIzaSyBQdK0d0EAKjXFTEUvqFeQJeKLQYeAYzYI",
    authDomain: "e-tech-68f64.firebaseapp.com",
    databaseURL: "https://e-tech-68f64-default-rtdb.firebaseio.com",
    projectId: "e-tech-68f64",
    storageBucket: "e-tech-68f64.appspot.com",
    messagingSenderId: "27323460686",
    appId: "1:27323460686:web:b9ce724c29786e01a9271f"
    //YOUR COPIED FIREBASE PART SHOULD BE HERE
 //WATCH THIS VIDEO TO LEARN WHAT TO PUT HERE   https://youtu.be/_Xczf06n6x0
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                // document.getElementById("userDetails"). textContent = user.email;
                document.getElementById('loggedUser').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;

            }
            
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in



      document.getElementById("signInButton").style.display = "none";  
      document.getElementById("loggedUser"). textContent = user.email;     
      window.location.href='index.html';
        
      // this line will diplay the username and direct to the page you want just edit the userDetail thing
     
    } else {
      // User is signed out


      document.getElementById("signInButton").style.display = "block";
      document.getElementById("userDetails").textContent = "";
    }
  });

  
  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     // User is signed in
  //     document.getElementById("signInButton").style.display = "none";       
  //     window.location.href='homepage.html';
        
  //     // this line will diplay the username and direct to the page you want just edit the userDetail thing
  //     document.getElementById("userDetails"). textContent = user.email;
  //     document.getElementById("loggedUserFName"). textContent = user.email;
  //   } else {
  //     // User is signed out
  //     document.getElementById("signInButton").style.display = "block";
  //     document.getElementById("userDetails").textContent = "";
  //   }
  // });