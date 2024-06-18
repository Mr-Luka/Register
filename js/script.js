const nameFull = document.querySelector(`#name`);
const email = document.querySelector(`#email`);
const buttonContinue = document.querySelector(".continue");
const container1 = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container2");

let nameVal;
let emailVal;

const handleInputClick = () => {
    nameVal = nameFull.value;
    emailVal = email.value;
    const correctName = /^[a-z ,.'-]+$/i;
    const correctEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!nameVal || !emailVal) {
        alert("Please fill in both name and email")
    } else if (!correctName.test(nameVal)){
        alert("Please enter a valid name");
    } else if (!correctEmail.test(emailVal)){
        alert("Please enter a valid email address")
    } else {
        container1.classList.add("hidden");
        container2.classList.remove("hidden");
    }
} 

buttonContinue.addEventListener("click", handleInputClick);