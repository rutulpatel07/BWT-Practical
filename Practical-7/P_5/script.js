confirm("Hi , Welocme to Calculator App  Do you want to continue?");
var num1 = parseFloat(prompt("Enter the first number:-"));
var num2 = parseFloat(prompt("Enter the second number:-"));

const operator = prompt("Enter operator (+, -, *, /):");

switch(operator){
    case "+":
        alert("The sum of 2 Number is:- ", num1 + num2);
        break;
    
    case "-":
        alert("The difference of 2 Number is:- ",num1 - num2);
        break;

    case "*":
        alert("The product of 2 Number is:- ",num1 * num2);
        break;
    
    case "/":
        if(num2 != 0){
            alert("The division of 2 Number is:- ",num1 / num2);
            break;
        }
        else{
        alert("Error! Division by zero is not allowed");
        }

}