import {initializeApp} from "firebase/app";
import {
    collection,
    onSnapshot,
    getFirestore,
    // addin gfunction
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'
let out = document.querySelector(".outPut-section ");
let loader = document.querySelector(".loader");
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

// real time data
onSnapshot(colRef, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({...doc.data(), id: doc.id});
  });

  // Clear existing tasks


  console.log(books);
  loader.style.display = "none";
  
  
  if (books.length <= 0) {
    let error = document.createElement("h2");
    error.textContent = "error fetching the data needed";
    out.appendChild(error);
  } else {
    out.innerHTML = '';
    for (let book of books) {
      let div = document.createElement("div");
      let span = document.createElement("span")
      let h3 = document.createElement("h3")
      let h1 = document.createElement("h1");
      let p = document.createElement("p");
      div.classList.add("outPut");
      h1.textContent = `${book.title}`;
      p.textContent = `${book.author}`;
      h3.textContent = "delete";
      span.appendChild(h1)
      span.appendChild(h3)
      div.appendChild(span);
      div.appendChild(p);
      out.appendChild(div);

      // adding a delete option
      h3.addEventListener("click", () => {
        const docRef = doc(db,"books",book.id)

        deleteDoc(docRef)
      })
    }
  }
  console.log("task added");
});

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
