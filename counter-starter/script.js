function add(step) {
    // console.log("dis will add one");
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
    console.log(number);
}

function substract(step) {
    // console.log("dis will substract one");
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
    console.log(number);
}