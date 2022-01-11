var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        document.getElementById("currentNumber").style.color = "black";
    }
    if (currentNumber >= 10) {
        document.getElementById("mais").disabled = true;
    } else {
        document.getElementById("mais").disabled = false;
    }
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red";
    }
    if (currentNumber <= -10) {
        document.getElementById("menos").disabled = true;
    } else {
        document.getElementById("menos").disabled = false;
    }
}

mais.addEventListener("click", increment)
menos.addEventListener("click", decrement)
