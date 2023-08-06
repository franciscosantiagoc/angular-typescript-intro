
/* funcion tradicional
function addNumbers(a, b) {
   
} */

function addNumber(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2) {
    return firstNumber * base;
}


const result:  number = addNumber(1,3);

const resultArrow: string = addNumbersArrow(1,5);

const multiplyResult: number = multiply(5);

console.log({
    result,
    resultArrow,
    multiplyResult
})
export {};