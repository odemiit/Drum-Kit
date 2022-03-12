// document.querySelector("button").addEventListener("click", handleClick);

var buttonArray = document.querySelectorAll(".drum");

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", handleClick);
}

function handleClick() {
    // alert("I got clicked!");
    var sound = new Audio("sounds/tom-1.mp3");
    sound.play();
}