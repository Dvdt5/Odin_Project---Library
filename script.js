//Assign Buttons
const addBookBtn = document.getElementById("add-book-btn");
const closeFormBtn = document.getElementById("close-form-btn");
const confirmFormBtn = document.getElementById("confirm-form-btn")

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
    clearInputValues;
    addBookForm.style.display = "none";
    modalShade.style.display = "none"
    addBookBtn.style.pointerEvents = "all";
});
