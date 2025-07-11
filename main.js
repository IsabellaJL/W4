//Show the data on the screen
displayData();
updateInteractionDisplay();

// Initialize interaction counter in Session Storage
if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interactionCount', 0);
}

// Event to save data to localStorage
document.getElementById('saveButton').addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    // Check that the name does not have numbers or symbols
    const nameIsValid = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name);

    if (nameIsValid && !isNaN(age)) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);
        displayData();
    } else {
        document.getElementById('output').textContent = "⚠️ Invalid name or non-numeric age.";
        alert("⚠️ Invalid name or non-numeric age.")
    }
});

//Function to display stored data
function displayData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');

    if (name && age) {
        outputDiv.textContent = `Hi ${name}, you are ${age} years old.`;
    } else {
        outputDiv.textContent = "No data stored.";
    }
}

// Function to update the interaction counter
function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount', count);
    updateInteractionDisplay();
}

// Display iteration counter
function updateInteractionDisplay() {
    const count = sessionStorage.getItem('interactionCount');
    const display = document.getElementById('interactionCount');
    display.textContent = `Interactions this session: ${count}`;
    console.log(`Interactions this session: ${count}`)
}

// Events to count interactions
document.getElementById('saveButton').addEventListener('click', updateInteractionCount);
document.getElementById('clearButton').addEventListener('click', updateInteractionCount);

// Event to clear data from localStorage
document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.clear();
    displayData();
});
