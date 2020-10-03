// Global Variable
let tempNumber = '0';
let tempCalculationNumber = '0';
let resultValue = '0';
let recentResult = '0';
let operation = '';
let calculationStatus = false;

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
  if (type === 'C') {
    calculationResult.innerHTML = resultValue;
  } else if (type === 'CE') {
    calculationResult.innerHTML = tempNumber;
  }
};
const resetValue = (source) => {
  if (calculationStatus) {
    resultValue = '0';
    calculationHistory.innerHTML = '';
  }
  tempNumber = '0';
  setResult(source.target.innerHTML);
};
const resetResult = (source) => {
  resultValue = '0';
  tempNumber = '0';
  operation = '';
  calculationHistory.innerHTML = '';
  calculationStatus = false;
  setResult(source.target.innerHTML);
};
const modifyValue = (tes) => {
  if (tempNumber.length < 21) {
    if (tempNumber === '0') {
      tempNumber = String(tes.target.innerHTML);
    } else tempNumber += String(tes.target.innerHTML);

    if (calculationStatus) {
      calculationHistory.innerHTML = '';
      resultValue = '0';
      calculationStatus = false;
    }
    setResult();
  }
};
// Update History bug when doing continous operation after equal button clicked
const updateHistory = (source) => {
  if (source.target.id === 'equal') {
    if (calculationStatus) {
      calculationHistory.innerHTML = `${recentResult} ${operation} ${tempCalculationNumber} &#61;`;
    } else calculationHistory.innerHTML += `${tempCalculationNumber} &#61; `;
  } else {
    if (calculationStatus) {
      // calculationHistory.innerHTML = `${resultValue} ${operation} ${tempNumber}`;
    } else
      calculationHistory.innerHTML += `${tempNumber} ${source.target.innerHTML} `;
  }
};
const createHistory = (source) => {};

// Testing Number Button

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
backspace.addEventListener('click', () => {
  if (!calculationStatus) {
    if (tempNumber.length === 1) {
      tempNumber = '0';
    } else tempNumber = tempNumber.slice(0, tempNumber.length - 1);
    setResult();
  }
});

// Testing Operator Buttons

// Plus masih BUG
plus.addEventListener('click', (event) => {
  if (tempNumber !== '0') {
    if (resultValue === '0') {
      alert('ahye');
      tempCalculationNumber = tempNumber;
    }

    if (operation === '&#43;') {
      resultValue = parseInt(resultValue) + parseInt(tempNumber);
    } else resultValue = tempCalculationNumber;
    operation = '&#43;';
    updateHistory(event);
    tempNumber = '0';
    setResult('C');
  }
});
// minus.addEventListener('click', () => {
//   if (resultValue === '0') {
//     tempCalculationNumber = tempNumber;
//   }

//   if (operation === 'minus') {
//     resultValue = parseInt(resultValue) - parseInt(tempNumber);
//   } else resultValue = tempCalculationNumber;

//   operation = 'minus';
//   tempNumber = '0';
//   setResult('C');
// });

// Equal belum selesai dibuat masih bug saat operasi berlanjut memakai hasil operasi sebelumnya
equal.addEventListener('click', (event) => {
  switch (operation) {
    case '&#43;':
      if (tempNumber !== '0') tempCalculationNumber = tempNumber;
      recentResult = resultValue;
      alert(`${parseInt(resultValue)} + ${parseInt(tempCalculationNumber)}`);
      resultValue = parseInt(resultValue) + parseInt(tempCalculationNumber);
      updateHistory(event);
      tempNumber = '0';
      setResult('C');
      calculationStatus = true;
      break;
    case '&#8722;':
      break;
    case '&#215;':
      break;
    case '&#247;':
      break;
    default:
      if (!calculationStatus) {
        tempCalculationNumber = tempNumber;
        updateHistory(event);
        tempNumber = '0';
        calculationStatus = true;
      }
  }
});
