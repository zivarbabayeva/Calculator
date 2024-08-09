// let clear = document.querySelector(".clear")
// let divident = document.querySelector(".divident");
// let percent = document.querySelector(".percent");
// let multip = document.querySelector(".multip");
// let seven = document.querySelector(".seven");
// let eight = document.querySelector(".eight");
// let nine = document.querySelector(".nine");
// let plusminus = document.querySelector(".plus-minus");
// let four = document.querySelector(".four");
// let five = document.querySelector(".five");
// let six = document.querySelector(".six");
// let minus = document.querySelector(".minus");
// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// let three = document.querySelector(".three");
// let plus = document.querySelector(".plus");
// let point = document.querySelector(".point");
// let zero = document.querySelector(".zero");
// let arrow = document.querySelector(".arrow");
// let equal = document.querySelector(".equal");
// let calculation = document.querySelector(".calculation");
let specialChars = ["%", "*", "/", "-", "+", "±", "="];
let output = "";
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const calculat = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "C") {
        output = "";
    } else if (btnValue === "←") {
        output = output.toString().slice(0, -1);
    }
    else if (btnValue === "±") {
        output = -1 * output;
    }
    else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculat(e.target.dataset.value));
});



























