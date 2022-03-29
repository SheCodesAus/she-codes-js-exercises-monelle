window.onload = function () {
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");

    let messageBox = document.createElement("p");
    messageBox.innerText = "your message - your name";
    messageBox.id = "message-box";
    speechBubbleElement.appendChild(messageBox);

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
    // console.log("page has now loaded");
};

function showMessage() {
    let message = document.getElementById("message-text").value;
    let name = document.getElementById("name-text").value;
    let messageBox = document.getElementById("message-box");
    messageBox.innerText = message + " " + name;
    // console.log(message);
}

