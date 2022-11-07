const displays = document.querySelectorAll('#calculator-screen p')
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const specialButtons = document.querySelectorAll(".special-button");
const equalsButton = document.querySelector("#equals-button");

let numberInMemory = null;
let currentOperator = null;

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function mutiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function factorial (a, b) {
    return a ** b;
}

function operate (operator, a, b) {
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return mutiply(a,b);
        case "/":
            return divide(a,b);
        case "**":
            return factorial(a,b);
        default:
            return null;
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        displays[1].textContent += button.dataset.value;
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (displays[1].textContent === "") {
            currentOperator = button.dataset.value;
        } else if (numberInMemory != null && displays[0].textContent === "") {
            currentOperator = button.dataset.value;;
            displays[0].textContent = numberInMemory;
            displays[1].textContent = "";
        } else if (numberInMemory === null && displays[1].textContent != "") {
            numberInMemory = parseInt(displays[1].textContent);
            currentOperator = button.dataset.value;
            displays[0].textContent = numberInMemory;
            displays[1].textContent = "";
        } else if (numberInMemory != null && currentOperator != null) {
            const temp = operate(currentOperator, numberInMemory, parseInt(displays[1].textContent));
            numberInMemory = temp;
            currentOperator = button.dataset.value;
            displays[0].textContent = numberInMemory;
            displays[1].textContent = "";
        } else {
            // Do nothing
        }
    })

})

equalsButton.addEventListener('click', () => {
    if (numberInMemory != null && currentOperator != null && displays[1].textContent != "") {
        const temp = parseInt(displays[1].textContent)
        numberInMemory = operate(currentOperator, numberInMemory, temp);
        currentOperator = null;
        displays[1].textContent = numberInMemory;
        displays[0].textContent = "";
        numberInMemory = null;
    }
})

specialButtons.forEach(button => {
    let buttonValue = button.dataset.value;
    button.addEventListener('click', () => {
        const butt = buttonValue;
        if (butt === "C") {
            displays[1].textContent = displays[1].textContent.slice(0, displays[1].textContent.length - 1);
        } else if (butt === "AC") {
            displays[1].textContent = "";
            displays[0].textContent = "";
            numberInMemory = null;
        }
    });
})