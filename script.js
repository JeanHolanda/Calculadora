const numberButtons = document.querySelectorAll("[id^='number']")
const operatorButtons = document.querySelectorAll(".operator")
const invisibleOperators = document.querySelectorAll(".invisible-operator")
const clearButton = document.querySelector("#clear")
const display = document.querySelector("#display")
const sum = document.querySelector("#sum")
const sub = document.querySelector("#sub")
const times = document.querySelector("#times")
const over = document.querySelector("#over")
const percent = document.querySelector("#percent")
const plusOrMinus = document.querySelector("#plus-or-minus")
const equal = document.querySelector("#equal")
const squareRoot = document.querySelector("#square-root")
const point = document.querySelector("#point")

console.log(invisibleOperators)

numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (display.textContent === "0") {
            display.textContent = e.target.value
        } else {
            display.textContent += e.target.value
        }

    })
})

clearButton.addEventListener("click", () => {
    display.textContent = "0"
})

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const current = display.textContent
        const value = e.target.value

        if (current !== "0" && !isLastCharOperator(current)) {
            display.textContent += value
        }
    })
})

function isLastCharOperator(text) {
    return /[+\-*/%]$/.test(text)
}

invisibleOperators.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent = "3"
    })
})
