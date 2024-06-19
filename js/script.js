
const container1 = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");

const nameFull = document.querySelector(`#name`);
const email = document.querySelector(`#email`);
const buttonContinue = document.querySelector(".continue");

//                 FIRST PAGE
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


//         SECOND PAGE

const buttonContinue2 = document.querySelector("#con2");
const topics = document.querySelectorAll(".topics");
const sumName = document.querySelector("p.sum");
const sumEmail = document.querySelector("p#email-p");
const ul = document.querySelector("ul");


const oneSelect = topics.forEach(topic=> {
    topic.addEventListener("click", handleSelect=()=>{
        topic.classList.toggle("selected");
        })
})

const handleTopicsClick = () => {
    const selectedTopics = document.querySelectorAll(".topics.selected");
    if(selectedTopics.length >= 1) {
        container2.classList.add("hidden");
        container3.classList.remove("hidden");

        sumName.textContent = `Name: ${nameVal}`;
        sumEmail.textContent = `Email: ${emailVal}`;

        ul.innerHTML = '';
        selectedTopics.forEach(topic=> {
            const li = document.createElement("li");
            li.textContent = topic.textContent;
            ul.appendChild(li);
        })
    } else {
        alert("Please select at least one topic.")
    };
}
buttonContinue2.addEventListener("click", handleTopicsClick);




const confirmButton = document.querySelector("#confirm");
const startOver = () => {
    container3.classList.add("hidden");
    container1.classList.remove("hidden");
}

confirmButton.addEventListener("click", handleConfirm=()=>{
    container3.classList.add("shake");
    container3.addEventListener("animationend", shaking = ()=>{
        container3.classList.remove("shake");
    }, {once: true})
    setTimeout(startOver, 2000);

    nameFull.value = '';
    email.value = '';
    topics.forEach(topic=> topic.classList.remove("selected"));

});