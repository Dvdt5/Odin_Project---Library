//Assign Buttons
const addBookBtn = document.getElementById("add-book-btn");
const closeFormBtn = document.getElementById("close-form-btn");
const confirmFormBtn = document.getElementById("confirm-form-btn");
const toggleReadedStatusBtn = document.querySelectorAll(".toggle-readed-btn");

//Assign Elements
const addBookModal = document.getElementById("popup-modal");
const modalShade = document.getElementById("shade");
const bookContainer = document.getElementById("middle-column")
const addBookForm = document.getElementById("popup-form");


//Assign input elements
const bookTitleInput = document.getElementById("title-input");
const bookAuthorInput = document.getElementById("author-input");
const bookNumberInput = document.getElementById("pagenumber-input");
const bookReadInput = document.getElementById("readed-checkbox-btn");

//Books will be stored here
let listOfBooks = [
    {
        id: "1",
        title: "Hunger Games",
        author: "SUzanne Collins",
        pageNumber: "384",
        isReaded: true
    },
    {
        id: "2",
        title: "Lord of the Flies",
        author: "William Golding",
        pageNumber: "225",
        isReaded: true
    },
    {
        id: "3",
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        pageNumber: "342",
        isReaded: false
    },
    {
        id: "4",
        title: "Great Expectations",
        author: "Charles Dickens",
        pageNumber: "640",
        isReaded: false
    }
];

//Clearing the values from form when closing and submitting it
const clearInputValues = () => {
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookNumberInput.value = "";
}

//Adding readed or not button to all the books
const addReadedButton = () => {
    document.querySelectorAll(".toggle-readed-btn").forEach(function(button) {
        button.addEventListener("click", ()=>{
            if (button.classList.contains("readed")){
                button.classList.remove("readed");
                button.classList.add("notreaded");
                button.textContent = "NOT READED";
                button.nextElementSibling.classList.toggle("triangle-notreaded");
            } else {
                button.classList.remove("notreaded");
                button.classList.add("readed");
                button.textContent = "READED";
                button.nextElementSibling.classList.toggle("triangle-notreaded");
            }
            
        });
      });
};

const deleteBook = (idOfBook) => {
    listOfBooks = listOfBooks.filter((book)=> book.id != idOfBook);
    displayBooks();
};

const addBook = () => {
    listOfBooks.push({
        id: `${Date.now()}`,
        title: bookTitleInput.value,
        author: bookAuthorInput.value,
        pageNumber: bookNumberInput.value,
        isReaded: bookReadInput.checked
    })
    displayBooks();
}

const displayBooks = () => {
    bookContainer.innerHTML = "";
    listOfBooks.map(({id,title,author,pageNumber,isReaded})=>{
        bookContainer.innerHTML += `
         <div class="book-tile">
            <p class="book-title">${title}</p>
            <p class="book-author">${author}</p>
            <p class="book-pagenumber">${pageNumber}</p>
            <div>
                <button type="button" class="${isReaded ? "readed": "notreaded"} toggle-readed-btn">${isReaded ? "READED": "NOTREADED"}</button>
                <div class="triangle ${isReaded ? "" : "triangle-notreaded"}"></div>
            </div>
            <div class="delete-book-btn" onClick="deleteBook(${id})"><abbr title="DELETE BOOK">D</abbr></div>
        </div>`;
    })
    addReadedButton();
};


addBookBtn.addEventListener("click", ()=>{
    addBookModal.style.display = "block"
    modalShade.style.display = "block"
    addBookBtn.style.pointerEvents = "none";
});

closeFormBtn.addEventListener("click", ()=>{
    clearInputValues();
    addBookModal.style.display = "none";
    modalShade.style.display = "none"
    addBookBtn.style.pointerEvents = "all";
});



addBookForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    addBook();
    displayBooks();
    clearInputValues();
    addBookModal.style.display = "none";
    modalShade.style.display = "none"
    addBookBtn.style.pointerEvents = "all";
});

displayBooks();