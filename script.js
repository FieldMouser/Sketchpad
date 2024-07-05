const container = document.querySelector(".container");
const pickedColor = document.querySelector(".pickedColor");
let red = 0, green = 0, blue = 0;
pickedColor.style.backgroundColor = `rgb(${red},${green},${blue})`;

function randomColor(){
    red = Math.round(Math.random() * 255);
    blue = Math.round(Math.random() * 255);
    green = Math.round(Math.random() * 255);
    pickedColor.style.backgroundColor = `rgb(${red},${green},${blue})`;
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


for (let i = 0; i < 255; i++) {
    const div = document.createElement("div"); // Создание нового элемента div
    div.classList.add("pixel"); // Добавление класса pixel к новому элементу
    container.appendChild(div); // Добавление нового элемента в контейнер

    div.onmousedown = () => {
        div.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
}



