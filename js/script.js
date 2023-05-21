const nameInput = document.getElementById("name-input");
const animalInput = document.getElementById("animal-input");
const whaleInput = document.getElementById("whale-input");
const markInput = document.getElementById("mark-input");
const allInputs = document.querySelectorAll("input[type='text'], input[type='number']");
const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    event.preventDefault();

    // clear all the error messages
    const errorMessages = document.querySelectorAll(".error-message");
    // loop through any existing error messages and DESTROY them
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].remove();
    }

    // check the input fields
    // setup a variable which tells us the form is valid
    let isValid = true;

    // loop over all the inputs
    // to check if any of them are empty
    for (let i = 0; i < allInputs.length; i++) {
        // renaming our current input, in the array
        let input = allInputs[i];
        // check if that input is equal to nothing
        if (input.value === "") {
            isValid = false;
            // declare a variable which creates a <p> which will show on the screen
            const errorMessage = document.createElement('p');
            errorMessage.className = "error-message";
            errorMessage.innerHTML = "This field is required.";
            input.insertAdjacentElement("afterend", errorMessage);
            // check if the input has been typed into,
            // or changed by the user
            input.addEventListener("input", function () {
                // check if the input has something entered into it
                if (input.value !== "") {
                    errorMessage.remove();
                }
            })
        }

    }

    // if nothing is empty, submit the form
    if (isValid) {
        console.log("Submitted successfully!");
        console.log("Your name: " + nameInput.value);
        console.log("Mark's height " + markInput.value);
    }
})
