const visor = document.querySelector(".visor input");
const numbers = document.querySelectorAll(".btnNumbers");
const operators = document.querySelectorAll(".btnOperator");

numbers.forEach(number => {
    number.addEventListener("click", () => {
        visor.value += number.value;
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        switch (operator.value) {
            case "CE":
                handleClickCE();
                break;
            case "C":
                hancleClickC();
                break;
            case "+":
                visor.value += operator.value;
                break;
            case "-":
                visor.value += operator.value;
                break;
            case "*":
                visor.value += operator.value;
                break;
            case "/":
                visor.value += operator.value;
                break;
            case "=":
                handleClickEqual();
                break;
            default:
                alert("Opção inválida");

        }
    });
});

function isLastItemAnOperation(number) {
    let operations = ["+", "-", "*", "/"];
    let lastItem = number.split("").pop();
    return operations.some((operator) => {
        return operator === lastItem;
    });
}

function removeLastItemIfItIsAnOperator(number) {
    if (isLastItemAnOperation(number)) {
        return number.slice(0, -1);
    }
    return number;
}

function handleClickEqual() {
    visor.value = removeLastItemIfItIsAnOperator(visor.value);
    let allValues = visor.value.match(/\d+[+*\/-]?/g);
    visor.value = allValues.reduce((accumulated, actual) => {
        let firstValue = accumulated.slice(0, -1);
        let operator = accumulated.split("").pop();
        let lastValue = removeLastItemIfItIsAnOperator(actual);
        let lastOperator = isLastItemAnOperation(actual) ? actual.split("").pop() : "";

        switch (operator) {
            case "+":
                return (Number(firstValue) + Number(lastValue)) + lastOperator;
            case "-":
                return (Number(firstValue) - Number(lastValue)) + lastOperator;
            case "*":
                return (Number(firstValue) * Number(lastValue)) + lastOperator;
            case "/":
                return (Number(firstValue) / Number(lastValue)) + lastOperator;
        }
    })
}

function handleClickCE() {
    visor.value = 0;
}

function hancleClickC() {
    let C = visor.value.split("")
    return visor.value = C.slice(0, -1);
}