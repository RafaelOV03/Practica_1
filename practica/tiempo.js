// variable para almacenar nuestro intervalID
let nIntervId = setInterval(flashText, 1000);

function flashText() {
    const oElem = document.getElementById("my_box");
    if (oElem.className === "go") {
        oElem.className = "stop";
    } else {
        oElem.className = "go";
    }
}

function stopTextColor() {
    clearInterval(nIntervId);
    // liberar nuestro inervalId de la variable
    nIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);