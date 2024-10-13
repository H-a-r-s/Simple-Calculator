let display = document.getElementById("display");
let operator = '';
let currentValue = '';

function appendValue(value) {
    currentValue += value;
    display.value = currentValue;
}

function appendOperator(op) {
    if (currentValue !== '') {
        currentValue += ` ${op} `;
        display.value = currentValue;
    }
}

function clearDisplay() {
    currentValue = '';
    display.value = '';
}

function calculate() {
    try {
        currentValue = eval(currentValue).toString();
        display.value = currentValue;
    } catch (error) {
        display.value = "Error";
    }
}