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
            default:
                alert("Opção inválida");

        }
    });
});

function handleClickCE() {
    visor.value = "";
}

function hancleClickC() {
    console.log(visor.value.split("+"))
}