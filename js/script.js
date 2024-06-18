const name = document.querySelector(".name");
const email = document.querySelector(".email");
const buttonContinue = document.querySelector(".continue");
const container1 = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container2");


const handleInputClick = (e) => {
    const input = e.target.value;
    const validName = /^[a-z ,.'-]+$/i;
    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (input !== validName || input !== validEmail) {
        alert("Please fill out the fileds correctly")
    } else {
        container1.classList.add("hidden");
        container2.classList.remove("hidden");
    }
} 

buttonContinue.addEventListener("click", handleInputClick);