const navOpen = document.querySelector(".navOpen");
const navClose = document.querySelector(".navClose");
const navBar = document.querySelector(".navBar ul");
let firstP = document.querySelector(".first p")
let h25 = document.querySelector(".h25"); 
let h26 = document.querySelector(".h26"); 
let h27 = document.querySelector(".h27"); 
let h28 = document.querySelector(".h28"); 
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");
let img7 = document.querySelector(".img7");
let img8 = document.querySelector(".img8");
let img9 = document.querySelector(".img9");
let thirdP = document.querySelector(".third p");
let footerP1 = document.querySelector("footer .p1");
let footerP2 = document.querySelector("footer .p2");
let footerP3 = document.querySelector("footer .p3");
let footerP4 = document.querySelector("footer .p4");
let footerP5 = document.querySelector("footer .p5");
let footerP6 = document.querySelector("footer .p6");
let homeMain = document.querySelector(".home-main");
let profPic = document.querySelector(".profPic")
// let loader = document.querySelector(".loader")
let newsCount = 0;
let newsCounts = 3;

navClose.style.display = "none";

// window.onload = function () {
//   let API_KEY = "6065a270b19a4c6c8b3bc836f66a7a67";
//   // let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}`;

//   // Define a function to fetch data
// async function fetchData(url) {
//   try {
//     // Before fetching, set loading state
//     console.log('Loading...');
    
//     const response = await fetch(url);

//     // Check if response is successful (status 200)
//     if (!response.ok) {
//       // If response is not successful, throw an error
//       throw new Error('Network response was not ok');
//     }

//     // Parse response as JSON
//     const data = await response.json();

//     // After successful fetching, log data
//     console.log('Data fetched:', data);
    
//     // Return the fetched data
//     return data;
//   } catch (error) {
//     // If any error occurs during fetching, log the error
//     console.error('Fetch error:', error.message);
    
//     // Return null or any other appropriate value to indicate error state
//     return null;
//   } finally {
//     // Finally block will always execute, regardless of success or failure
//     console.log('Fetch completed.');
//   }
// }

// // Example usage
// const apiUrl =  `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}`;

// fetchData(apiUrl)
//   .then(data => {
//     if (data !== null) {
//       // Process the fetched data
//     } else {
//       // Handle error state
//     }
//   });

//   // async function loadMovies() {
//   //   const response = await fetch(url);
//   //   const movies = await response.json();
//   //   const {status,totalResults,articles} = movies
//   //   console.log(articles);

//   //   // auth bg image
//   //  let = backgroundImages =' url(`${articles[newsCount].urlToImage}`)';
//   //  let bgImage = document.querySelector("#bImage");
//   //  bgImage.style.backgroundImage = backgroundImages;(params) 

//   // }
//   // loadMovies()
// }


import {initializeApp} from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
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
const signOutAuth = getAuth();

onAuthStateChanged(signOutAuth, (user) => {
  if (user) {
    const [f1] = user.providerData
    const {dispalyName,email,phoneNumber,photoURL,providerId,uid} = f1
    profPic.textContent = `${email[0]}`
  } else {
    
  }
});


window.addEventListener('load', function() {
    let API_KEY = "6065a270b19a4c6c8b3bc836f66a7a67";
    let API_KEY2 = "4b73ad3b736b14e112ab01b8393152a6";
    // let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}`;
    // let url2 = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    // let url3 = `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`;
    

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
    
    // Example usage
    const apiUrl = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${API_KEY2}`;
    
    fetchData(apiUrl)
    .then(data => {
      if (data !== null) {
        const {articles} = data;
           let threeArticle = articles;
           img1.src = `${threeArticle[1].image}`;
           img2.src = `${threeArticle[4].image}`;
           img3.src = `${threeArticle[3].image}`;


          let newsCountInterval  = setInterval(() => {
           if (newsCounts < articles.length) {
            
             img4.src = `${articles[newsCounts].image}`
             img4.alt = `${articles[newsCounts].content}`
             firstP.textContent = `${articles[newsCounts].title}`
             img5.src = `${articles[newsCounts].image}`
             img5.alt = `${articles[newsCounts].content}`
             h25.textContent = `${articles[newsCounts].title}`
 
 
 
             img6.src = `${articles[newsCounts].image}`
             img6.alt = `${articles[newsCounts].author}`
             h26.textContent = `${articles[newsCounts].title}`
 
 
 
             img7.src = `${articles[newsCounts].image}`
             img7.alt = `${articles[newsCounts].author}`
             h27.textContent = `${articles[newsCounts].title}`
 
             img8.src = `${articles[newsCounts].image}`
             img8.alt = `${articles[newsCounts].author}`
             h28.textContent = `${articles[newsCounts].title}`
 
             img9.src = `${articles[newsCounts].image}`;
             img9.alt = `${articles[newsCounts].author}`;
             thirdP.textContent = `${articles[newsCount].title}`;
           } else {
             clearInterval(newsCountInterval)
           }
          }, 15000);

          footerP1.textContent = `${articles[0].source.name}`
          footerP2.textContent = `${articles[2].source.name}`
          footerP3.textContent = `${articles[3].source.name}`
          footerP4.textContent = `${articles[8].source.name}`
          footerP5.textContent = `${articles[5].source.name}`
          footerP6.textContent = `${articles[6].source.name}`

      }
    })
      // .then(data => {
      //   if (data !== null) {
      //     const {status,totalResults,articles} = data
      //            // adding img slider
      //   let threeArticle = articles.slice(0,5);
      //   img1.src = `${threeArticle[0].urlToImage}`
      //   img2.src = `${threeArticle[4].urlToImage}`
      //   img3.src = `${threeArticle[3].urlToImage}`
        
      //   console.log(threeArticle[0].author);

      //   // auth bg image
          

      //  let newsCountInterval =  setInterval(() => {
      //       if (newsCount < articles.length) {
      //           newsCount += 1;
      //           img4.src = `${articles[newsCount].urlToImage}`
      //           img4.alt = `${articles[newsCount].author}`
      //           firstP.textContent = `${articles[newsCount].description}`
      //           img5.src = `${articles[newsCount].urlToImage}`
      //           img5.alt = `${articles[newsCount].author}`
      //           h25.textContent = `${articles[newsCount].title}`
      //       } else {
      //           clearInterval(newsCountInterval)
      //       }

      //   }, 10500);

      //  let newsCount1Interval = setInterval(() => {

      //        if (newsCount1 < articles.length) {
      //           newsCount1 += 1;
      //           img6.src = `${articles[newsCount1].urlToImage}`
      //           img6.alt = `${articles[newsCount1].author}`
      //           h26.textContent = `${articles[newsCount1].title}`
      //       } else {
      //         clearInterval(newsCount1Interval)
      //       }

      //   }, 10500);

      //  let newsCount2Interval = setInterval(() => {

      //       if (newsCount2 < articles.length) {
      //           newsCount2 += 1;
      //           img7.src = `${articles[newsCount2].urlToImage}`
      //           img7.alt = `${articles[newsCount2].author}`
      //           h27.textContent = `${articles[newsCount2].title}`
      //       } else {
      //         clearInterval(newsCount2Interval)
      //       }

      //   }, 10500);

      //  let newsCount3Interval = setInterval(() => {
            
      //       if (newsCount3 < articles.length) {
      //           newsCount3 += 1;
                // img8.src = `${articles[newsCount3].urlToImage}`
                // img8.alt = `${articles[newsCount3].author}`
                // h28.textContent = `${articles[newsCount3].title}`
      //       } else {
      //         clearInterval(newsCount3Interval)
      //       }

      //   }, 10500);

      //   } else {
      //     // Handle error state
      //   }
      // });
    
      // async function loadMovies() {
      //   const response = await fetch(url);
      //   const movies = await response.json();
      //   const {status,totalResults,articles} = movies
      //   console.log(articles);

        

      //   // adding img slider
      //   let threeArticle = articles.slice(0,5);
      //   img1.src = `${threeArticle[0].urlToImage}`
      //   img2.src = `${threeArticle[4].urlToImage}`
      //   img3.src = `${threeArticle[3].urlToImage}`
        
      //   console.log(threeArticle[0].author);

      //   // auth bg image
      //      let = backgroundImages = `${articles[newsCount].urlToImage}`;
      //      let bgImage = document.querySelector("#bImage");
      //      bgImage.style.backgroundImage = backgroundImages;

      //  let newsCountInterval =  setInterval(() => {
      //       if (newsCount <= articles.length) {
      //           newsCount += 1;
      //           img4.src = `${articles[newsCount].urlToImage}`
      //           img4.alt = `${articles[newsCount].author}`
      //           firstP.textContent = `${articles[newsCount].description}`
      //           img5.src = `${articles[newsCount].urlToImage}`
      //           img5.alt = `${articles[newsCount].author}`
      //           h25.textContent = `${articles[newsCount].title}`
      //       } else {
      //           clearInterval(newsCountInterval)
      //       }

      //   }, 10500);

      //  let newsCount1Interval = setInterval(() => {

      //        if (newsCount1 <= articles.length) {
      //           newsCount1 += 1;
      //           img6.src = `${articles[newsCount1].urlToImage}`
      //           img6.alt = `${articles[newsCount1].author}`
      //           h26.textContent = `${articles[newsCount1].title}`
      //       } else {
      //         clearInterval(newsCount1Interval)
      //       }

      //   }, 10500);

      //  let newsCount2Interval = setInterval(() => {

      //       if (newsCount2 <= articles.length) {
      //           newsCount2 += 1;
      //           img7.src = `${articles[newsCount2].urlToImage}`
      //           img7.alt = `${articles[newsCount2].author}`
      //           h27.textContent = `${articles[newsCount2].title}`
      //       } else {
      //         clearInterval(newsCount2Interval)
      //       }

      //   }, 10500);

      //  let newsCount3Interval = setInterval(() => {
            
      //       if (newsCount3 <= articles.length) {
      //           newsCount3 += 1;
      //           img8.src = `${articles[newsCount3].urlToImage}`
      //           img8.alt = `${articles[newsCount3].author}`
      //           h28.textContent = `${articles[newsCount3].title}`
      //       } else {
      //         clearInterval(newsCount3Interval)
      //       }

      //   }, 10500);
      //       console.log(newsCount);

      // }

      // loadMovies()


      // async function fetchData2(url) {
      //   try {
      //     // Before fetching, set loading state
      //     console.log('Loading...');
          
      //     const response = await fetch(url);
      
      //     // Check if response is successful (status 200)
      //     if (!response.ok) {
      //       // If response is not successful, throw an error
      //       throw new Error('Network response was not ok');
      //     }
      
      //     // Parse response as JSON
      //     const data = await response.json();
      
      //     // After successful fetching, log data
      //     console.log('Data fetched:', data);
          
      //     // Return the fetched data
      //     return data;
      //   } catch (error) {
      //     // If any error occurs during fetching, log the error
      //     console.error('Fetch error:', error.message);
          
      //     // Return null or any other appropriate value to indicate error state
      //     return null;
      //   } finally {
      //     // Finally block will always execute, regardless of success or failure
      //     console.log('Fetch completed.');
      //   }
      // }
      
      // // Example usage
      // const apiUrl2 =  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
      
      // fetchData2(apiUrl2)
      //   .then(data => {
      //     if (data !== null) {
      //       const {status,totalResults,articles} = data
      //       setInterval(() => {
      //         newsCount += 1;
      //       //  let = backgroundImages = `${articles[newsCount].urlToImage}`;
      //       //  bgImage.style.backgroundImage = backgroundImages;
      //         img9.src = `${articles[newsCount].urlToImage}`;
      //         img9.alt = `${articles[newsCount].title}`;
      //         thirdP.textContent = `${articles[newsCount].description}`;
      //     },  10000);
      //     } else {
      //       // Handle error state
      //     }
      //   });

        async function fetchData3(url) {
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
            homeMain.style.display = "block"
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

        const apiUrl3 =  `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`;

        fetchData3(apiUrl3)
        .then(data => {
          if (data !== null) {
            const {status,sources} = data;
            footerP1.textContent = `${sources[0].name}`
            footerP2.textContent = `${sources[1].name}`
            footerP3.textContent = `${sources[2].name}`
            footerP4.textContent = `${sources[3].name}`
            footerP5.textContent = `${sources[6].name}`
            footerP6.textContent = `${sources[7].name}`

          } else {

          }
        });
});

// swiper function
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });





const openNav = () => {
    navBar.style.display = "block"
    navOpen.style.display = "none"
    navClose.style.display = "block";
}

const closeNav = () => {
    navBar.style.display = "none"
    navOpen.style.display = "block"
    navClose.style.display = "none";
}

navOpen.addEventListener("click",openNav);
navClose.addEventListener("click",closeNav);
navBar.addEventListener("click",function () {
    navBar.style.display = "none"
    // 6065a270b19a4c6c8b3bc836f66a7a67
})

