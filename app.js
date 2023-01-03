// TODO: 
// make calculate function!!!
// add event listener to equals btn

const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');

const displayCurrent = document.querySelector('.display-current');
const displayPrevious = document.querySelector('.display-previous');

const numberBtn = document.querySelectorAll('[data-number]');
const operandBtn = document.querySelectorAll('[data-operand]');

let currentOperand = '';
let currentValue = '';
let previousValue = '';


// event listeners
allClearBtn.addEventListener('click', allClear);

deleteBtn.addEventListener('click', del);

numberBtn.forEach(element => {
    element.addEventListener('click', pushNumber)
})

operandBtn.forEach(element => {
    element.addEventListener('click', pushOperand)
})

function allClear() {
    currentOperand = '';
    currentValue = '';
    previousValue = '';
    updateDisplay();
}

function del() {
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}

function pushNumber(event) {
    let btnValue = event.target.innerText.toString()
    if (currentValue.includes('.') && btnValue === '.') return;
    if (currentValue.length === 0 && btnValue === '.') {
        currentValue += '0';
    }
    currentValue += btnValue;
    updateDisplay();
}

function pushOperand(event) {
    if (currentValue.length === 0 && previousValue.length === 0) {
        return;
    } else if (currentValue.length === 0 && previousValue.length !== 0) {
        currentOperand = event.target.innerText.toString();
        updateDisplay();
    } else {
        // calculate(); 
        currentOperand = event.target.innerText.toString();
        previousValue = currentValue;
        currentValue = '';
        updateDisplay();
    }
}



function updateDisplay() {
    displayCurrent.innerText = `${currentValue}`;
    displayPrevious.innerText = `${previousValue} ${currentOperand}`
}



function calculate() {

}