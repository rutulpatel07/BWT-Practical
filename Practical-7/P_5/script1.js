if (confirm("Hi, Welcome to Calculator App. Do you want to continue?")) {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    const operator = prompt("Enter operator (+, -, *, /):");

    switch (operator) {
        case "+":
            alert("The sum of the two numbers is: " + (num1 + num2));
            break;

        case "-":
            alert("The difference of the two numbers is: " + (num1 - num2));
            break;

        case "*":
            alert("The product of the two numbers is: " + (num1 * num2));
            break;

        case "/":
            if (num2 !== 0) {
                alert("The division of the two numbers is: " + (num1 / num2));
            } else {
                alert("Error! Division by zero is not allowed.");
            }
            break;

        default:
            alert("Invalid operator entered!");
    }
} else {
    alert("Thank you for using the Calculator App. Goodbye!");
}
