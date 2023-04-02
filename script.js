const screen = document.querySelector('.calculator-screen');
let currentNumber = '0';
let prevNumber = '';
let calculationOperator = '';

const updateScreen = (result) => {
    screen.value = result;
}

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
    });
});

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break; 
        default:
            return
    }

    currentNumber = result;
}

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

const allClear = document.querySelector('.all-clear');
allClear.addEventListener('click', () => {
    currentNumber = '0';
    prevNumber = '';
    calculationOperator = '';
    updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

const inputPercent = (percent) => {
    if(currentNumber.includes('%')) {
        return;
    }
    currentNumber += percent;
};

const percent = document.querySelector('.percent');
percent.addEventListener('click', (event) => {
    inputPercent(event.target.value);
    updateScreen(currentNumber);
});