// Global Variable
let tempNumber = '0';
let resultValue = '0';

// Rendering view

const calculationHistory = document.querySelector('#calculation-history');
const calculationResult = document.querySelector('#calculation-result');
const noHistoryText = document.querySelector('#no-history');

// Rendering number buttons

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

// Rendering number modifier buttons

const plusMinus = document.querySelector('#plus-minus');
const comma = document.querySelector('#comma');
const clearEntry = document.querySelector('#clear-entry-btn');
const clear = document.querySelector('#clear-btn');
const backspace = document.querySelector('#backspace');

// Rendering operator buttons

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiplication = document.querySelector('#multiplication');
const division = document.querySelector('#division');
const cubic = document.querySelector('#cubic');
const square = document.querySelector('#square');
const squareRoot = document.querySelector('#square-root');
const percentage = document.querySelector('#percentage');
const equal = document.querySelector('#equal');

// Method

const setResult = (type = 'CE') => {
  if (type === 'CE') {
    calculationResult.innerHTML = tempNumber;
  } else calculationResult.innerHTML = resultValue;
};
const resetValue = (source) => {
  tempNumber = '0';
  setResult(source.target.innerHTML);
};
const resetResult = (source) => {
  resultValue = '0';
  tempNumber = '0';
  setResult(source.target.innerHTML);
};
const modifyValue = (tes) => {
  if (tempNumber.length < 21) {
    if (tempNumber === '0') {
      tempNumber = String(tes.target.innerHTML);
    } else tempNumber += String(tes.target.innerHTML);
    setResult();
  }
};

// Testing Number Button

setResult();

one.addEventListener('click', (event) => modifyValue(event));

two.addEventListener('click', (event) => modifyValue(event));

three.addEventListener('click', (event) => modifyValue(event));

four.addEventListener('click', (event) => modifyValue(event));

five.addEventListener('click', (event) => modifyValue(event));

six.addEventListener('click', (event) => modifyValue(event));

seven.addEventListener('click', (event) => modifyValue(event));

eight.addEventListener('click', (event) => modifyValue(event));

nine.addEventListener('click', (event) => modifyValue(event));

zero.addEventListener('click', (event) => modifyValue(event));

// Testing Modifier Buttons
clear.addEventListener('click', (event) => resetResult(event));
clearEntry.addEventListener('click', (event) => resetValue(event));
