"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = [];
const stringResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
const printResult = (resultObj) => {
    console.log(resultObj.val);
};
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const numResult = add(+num1, +num2);
    const stringResult = add(num1, num2);
    stringResults.push(stringResult);
    numResults.push(numResult);
    printResult({ val: numResult, timestamp: new Date() });
    console.log(numResults, stringResults);
});
const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
const a = somePromise.then(result => {
    console.log(result.split('w'));
});
