const firstNumber = document.querySelector(".firstNumber")
// console.log(firstNumber)

const secondNumber = document.querySelector(".secondNumber")
// console.log(secondNumber)

const plus = document.querySelector(".plus")
// console.log(plus)

const minus = document.querySelector(".minus")
// console.log(minus)

const multiply = document.querySelector(".multiply")
// console.log(multiply)

const divide = document.querySelector(".divide")
// console.log(divide)

const equals = document.querySelector(".equals")
// console.log(equals)


plus.addEventListener("click", function() {
    const sum = (Number(firstNumber.value) + Number(secondNumber.value))
    console.log(sum)

    equals.value = sum
    // value то что написано в инпуте
})

minus.addEventListener("click", function() {
    const min = (Number(firstNumber.value) - Number(secondNumber.value))
    console.log(min)

    equals.value = min
    // value то что написано в инпуте
})