document.addEventListener("DOMContentLoaded", function() {
    // Override the inline style on the body element
    document.body.style.isolation = 'auto';
    
    // Remove any unwanted elements that might be injected
    const unwantedElement = document.querySelector('div[id^="coplmfnp"]');
    if (unwantedElement) {
        unwantedElement.remove();
    }
    
    // Set an observer to monitor and remove any new injected elements dynamically
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach((node) => {
                    if (node.id && node.id.startsWith("coplmfnp")) {
                        node.remove();
                    }
                });
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

const container1 = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container2");

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

const buttonContinue2 = document.querySelector(".continue2");
const topics = document.querySelectorAll(".topics");

const handleTopicsClick = (e) => {
    e.preventDefault();
   if (topics) {
    topics.map(topic => {
        if (topic.selected) {
            topic.classList.add("selected")
        }
    })
   }
}

buttonContinue2.addEventListener("click", handleTopicsClick);