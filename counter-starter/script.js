function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
    console.log(number);
}

function substract(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
    console.log(number);
}
// Define function to apply a value from TextField to our counter:
function applyNumberInput() {
    // Point to the HTMLelement where to find the value:
    let numberInputElement = document.getElementById("number-input");
    // .value lifts the actual value from Element; then assigns value to 'step' variable:
    let step = numberInputElement.value || 0;
    // Proceed with the original function
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    // Add 'parseInt' to 'step' as value is a string:
    number = parseInt(number) + parseInt(step);
    numberElement.innerText = number;
    console.log(number);
}