const btns = document.querySelectorAll(".num-button");
const allBtns = document.querySelectorAll(".grid-item");
const operandBox = document.querySelector(".operand-box");
const resultBox = document.querySelector(".result-box");
const clearBtn = document.querySelector('#clear');
const clearAllBtn = document.querySelector('#AC');

const result = document.getElementById("equals");

const btnSpread = [...btns];
const allBtnSpread = [...allBtns];

// for number inputs
btnSpread.forEach((button, i) => {
    button.addEventListener("click", () => {
        // inner values for calculator
        if (operandBox.innerHTML == 0){
            operandBox.innerHTML = "";
        }

        const value = btns[i].innerHTML;
        operandBox.innerHTML += value;
    });
});

// for operator inputs
allBtnSpread.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "divide") {
            operandBox.innerHTML += "/";
        }
        if (button.classList.contains("times")) {
            operandBox.innerHTML += "*";
        }
        if (button.classList.contains("minus")) {
            operandBox.innerHTML += "-";
        }
        if (button.classList.contains("plus")) {
            operandBox.innerHTML += "+";
        }
        if (button.classList.contains("dot")) {
            operandBox.innerHTML += ".";
        }
        if (button.id === "percent") {
            operandBox.innerHTML += "%";
        }
    });
});

// function to evaluate strings
function evaluate(fn) {
    return new Function('return ' + fn)();
}

// to calculate all input
result.addEventListener('click', () => {
    let allInputs = operandBox.innerHTML;
    try {
        resultBox.innerHTML = evaluate(allInputs);
    } catch (error) {
        resultBox.innerHTML = "Error";
    }
});

// to clear the last input
clearBtn.addEventListener('click', () => {
    let currentInput = operandBox.innerHTML;
    operandBox.innerHTML = currentInput.substring(0, currentInput.length - 1);
    if (operandBox.innerHTML === "") {
        operandBox.innerHTML = "0";
    }
});

// to clear all inputs
clearAllBtn.addEventListener('click', () => {
    operandBox.innerHTML = "0";
    resultBox.innerHTML = "0";
});
