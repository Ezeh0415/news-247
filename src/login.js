const loginForm = document.querySelector(".loginForm");
let errorPopUp = document.querySelector(".errorPopUp");
let errorMessage = document.querySelector(".errorMessage");
let signUpImg = document.querySelector(".signUpImg")
let newsCount = 0;
import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDJvn_GqogsJU3XE1SXlBgFVbi4bEPUd0w",
  authDomain: "fir-9-dojo-4da5d.firebaseapp.com",
  projectId: "fir-9-dojo-4da5d",
  storageBucket: "fir-9-dojo-4da5d.appspot.com",
  messagingSenderId: "250392842527",
  appId: "1:250392842527:web:ac688b160693fce282e02a"
};

// initialized firebase
initializeApp(firebaseConfig);

// adding auth
const auth = getAuth();




loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = loginForm.email.value
    const password = loginForm.password.value
    signInWithEmailAndPassword(auth,email,password)
    .then((cred) => {
      console.log(cred.user)
      window.location.href = "home.html"
    })
    .catch((err) => {
        errorPopUp.style.left = "50%"
       errorMessage.textContent = `${err.message}`
       setTimeout(() => {
        errorPopUp.style.left = "180%"
       },2000)
    })
})


window.addEventListener("load", () => {
  let API_KEY = "6065a270b19a4c6c8b3bc836f66a7a67";

  async function fetchData(url) {
    try {
      // Before fetching, set loading state
      console.log('Loading...');
      
      const response = await fetch(url);
  
      // Check if response is successful (status 200)
      if (!response.ok) {
        // If response is not successful, throw an error
        throw new Error('Network response was not ok');
      }
  
      // Parse response as JSON
      const data = await response.json();
      
      // After successful fetching, log data
      console.log('Data fetched:', data);
      // Return the fetched data
      return data;
    } catch (error) {
      // If any error occurs during fetching, log the error
      console.error('Fetch error:', error.message);
      
      // Return null or any other appropriate value to indicate error state
      return null;
    } finally {
      // Finally block will always execute, regardless of success or failure
      console.log('Fetch completed.');
    }
  }

  const apiUrl = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}`;

  fetchData(apiUrl)
      .then(data => {
        if (data !== null) {
          const {status,totalResults,articles} = data
               
       let newsCountInterval =  setInterval(() => {
            if (newsCount < articles.length) {
                newsCount += 1;
                signUpImg.src = `${articles[newsCount].urlToImage}`;
                signUpImg.alt = `${articles[newsCount].title}`;
            } else {
                clearInterval(newsCountInterval)
            }

        }, 5000);

        } else {
          // Handle error state
        }
      });
})