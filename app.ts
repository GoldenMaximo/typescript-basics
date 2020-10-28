const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResults: Array<number> = [];
const stringResults: string[] = [];

type NumOrString = number | string;
type Result = { val: number, timestamp: Date };

interface ResultObj {
    val: number,
    timestamp: Date
}

function add(num1: NumOrString, num2: NumOrString) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }

    return +num1 + +num2;
}

const printResult = (resultObj: ResultObj) => {
    console.log(resultObj.val);
};

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const numResult = add(+num1, +num2);
    const stringResult = add(num1, num2);

    stringResults.push(stringResult as string);
    numResults.push(numResult as number);

    printResult({ val: numResult as number, timestamp: new Date() });

    console.log(numResults, stringResults);
});

const somePromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});

const a = somePromise.then(result => {
    console.log(result.split('w'));
})