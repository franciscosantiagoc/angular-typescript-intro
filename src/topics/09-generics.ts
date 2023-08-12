export function whatsMyType<T>(argument: T): T {
    return argument;
}


//let myString = whatsMyType('Hola Mundo');
let myString = whatsMyType<string>('Hola Mundo');
let myNumber = whatsMyType<number>(100);
let myArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(myString.split(' '));
console.log(myNumber.toFixed());
console.log(myArray.join(','))