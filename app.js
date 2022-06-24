const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black","yellow","green", "#c7bf67","#7b55cf"]; 

button.addEventListener("click", changeBackground);

function changeBackground() {
    //random colors
    const randomNumbers = Math.floor(Math.random() * colors.length);
    const pickedColor = colors[randomNumbers];
    body.style.backgroundColor = pickedColor;
}
