/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let authLi1 = document.querySelector(\".li1\");\r\nlet authMain = document.querySelector(\".auth-main\");\r\nlet loader = document.querySelector(\".loader\");\r\nlet signUpBtn = document.querySelector(\".signUpBtn\");\r\nlet loginBtn = document.querySelector(\".loginBtn\");\r\nlet signUpImg = document.querySelector(\".signUpImg\")\r\nlet newsCount = 5;\r\n\r\n\r\n\r\nwindow.addEventListener(\"load\", function () {\r\n    let API_KEY = \"6065a270b19a4c6c8b3bc836f66a7a67\";\r\n    async function fetchData(url) {\r\n        try {\r\n          // Before fetching, set loading state\r\n          console.log('Loading...');\r\n          \r\n          const response = await fetch(url);\r\n      \r\n          // Check if response is successful (status 200)\r\n          if (!response.ok) {\r\n            // If response is not successful, throw an error\r\n            throw new Error('Network response was not ok');\r\n          }\r\n      \r\n          // Parse response as JSON\r\n          const data = await response.json();\r\n      \r\n          // After successful fetching, log data\r\n          console.log('Data fetched:', data);\r\n          // Return the fetched data\r\n          return data;\r\n        } catch (error) {\r\n          // If any error occurs during fetching, log the error\r\n          console.error('Fetch error:', error.message);\r\n          \r\n          // Return null or any other appropriate value to indicate error state\r\n          return null;\r\n        } finally {\r\n          // Finally block will always execute, regardless of success or failure\r\n          console.log('Fetch completed.');\r\n        }\r\n      }\r\n\r\n      const apiUrl3 =  `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`;\r\n\r\n      fetchData(apiUrl3)\r\n      .then(data => {\r\n        if (data !== null) {\r\n          const {status,sources} = data;\r\n          console.log(sources)\r\n          authLi1.textContent = `${sources[0].name}`\r\n\r\n        } else {\r\n\r\n        }\r\n      });\r\n\r\n      \r\n});\r\n\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n  let API_KEY = \"6065a270b19a4c6c8b3bc836f66a7a67\";\r\n\r\n  async function fetchData(url) {\r\n    try {\r\n      // Before fetching, set loading state\r\n      console.log('Loading...');\r\n      \r\n      const response = await fetch(url);\r\n  \r\n      // Check if response is successful (status 200)\r\n      if (!response.ok) {\r\n        // If response is not successful, throw an error\r\n        throw new Error('Network response was not ok');\r\n      }\r\n  \r\n      // Parse response as JSON\r\n      const data = await response.json();\r\n      \r\n      // After successful fetching, log data\r\n      console.log('Data fetched:', data);\r\n      // Return the fetched data\r\n      return data;\r\n    } catch (error) {\r\n      // If any error occurs during fetching, log the error\r\n      console.error('Fetch error:', error.message);\r\n      \r\n      // Return null or any other appropriate value to indicate error state\r\n      return null;\r\n    } finally {\r\n      // Finally block will always execute, regardless of success or failure\r\n      console.log('Fetch completed.');\r\n    }\r\n  }\r\n\r\n  const apiUrl = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}`;\r\n\r\n  fetchData(apiUrl)\r\n      .then(data => {\r\n        if (data !== null) {\r\n          const {status,totalResults,articles} = data\r\n               \r\n       let newsCountInterval =  setInterval(() => {\r\n            if (newsCount < articles.length) {\r\n                newsCount += 1;\r\n                signUpImg.src = `${articles[newsCount].urlToImage}`;\r\n                signUpImg.alt = `${articles[newsCount].title}`;\r\n            } else {\r\n                clearInterval(newsCountInterval)\r\n            }\r\n\r\n        }, 8000);\r\n\r\n        } else {\r\n          // Handle error state\r\n        }\r\n      });\r\n})\n\n//# sourceURL=webpack://test-for-js/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;