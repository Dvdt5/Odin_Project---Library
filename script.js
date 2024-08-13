//Assign Buttons
const addBookBtn = document.getElementById("add-book-btn");
const closeFormBtn = document.getElementById("close-form-btn");
const confirmFormBtn = document.getElementById("confirm-form-btn");
const toggleReadedStatusBtn = document.querySelectorAll(".toggle-readed-btn");

//Assign Elements
const addBookForm = document.getElementById("popup-modal");
const modalShade = document.getElementById("shade");


//Assign input elements
const bookTitleInput = document.getElementById("title-input");
const bookAuthorInput = document.getElementById("author-input");
const bookNumberInput = document.getElementById("pagenumber-input");
const bookReadInput = document.getElementById("readed-checkbox-btn");


const clearInputValues = () => {
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookNumberInput.value = "";
}


addBookBtn.addEventListener("click", ()=>{
    addBookForm.style.display = "block"
    modalShade.style.display = "block"
    addBookBtn.style.pointerEvents = "none";
});

closeFormBtn.addEventListener("click", ()=>{
    clearInputValues();
    addBookForm.style.display = "none";
    modalShade.style.display = "none"
    addBookBtn.style.pointerEvents = "all";
});

toggleReadedStatusBtn.forEach(function(button) {
    button.addEventListener("click", ()=>{
        if (button.classList.contains("readed")){
            button.classList.remove("readed");
            button.classList.add("notreaded");
            button.textContent = "NOT READED";
            button.nextElementSibling.style.borderLeft = "red 12.5px solid";
            button.nextElementSibling.style.borderRight = "red 12.5px solid";
        } else {
            button.classList.remove("notreaded");
            button.classList.add("readed");
            button.textContent = "READED";
            button.nextElementSibling.style.borderLeft = "greenyellow 12.5px solid";
            button.nextElementSibling.style.borderRight = "greenyellow 12.5px solid";
        }
        
    });
  });