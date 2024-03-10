import {initializeApp} from "firebase/app";
import {
    collection,
    onSnapshot,
    getDocs,
    getFirestore,
    // addin gfunction
    addDoc
} from 'firebase/firestore'
let out = document.querySelector(".outPut-section ");
let loader = document.querySelector(".loader");
let error = document.querySelector(".error");
let taskForm = document.querySelector(".TaskForm");

const firebaseConfig = {
    apiKey: "AIzaSyDJvn_GqogsJU3XE1SXlBgFVbi4bEPUd0w",
    authDomain: "fir-9-dojo-4da5d.firebaseapp.com",
    projectId: "fir-9-dojo-4da5d",
    storageBucket: "fir-9-dojo-4da5d.appspot.com",
    messagingSenderId: "250392842527",
    appId: "1:250392842527:web:ac688b160693fce282e02a"
  };
//   init firebase app
  initializeApp(firebaseConfig)

//   init service
const db = getFirestore()

// collection ref
const colRef = collection(db, "books")

// real time get collection data
// let task = getDocs(colRef)
// .then((snapshot) => {
//   let books = []
//     snapshot.docs.forEach((doc) => {
//       books.push({...doc.data(), id: doc.id})
//     })
//     loader.style.display = "none";
//     error.style.display = "block";
//     if (books) {
//      error.style.display = "none";
//     for (let book of books) {
//       let div = document.createElement("div")
//       let h1 = document.createElement("h1");
//       let p = document.createElement("p");
//       div.classList.add("outPut");
//       h1.textContent = `${book.title}`
//       p.textContent = `${book.author}`
//       div.appendChild(h1)
//       div.appendChild(p)
//       out.appendChild(div);
//     }
//    }
// })



onSnapshot(colRef, (snapshot) => {
  let books = []
  snapshot.docs.forEach((doc) => {
    books.push({...doc.data(), id: doc.id})
  })
  console.log(books)
  loader.style.display = "none";
  error.style.display = "block";
  if (books) {
   error.style.display = "none";
  for (let book of books) {
    let div = document.createElement("div")
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    div.classList.add("outPut");
    h1.textContent = `${book.title}`
    p.textContent = `${book.author}`
    div.appendChild(h1)
    div.appendChild(p)
    out.appendChild(div);
  }
 }
console.log("task added")
})



taskForm.addEventListener("submit", (e) => {
  e.preventDefault()
  addDoc(colRef, {
   title: taskForm.title.value,
   author: taskForm.task.value
  })
  .then(() => {
   taskForm.reset()
  })
})
