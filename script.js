const numberButtons = document.querySelectorAll("#number-buttons-container button");

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
        console.log("click");
    })
})