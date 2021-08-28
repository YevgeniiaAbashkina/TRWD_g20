let firstNumber, secondNumber, operation, repeat = true, agree;

message = (`${firstNumber} ${operation} ${secondNumber}`);

while (repeat) {

    while (isNaN(firstNumber)) {
        firstNumber = parseFloat(prompt("Enter first number"));
    } 

    operation = prompt("select operation: + - * /");

    while (isNaN(secondNumber)) {
        secondNumber = parseFloat(prompt("Enter second number"));
    } 



    switch (operation) {
        case "+": {
            alert(`${message} = ${firstNumber + secondNumber}`);
            repeat = false;
            break;
        }
        case "-": {
            alert(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber - secondNumber}`);
            repeat = false;
            break;
        }
        case "*":
            alert(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber * secondNumber}`);
            repeat = false;
            break;
        case "/":
            if (secondNumber == 0) {
                agree = prompt("Error. Division by zero is forbidden. Would you like enter another divider?\n Type 'y' if yes");
                if (agree != "y") {
                    repeat = false;
                    break;
                } else {
                    secondNumber = NaN;
                    while (isNaN(secondNumber)) {
                        secondNumber = parseFloat(prompt("Enter second number"));
                    }
                    break;
                }
            
            } else {
                alert(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber / secondNumber}`);
                repeat = false;
                break;
            }
        default: {
            agree = prompt("Error. This is not valid operation. Would you like enter another divider?\n Type 'y' if yes");
            if (agree != "y") {
                repeat = false;
            }
        }
    }
    agree = prompt(" Would you like count somebody more?\n Type 'y' if yes");
    if (agree == "y") {
        repeat = true;
        firstNumber = NaN;
        secondNumber = NaN;
    } else {
        alert("See you later!")
    }
}
