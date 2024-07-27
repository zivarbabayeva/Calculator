let clear = document.querySelector(".clear")
let divident = document.querySelector(".divident");
let percent = document.querySelector(".percent");
let multip = document.querySelector(".multip");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let plusminus = document.querySelector(".plus-minus");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let minus = document.querySelector(".minus");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let plus = document.querySelector(".plus");
let point = document.querySelector(".point");
let zero = document.querySelector(".zero");
let arrow = document.querySelector(".arrow");
let equal = document.querySelector(".equal");
let calculation = document.querySelector(".calculation");
let result = document.querySelector(".result");
clear.addEventListener('click', () => {
    result.innerHTML = "";
    calculation.innerHTML = "";
});
divident.addEventListener('click', () => {
    let last = result.innerHTML.slice(result.innerHTML.length - 1);
    if (
        (Number(last) == 0 || Number(last)) &&
        !result.innerHTML.includes("/") &&
        !result.innerHTML.includes("*") &&
        !result.innerHTML.includes("+") &&
        !result.innerHTML.includes("-")
    ) {
        result.append("/");
    }
});
percent.addEventListener('click', () => {
    let number = Number(result.innerHTML);
    if (number) {
        result.innerHTML = number / 100;
    }
});
multip.addEventListener('click', () => {
    let last = result.innerHTML.slice(result.innerHTML.length - 1);
    if (
        (Number(last) == 0 || Number(last)) &&
        !result.innerHTML.includes("/") &&
        !result.innerHTML.includes("*") &&
        !result.innerHTML.includes("+") &&
        !result.innerHTML.includes("-")
    ) {
        result.append("*");
    }
})
minus.addEventListener('click', () => {
    let last = result.innerHTML.slice(result.innerHTML.length - 1);
    if (
        (Number(last) == 0 || Number(last)) &&
        !result.innerHTML.includes("/") &&
        !result.innerHTML.includes("*") &&
        !result.innerHTML.includes("+") &&
        !result.innerHTML.includes("-")
    ) {
        result.append("-")
    }
})
plus.addEventListener('click', () => {
    let result = result.innerHTML.slice(result.innerHTML.length - 1);
    console.log(last);
    if (
        (Number(last) == 0 || Number(last)) &&
        !result.innerHTML.includes("/") &&
        !result.innerHTML.includes("*") &&
        !result.innerHTML.includes("+") &&
        !result.innerHTML.includes("-")
    ) {
        result.append("+")
    }
})
point.addEventListener('click', () => {
    let last = result.innerHTML.slice(result.innerHTML.length - 1);
    let rawResult = result.innerHTML;
    let array = rawResult.split(" ");
    if (array.length > 2) {
        if (!Number(array[2].includes("."))) {
            result.append(".")
        }
    } else {
        (Number(last) == 0 || Number(last) &&
            !result.innerHTML.includes(".")
        )
        {
            result.append(".");
        }
    }
});
plus-minus.addEventListener('click', () => {
    let number = (result.innerHTML);
    if (number) {
        result.innerHTML = -1 * number;
    }
});
arrow.addEventListener('click', () => {
    result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1);
});

let numbers = [zero, one, two, three, four, five, six, seven, eight, nine];
numbers.forEach(num => {
    num.addEventListener('click', () => {
        result.innerHTML += num.innerHTML;
    });
});

equal.addEventListener('click', () => {
    let rawResult = result.innerHTML;
    let array = rawResult.split(" ");
    if (array.length == 3) {
        let res;
        let firstNumber = Number(array[0]);
        let secondNumber = Number(array[2]);
        switch (array[1]) {
            case "*":
                res = firstNumber * secondNumber;
                break;
            case "/":
                res = firstNumber / secondNumber;
                break;
            case "+":
                res = firstNumber + secondNumber;
                break;
            case "-":
                res = firstNumber - secondNumber;
                break;
            default:
                break;
        }
        console.log(res);
        calculation.innerHTML = result.innerHTML;
        result.innerHTML = res;
    }
    else {
        calculation.innerHTML = result.innerHTML;
    }
});









