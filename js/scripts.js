//business  logic
function add(number1, number2) {
    return  number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return  number1 / number2;
}

//user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const message = "Addition" + add(number1, number2) + "\n" + 
                "Subtraction: " + subtract(number1, number2) + "\n" +
                "Multiplication: " + multiply(number1, number2) + "\n" +
                "Division: " + subtract (number1, number2) + "\n";
                          
window.alert(message);
   
