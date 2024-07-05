const container = document.querySelector(".container");
const pickedColor = document.querySelector(".pickedColor");
let red = 0, green = 0, blue = 0;

let size = document.querySelector(".squareSize").value;
if (size > 100) {
    size = 100;
    document.querySelector(".squareSize").value = size;
}
else if (size < 2) {
    size = 2;
    document.querySelector(".squareSize").value = size;
}

pickedColor.style.backgroundColor = `rgb(${red},${green},${blue})`;
document.querySelector(".red").value = red;
document.querySelector(".blue").value = blue;
document.querySelector(".green").value = green;

function randomColor(){
    red = Math.round(Math.random() * 255);
    blue = Math.round(Math.random() * 255);
    green = Math.round(Math.random() * 255);
    pickedColor.style.backgroundColor = `rgb(${red},${green},${blue})`;
    document.querySelector(".red").value = red;
    document.querySelector(".blue").value = blue;
    document.querySelector(".green").value = green;
}

function redColor(value) {
    pickedColor.style.backgroundColor = `rgb(${red},${green},${blue})`;
    red = value;   
}

function greenColor(value) {
    pickedColor.style.backgroundColor = `rgb(${red},${green},${blue})`;
    green = value;   
}

function blueColor(value) {
    pickedColor.style.backgroundColor = `rgb(${red},${green},${blue})`;
    blue = value;   
}

function changeSize() {
    location.reload();
    size = document.querySelector(".squareSize").value;
    
    
}


for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div"); // Создание нового элемента div
    div.classList.add("pixel"); // Добавление класса pixel к новому элементу
    div.style.width = 512 / size - 2 + "px";
    div.style.height = 512 / size - 2 + "px";
    container.appendChild(div); // Добавление нового элемента в контейнер

    div.onmousedown = () => {
        div.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
}



