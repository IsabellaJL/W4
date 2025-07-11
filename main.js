// Mostrar los datos al cargar la página
displayData();
updateInteractionDisplay();

// Inicializar contador de interacciones en Session Storage
if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interactionCount', 0);
}

// Evento para guardar datos en el localStorage
document.getElementById('saveButton').addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    // Validación: nombre sin números ni símbolos
    const nameIsValid = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name);

    if (nameIsValid && !isNaN(age)) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);
        displayData();
    } else {
        document.getElementById('output').textContent = "⚠️ Nombre inválido o edad no numérica.";
    }
});

// Función para mostrar los datos almacenados
function displayData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');

    if (name && age) {
        outputDiv.textContent = `Hola ${name}, tienes ${age} años.`;
    } else {
        outputDiv.textContent = "No hay datos almacenados.";
    }
}

// Función para actualizar el contador de interacciones
function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount', count);
    updateInteractionDisplay();
}

// Mostrar contador de iteracciones
function updateInteractionDisplay() {
    const count = sessionStorage.getItem('interactionCount');
    const display = document.getElementById('interactionCount');
    display.textContent = `Interacciones esta sesión: ${count}`;
    console.log(`Interacciones esta sesión: ${count}`)
}

// Eventos para contar interacciones
document.getElementById('saveButton').addEventListener('click', updateInteractionCount);
document.getElementById('clearButton').addEventListener('click', updateInteractionCount);

// Evento para limpiar datos del localStorage
document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.clear();
    displayData();
});
