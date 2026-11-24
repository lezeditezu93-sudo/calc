let a = Number(prompt("Введите первое число"))
let b = Number(prompt("Введите второе число"))
let action = prompt("Какое действие выполнить?")

// if (b === 0) {
//     alert("На 0 делить нельзя")
// }

if (action === "+") {
    let c = a + b 
    // let a + b = c;
    alert(c)
}

else if (action === "-") {
    let c = a - b 
    // let a + b = c;
    alert(c)
}

else if (action === "/") {
    let c = a / b 
    // let a + b = c;
    alert(c)
}

else if (action === "*") {
    let c = a * b 
    // let a + b = c;
    alert(c)
}